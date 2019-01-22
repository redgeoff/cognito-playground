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

const accessToken =
  'eyJraWQiOiIwZytGWTBRMXJKOW1EYmtocUl6bU0yVXdybzJkSXNQNXF5TXgra2oxbXZRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyZjkxOGJkNi1iNjNkLTQ3MzgtOGZjMy0zNTVmNjEwNjk4OTYiLCJjb2duaXRvOmdyb3VwcyI6WyJUZXN0R3JvdXAyIiwiVGVzdEdyb3VwIl0sImV2ZW50X2lkIjoiODNjNzc0MjAtMWRlYS0xMWU5LWIzZDItYWQxNzYwNmY4OWE1IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU0ODEyMjg2OCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMXg4QklOU2RjIiwiZXhwIjoxNTQ4MTI2NDY4LCJpYXQiOjE1NDgxMjI4NjgsImp0aSI6IjQ3NmQxZWM5LTk0NTUtNGZkYi1iOTdhLTdmNTdmYjlhODUwZiIsImNsaWVudF9pZCI6IjRvZTczY2dkMTB0a2prYm0xaDhhZXNmYjR2IiwidXNlcm5hbWUiOiIyZjkxOGJkNi1iNjNkLTQ3MzgtOGZjMy0zNTVmNjEwNjk4OTYifQ.GvOa3_Ege0IeBscmhEj9D_5hHagkrDXh__JhA5YzhA21cjDMJrmSAz0_XW73OrGFW-ww_TI5cJ738umDiusZzz8p2hVnHFB13oRZ3mo_8_jTzKxH619wP1fPyydF-xRbDA2H3l56RoAViPb3AskFnPdVlYCZfbSX6fuNSHEedOmXQAZuJg1qdJQVFRXwbMd0KQQIFtv2IMY2KYKCDnzZ8PeIfydXrgAFTaxALnpMUJ4EpsPXT658qhBY15bChbatHRtqsNy9lwfdMqrO5DiImch6BWpco9363OET_9r73APqMMgXcRP0e5c6jT1xELjHitZz15IJ4uzgewUY7q3-bg';

const refreshToken =
  'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.T0JDQQRszYgtp0kh_gB3yQWvyfsDJ4hcmNu7ZJadMRJ9AFT2RByKkSYLVjcyaFOukFfuaBee6CMuUaLxhrvVFVT5Oa5ECwIm0UAZAqTcYzJSab1X6hw23NxYjalWnOFmgij10cZUhGvVvJAdMVUisDoeBopbxMLVu5P115duNKCU6DpyuY034s8ZEmkqaBU3Avv3NXJaJ0nQWMjzCgvOz3TAeH0ztj-f3A3Qkcv5d3VRI1T5yvzs2ghU8ZNFfUJtZa58wWSY5kixxQyy4FedGhr4Yhnnp82UOKBNHKhUUr0rIJTfc4lqS5q_XlowzV6ipB5xZvrtXD_6H5qEeKY4Cw.5AjSJ5yW43CaYKk8.EADjYdLSV_RhbDIpmWUl7XA5LAJW7FnpVhYhAzq7ZIYgl0a7T42oXpI4XiRShNxMyDRbV05uQqgfV38u1J6c3EIgkyQ_MD8dQVNwyk8u6VIE8R2tNCBBZTi2j7mJdDEUrGSUwj7S9DO5AZDgzs8eiCqeJp3LKvRs7hhnw6ho24VMfCt5UZuI9mBs5m50hUu64aJ9NUPJ0BvzUPWG6uo3aGAEioyRiat6tNSgfpWfP2-2l6rTXHKD-31cpAgDjh_sQy-PtK8h40Vqs59fblPO2iCzXoGM23V6RldyYI87nN9W1YOc9BZYFjhNePIDqPerzrq3YY1zwqRV4urlab45YtCUPOEZc8aHTC9RlrBfrtXDhv1FG94xLBb6-CyApwGDRsRG9HhGc9-JVnbU7DD-N62Ssg8_FPlP5uPFdvgmk8FKbKl1fFLCAqVgIono9iVf-9fgxcI--CEccc5qAH-Ad6xQudKccl-IYFdJ818bLWE9OcfQk5pzB5cxOmXXSeUN6-C5hGQZ6g_KiMMzOz80sDU7Dhyc8AzljXOb5sqA3hy0fgiGPz3m0hmWqDGBpp7jGsXsbxmFz11W54zUqVyxXyYw-wG6pdilX5B8ps0cS1RHeEjqaWklrS7Whzqhk92MBQvnD6vg9vM0-u88BinFfrYJnHbb9FIJnKFSPHRO2WIiCaRFX2XY5k-4O5GAekXXKcH1Xa5HWX-W-cs-JlRn6IYxf1vRFm7B9BFpCmVi7xahh1vTFIMEo4CkzTj0-p23SZQadmVIOtvtBzMsFNqE1KrLEdFWmCLBVjTurerBdrpRE9tbP1-guuvywU3_vy-aCD_S6uiW3YC58ONXi32kf_0e0irVd4_YLMWuB2m3UNRrP0Kv1v7O3tFfuhSgzJ-eK5xTLh_Wkdp7fWezbttaCyZUVwmOff4zq5fFjoBU-0k5VroOeYkEynXtwa-_WWeGYjoNoD80G2mIZLRmiQFIrrLDOnpAzicTNgqAOFOpsIG2WLtDZV1SfudM-p7XN_TJAw-Dx20b__jtjT0wY08UvrSk68zbUzJLq5jy-3OaaMLtVhHcJ8VoqrxniIXPgdNE0r7lA9rWnhzW8KvC6DIQjlS9mSpp90gqQeR7NXbGtD41svpGHbKE0wYw8eBWECFqsXIPHkQIRmW4UMLQvV3coV3v-atx_TJ14rhI16q1pgYgmGXmL4DFc_bvdBkGGs--0pxAOeILn9QHORGO4rVuG_2ZavdI9DGKQl9HKbu5LA_oRPTVjVsxKX-9cz6ATXuD9yQgxGdZBIbHgw9DW90SCHfrsOtFiIbz9vctBiK8vlm9sQwjntVpxm-bxBY4hg.kxcizkJrOhtvOm4_lrf32A';

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
  const response = await cognito.globalSignOut(accessToken);
  console.log(response);
};

export const refreshSession = async () => {
  const response = await cognito.refreshSessionDirectly(refreshToken);
  console.log(response);
};
