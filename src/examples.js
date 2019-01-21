import Cognito from './cognito';
import config from './config';

var poolData = config.poolData;

export const signUp = async () => {
  const cognito = new Cognito(poolData);
  const email = 'test1@example.com';
  const password = 'Secret123!';
  const response = await cognito.signUp(email, password, {
    email,
    phoneNumber: '+12061111111'
  });
  console.log(response);
};
