import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';

export default class Cognito {
  constructor(poolData) {
    this._poolData = poolData;
    this._userPool = new CognitoUserPool(this._poolData);
  }

  async _signUp(username, password, attributeList) {
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

    return this._signUp(username, password, attributeList);
  }

  async _authenticateUser(cognitoUser, authenticationDetails) {
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

  async authenticateUser(username, password) {
    const userData = {
      Username: username,
      Pool: this._userPool
    };
    const cognitoUser = new CognitoUser(userData);

    const authenticationData = {
      Username: username,
      Password: password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return this._authenticateUser(cognitoUser, authenticationDetails);
  }
}
