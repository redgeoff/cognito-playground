import Cognito from './cognito';
import config from './config';
// import uuid from 'uuid';

const poolData = config.poolData;
const cognito = new Cognito(poolData);

const email = 'test5@example.com';

// const password = 'Secret123!';
// const password = uuid.v4();

// Note: if don't require uppercase, uuid can be used for password. Would probably want to create a
// script that sets password and custom:apiSecret.
const password = 'c6231092-af98-4205-99c6-3b44d15b5c7f';

// const username = email;
const username = 'f0041592-2d96-4310-a647-3a78c97bc776';

const token =
  'eyJraWQiOiIwZytGWTBRMXJKOW1EYmtocUl6bU0yVXdybzJkSXNQNXF5TXgra2oxbXZRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyZjkxOGJkNi1iNjNkLTQ3MzgtOGZjMy0zNTVmNjEwNjk4OTYiLCJjb2duaXRvOmdyb3VwcyI6WyJUZXN0R3JvdXAyIiwiVGVzdEdyb3VwIl0sImV2ZW50X2lkIjoiODNjNzc0MjAtMWRlYS0xMWU5LWIzZDItYWQxNzYwNmY4OWE1IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU0ODEyMjg2OCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMXg4QklOU2RjIiwiZXhwIjoxNTQ4MTI2NDY4LCJpYXQiOjE1NDgxMjI4NjgsImp0aSI6IjQ3NmQxZWM5LTk0NTUtNGZkYi1iOTdhLTdmNTdmYjlhODUwZiIsImNsaWVudF9pZCI6IjRvZTczY2dkMTB0a2prYm0xaDhhZXNmYjR2IiwidXNlcm5hbWUiOiIyZjkxOGJkNi1iNjNkLTQ3MzgtOGZjMy0zNTVmNjEwNjk4OTYifQ.GvOa3_Ege0IeBscmhEj9D_5hHagkrDXh__JhA5YzhA21cjDMJrmSAz0_XW73OrGFW-ww_TI5cJ738umDiusZzz8p2hVnHFB13oRZ3mo_8_jTzKxH619wP1fPyydF-xRbDA2H3l56RoAViPb3AskFnPdVlYCZfbSX6fuNSHEedOmXQAZuJg1qdJQVFRXwbMd0KQQIFtv2IMY2KYKCDnzZ8PeIfydXrgAFTaxALnpMUJ4EpsPXT658qhBY15bChbatHRtqsNy9lwfdMqrO5DiImch6BWpco9363OET_9r73APqMMgXcRP0e5c6jT1xELjHitZz15IJ4uzgewUY7q3-bg';

export const signUp = async () => {
  const response = await cognito.signUp(email, password, {
    email,
    phoneNumber: '+12061111112',
    apiSecret: 'my-api-secret'
  });
  console.log(response);
};

export const authenticateUser = async () => {
  // Note: you can log in with the email or UUID as the username
  const response = await cognito.authenticateUser(username, password);
  console.log(response);
};

export const authenticateUserWithoutPassword = async () => {
  const response = await cognito.authenticateUserWithoutPassword(username);
  console.log(response);
};

export const getUserData = async () => {
  const cognitoUser = cognito.cognitoUser(username);
  const response = cognito.getUserData(cognitoUser);
  console.log(response);
};

export const globalSignOut = async () => {
  const response = await cognito.globalSignOut(token);
  console.log(response);
};
