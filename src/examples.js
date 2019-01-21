import Cognito from './cognito';
import config from './config';

var poolData = config.poolData;

export const signUp = async () => {
  const cognito = new Cognito(poolData);
  const email = 'test1@example.com';
  const response = await cognito.signUp(email, 'secret', {
    email,
    phoneNumber: '+12061111111'
  });
  console.log(response);
};
