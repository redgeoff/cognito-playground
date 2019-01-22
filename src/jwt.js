// For details see:
// - https://stackoverflow.com/a/44049814/2831606
// - https://aws.amazon.com/blogs/mobile/integrating-amazon-cognito-user-pools-with-api-gateway/
// - https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html

import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';
import fetch from 'node-fetch';
import config from './config';

let pems = undefined;

const region = config.region;
const userPoolId = config.poolData.UserPoolId;

const toPems = body => {
  const keys = body.keys;
  const pems = [];
  for (var i = 0; i < keys.length; i++) {
    //Convert each key to PEM
    var key_id = keys[i].kid;
    var modulus = keys[i].n;
    var exponent = keys[i].e;
    var key_type = keys[i].kty;
    var jwk = { kty: key_type, n: modulus, e: exponent };
    var pem = jwkToPem(jwk);
    pems[key_id] = pem;
  }
  return pems;
};

const getPems = async () => {
  if (pems === undefined) {
    const url = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
    const body = await fetch(url).then(res => res.json());
    pems = toPems(body);
  }
  return pems;
};

const verifyPromise = (token, pem) => {
  return new Promise((resolve, reject) => {
    // jwt.verify(token, pem, { algorithms: ['RS256'] }, function(err, decoded) {
    jwt.verify(token, pem, function(err, decoded) {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

export const verify = async token => {
  const pems = await getPems();

  // Fail if the token is not JWT
  var decodedJwt = jwt.decode(token, { complete: true });
  if (!decodedJwt) {
    throw 'not a valid JWT token';
  }

  // Verify that the token has not expired
  if (decodedJwt.payload.exp * 1000 < new Date().getTime()) {
    throw 'token has expired';
  }

  // Fail if token is not from your User Pool
  const iss = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`;
  if (decodedJwt.payload.iss != iss) {
    throw 'invalid issuer';
  }

  // Reject the jwt if it's not an 'Access Token'
  if (decodedJwt.payload.token_use != 'access') {
    throw 'not an access token';
  }

  // Get the kid from the token and retrieve corresponding PEM
  var kid = decodedJwt.header.kid;
  var pem = pems[kid];
  if (!pem) {
    throw 'invalid access token';
  }

  // Verify the signature of the JWT token to ensure it's really coming from your User Pool
  return verifyPromise(token, pem);
};
