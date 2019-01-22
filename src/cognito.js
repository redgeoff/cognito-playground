import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoRefreshToken
} from 'amazon-cognito-identity-js';
// import * as AWS from 'aws-sdk/global';
import fetch from 'node-fetch';
import config from './config';

const API_URL = `https://cognito-idp.${config.region}.amazonaws.com`;

export default class Cognito {
  constructor(poolData) {
    this._poolData = poolData;
    this._userPool = new CognitoUserPool(this._poolData);
  }

  async signUpPromise(username, password, attributeList) {
    return new Promise((resolve, reject) => {
      this._userPool.signUp(
        username,
        password,
        attributeList,
        null,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  async signUp(username, password, attributes) {
    const attributeList = [];

    if (attributes.email !== undefined) {
      const dataEmail = {
        Name: 'email',
        Value: attributes.email
      };
      const attributeEmail = new CognitoUserAttribute(dataEmail);
      attributeList.push(attributeEmail);
    }

    if (attributes.phoneNumber !== undefined) {
      const dataPhoneNumber = {
        Name: 'phone_number',
        Value: attributes.phoneNumber
      };
      const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
      attributeList.push(attributePhoneNumber);
    }

    if (attributes.apiSecret !== undefined) {
      const apiSecret = {
        Name: 'custom:apiSecret',
        Value: attributes.apiSecret
      };
      const attributeAPISecret = new CognitoUserAttribute(apiSecret);
      attributeList.push(attributeAPISecret);
    }

    // Note: will need to use getAttributeVerificationCode to verify user when creating API user
    return this.signUpPromise(username, password, attributeList);
  }

  async authenticateUserPromise(cognitoUser, authenticationDetails) {
    return new Promise((resolve, reject) => {
      return cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          resolve(result);
        },
        onFailure: function(err) {
          reject(err);
        }
      });
    });
  }

  cognitoUser(username) {
    const userData = {
      Username: username,
      Pool: this._userPool
    };
    return new CognitoUser(userData);
  }

  async getSessionPromise(cognitoUser) {
    return new Promise((resolve, reject) => {
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err);
        } else {
          resolve(session);
        }
      });
    });
  }

  async authenticateUser(username, password) {
    const cognitoUser = this.cognitoUser(username);

    const authenticationData = {
      Username: username,
      Password: password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const response = await this.authenticateUserPromise(
      cognitoUser,
      authenticationDetails
    );
    console.log({ userData: await this.getUserData(cognitoUser) });
    // console.log({ groups: response.accessToken.payload['cognito:groups'] })
    console.log({
      groups:
        cognitoUser.signInUserSession.accessToken.payload['cognito:groups']
    });
    console.log(response);
    // console.log(cognitoUser);

    // const session = await this.getSessionPromise(cognitoUser);
    // const refreshToken = session.getRefreshToken();

    // const refreshToken = response.refreshToken.token;
    // console.log({ refreshToken })
    // const refreshResponse = await this.refreshSession(cognitoUser, refreshToken)
    // console.log({ refreshResponse })

    // console.log('signing out')
    // await this.globalSignOutPromise(cognitoUser);

    return response;
  }

  async initiateAuthPromise(cognitoUser, authenticationDetails) {
    return new Promise((resolve, reject) => {
      return cognitoUser.initiateAuth(authenticationDetails, {
        onSuccess: result => {
          resolve(result);
        },
        onFailure: function(err) {
          reject(err);
        },
        customChallenge: function(challengeParameters) {
          console.log({ challengeParameters });
          // // User authentication depends on challenge response
          // var challengeResponses = 'challenge-answer'
          // cognitoUser.sendCustomChallengeAnswer(challengeResponses, this);
        }
      });
    });
  }

  // Note: probably need lambda for this, yup:
  // https://aws.amazon.com/blogs/mobile/customizing-your-user-pool-authentication-flow/
  async authenticateUserWithoutPassword(username) {
    const cognitoUser = this.cognitoUser(username);

    cognitoUser.setAuthenticationFlowType('CUSTOM_AUTH');

    const authenticationData = {
      Username: username
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return this.initiateAuthPromise(cognitoUser, authenticationDetails);
  }

  globalSignOutPromise(cognitoUser) {
    return new Promise((resolve, reject) => {
      cognitoUser.globalSignOut((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  getUserData(cognitoUser) {
    return new Promise((resolve, reject) => {
      cognitoUser.getUserData((err, userData) => {
        if (err) {
          reject(err);
        } else {
          resolve(userData);
        }
      });
    });
  }

  // Note: there doesn't appear to be a way to use aws-amplify to sign out with just a token, so
  // we'll default to using the RESTful API directly. Also, there doesn't appear to be a way to
  // revoke a single token, just all the tokens for a user.
  async globalSignOut(token) {
    const headers = {
      'X-Amz-Target': 'AWSCognitoIdentityProviderService.GlobalSignOut',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-amz-json-1.1',
      'X-Amz-User-Agent': 'aws-amplify/0.1.x js'
    };

    const body = { AccessToken: token };
    return fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

  async refreshSessionPromise(cognitoUser, refreshToken) {
    return new Promise((resolve, reject) => {
      cognitoUser.refreshSession(refreshToken, (err, session) => {
        if (err) {
          reject(err);
        } else {
          resolve(session);
        }
      });
    });
  }

  // async credentialsRefreshPromise() {
  //   return new Promise((resolve, reject) => {
  //     AWS.config.credentials.refresh((err)=> {
  //       if (err)  {
  //         reject(err);
  //       } else {
  //         resolve();
  //       }
  //     });
  //   });
  // }

  async refreshSession(cognitoUser, refreshToken) {
    // const url = `cognito-idp.${config.region}.amazonaws.com/${config.poolData.UserPoolId}`
    // AWS.config.credentials.params.Logins[url] = idToken;
    const cognitoRefreshToken = new CognitoRefreshToken({
      RefreshToken: refreshToken
    });
    return this.refreshSessionPromise(cognitoUser, cognitoRefreshToken);
  }

  // Note: there doesn't appear to be a way to use aws-amplify to refresh a token with just the
  // refresh token so we hit the REST API directly.
  async refreshSessionDirectly(refreshToken) {
    const headers = {
      'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
      Authorization: `Bearer ${refreshToken}`,
      'Content-Type': 'application/x-amz-json-1.1',
      'X-Amz-User-Agent': 'aws-amplify/0.1.x js'
    };

    const body = {
      ClientId: config.poolData.ClientId,
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: {
        REFRESH_TOKEN: refreshToken
      }
    };

    return fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
}
