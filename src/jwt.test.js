import { verify } from './jwt';

const accessToken =
  'eyJraWQiOiIwZytGWTBRMXJKOW1EYmtocUl6bU0yVXdybzJkSXNQNXF5TXgra2oxbXZRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyZjkxOGJkNi1iNjNkLTQ3MzgtOGZjMy0zNTVmNjEwNjk4OTYiLCJjb2duaXRvOmdyb3VwcyI6WyJUZXN0R3JvdXAyIiwiVGVzdEdyb3VwIl0sImV2ZW50X2lkIjoiNWViM2FlZGMtMWRkZS0xMWU5LWEwNDEtNTFmNjVjOWIxOWEwIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU0ODExNzY1MiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfMXg4QklOU2RjIiwiZXhwIjoxNTQ4MTIxMjUyLCJpYXQiOjE1NDgxMTc2NTIsImp0aSI6ImNmODQ1YWIyLTQ2NTktNGQ0OS1iYzYxLTY5NzdkNjg1MGFhZSIsImNsaWVudF9pZCI6IjRvZTczY2dkMTB0a2prYm0xaDhhZXNmYjR2IiwidXNlcm5hbWUiOiIyZjkxOGJkNi1iNjNkLTQ3MzgtOGZjMy0zNTVmNjEwNjk4OTYifQ.ClfneUjbw1v89vAjnnSPFWqeOcKdvE9PLxjtI8Xu7999YND6hDiKouIzaOUo389lH6jj4OuSDofyyGLqw8CDa2Fu-HvPxLo81B1YLdjQye22eDztSMU1zuRHWrj-vO11BcrLREox-Bqe08knd9xXt097DT1TCGQu__YrYabg4M7uD65q19zBVEZezvyZ5w-mCWLF8HRIs01VVXBJypbh0Hfol5kfhI4bc2ErjNZzjVCegR6I0hTBuWE0RBPde6PgB-VBv7xM9-XGSeBZEl8QgK_LKAY2UCCssymMbvq4fzlwizztZa1CQ5U5Jud_iCrHD9jqzgmy6KW5yWHiYpZYFg';

it('should decode token', async () => {
  const response = await verify(accessToken);

  // console.log({ response })
  // e.g.
  // { response:
  //          { sub: '2f918bd6-b63d-4738-8fc3-355f61069896',
  //            'cognito:groups': [ 'TestGroup2', 'TestGroup' ],
  //            event_id: '5eb3aedc-1dde-11e9-a041-51f65c9b19a0',
  //            token_use: 'access',
  //            scope: 'aws.cognito.signin.user.admin',
  //            auth_time: 1548117652,
  //            iss: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_1x8BINSdc',
  //            exp: 1548121252,
  //            iat: 1548117652,
  //            jti: 'cf845ab2-4659-4d49-bc61-6977d6850aae',
  //            client_id: '4oe73cgd10tkjkbm1h8aesfb4v',
  //            username: '2f918bd6-b63d-4738-8fc3-355f61069896' } }

  expect(response['cognito:groups']).toEqual(['TestGroup2', 'TestGroup']);
});
