import Cognito from './cognito';
import config from './config';

const poolData = config.poolData;
const cognito = new Cognito(poolData);

const email = 'test2@example.com';
const password = 'Secret123!';
// const username = email;
const username = '2f918bd6-b63d-4738-8fc3-355f61069896';

export const signUp = async () => {
  const response = await cognito.signUp(email, password, {
    email,
    phoneNumber: '+12061111112'
  });
  console.log(response);
};

export const authenticateUser = async () => {
  // Note: you can log in with the email or UUID as the username
  const response = await cognito.authenticateUser(username, password);
  console.log(response);
};

export const getUserData = async () => {
  const cognitoUser = cognito.cognitoUser(username);
  const response = cognito.getUserData(cognitoUser);
  console.log(response);
};
