import Cognito from './cognito';
import config from './config';

const poolData = config.poolData;
const cognito = new Cognito(poolData);

const email = 'test1@example.com';
const password = 'Secret123!';

export const signUp = async () => {
  const response = await cognito.signUp(email, password, {
    email,
    phoneNumber: '+12061111111'
  });
  console.log(response);
};

export const authenticateUser = async () => {
  const response = await cognito.authenticateUser(email, password);
  console.log(response);
};
