import { verify } from './jwt';

const accessToken =
  'eyJraWQiOiJud3U1cDVMUmZjWFFucmloUmZYeHdORWRkSGJUOWtOeFlcL3pySW4rd2cwQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkYjM3NDQ2My1mZmJjLTQzNzktYjY3YS0xNWI1OTg2MWI5NzgiLCJjb2duaXRvOmdyb3VwcyI6WyJNeVRlc3RHcm91cCJdLCJldmVudF9pZCI6IjMzZGZlNDMzLTFmMDEtMTFlOS05MWVjLTdmYzI2YzdjOGYzZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NDgyNDI1NjMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yX1RSWTV6cGh4biIsImV4cCI6MTU0ODI0NjE2MywiaWF0IjoxNTQ4MjQyNTYzLCJqdGkiOiJmZjEyODYwZS04MTE3LTQyZjUtYjI0OS01NzlmNmI5NjMyMGYiLCJjbGllbnRfaWQiOiI2cWZtZ2hnazR0a3M4aXAxZWh1Y3BtZmwxZyIsInVzZXJuYW1lIjoiMTZjNTgyN2MtODEyMi00Yjc2LTkzNWEtYmQ3MzE1Y2I2NmRkIn0.gPFGQgcCsQE5nAAcf-SqPIUexAxHccpZVwSEsvqHlJ_ajdzKX3hbaOgxpSt76At7GtuwEQQYBirkfXtnbBteSRkZOoAPorqwp3p2FOan4KaZbgGYNb8ZB8dlSEB8a6K-NKoKZ_MUAeimyJvEdOZ92kNMoBMSqrgeCEZIV4uKCrFp7abPRlFAz4jt_GkgCy-E5RlEeqhR-k4BQzA_1Xgfyc-vVd39vBn57X76C322wJd2F4FaFS8-oFvEY66jmHqbmp5CFe8m8EjU_ESeLYIIbRJC-rx1Sky6TEEYrCWICP6wpcWHuRe8TKV2YqPL447UoJKkuKLdisbATrnbCaS-NQ';

const refreshToken =
  'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.ANUCBpcP1ENWXSA_R_fT83JOQ5EAyYDYnzOCjd1IWM3uamoPzyW6Tw6ZfcP9YWVfmzFcmOsgHJOSIXUQLinlq90NSjhCwmVBtXsDA7DkVsxuSv_KX0RTDffeWDjPYFMY2ChE_Wdyc6oKQAOhhgOpUcvoi4U4TECDB2PdRZ4c1-xieCG16qyKxnWW7vhGu1H6NvB9XO_3ZXG0GW8_ZUs_l6xTOGQz4asaNaJniFEemPva5b44mCQYEA2L-igdtDqEN-jV8U5iI4PGH9BiUCc3H_yurR2wTPqzRcyH_if48D6wAmQ_Lvmmlh_p6L8TrEGZ7v_cIzTJ77Q-eQD1zzvvBA.9GyuS-p8cA6Iywne.zrfuCcFhQpfE_HTctFQEWHTUlS1YD1mB7d2kdR1kkq5ZLn7KA9S9bBFJK6bdaPkxm0NtMjEnNeRczh2VkUHvS3Jj08DtlGyqS8-0gpu-FcP5IyRY0ZX_QxxMmpO67jMOMyG1Zaa5pRKfTzyMrICzJ8yRHOqi7lea8EP6lEvSWeEnhH--TOTiuABSv_K1DrOZ2d3KUEsq0WcFxAfKUomYaZmGcpPCXt5hDEp6ysXNVEZHE4q4ZJNyEur4idm5A2MeurobHWQSEkhexN6GrKnvz32nDUgH8hv4RypZX3HaVxuM_Ernzzy2SRxTnVqu0qAMlcTQn5LC6qD97x3ChiTqEiAS32EB-eh9kJFieCtVjb1Dok_PWx0zmc8I4zma6oSERG0Gfrjiiv-mOKdMnoKfphnR9wXcuOhysPfYSuZf7ESLKtXJStIiRdJrQmPzwLMjojVJ67vOMjlOQEdinRGC2gLOETQX8e628bsi6f-P_riKM561ChwmmyiyMWH_b_zAdvckKL-Rm4NgMI8FGFskHgF8XoLJ4E77Z1yAwKMKjguWJtRGesxEMnDqVzmUHJudDDt9WWyIupxx-C4yPZHBZRrb4qsf47O5bLIdEKxO3mkoFCZ3HAkEiivEWlWjhkjeWycq4M7l-w_TNhSBPoOhKoA0ZrmZpMHuBHnsZ3l7vtnaYMy0_Z9Qm8lJZS42JkvQc_uofKadVcUFqp59ZfaV-98kEKAcFCZ3JjDs8joTucMrhD5i47TiYzwxk78XLQSBW81hF3ICa5VKz9eR6GiwzkxwarMTQIjqANIaSZ0NJd_DOHUNUjDvZqPb2eUHQ23GKUJrlpqSCBTjhhvOKaGYbZvQwldrl25v-3VY159qYIhxNSfP2Pd9UNCW6apONdxi-U8X902mRr_XewHrWJ6qzx6geuVh1SWbkzdooaY-cIT_8Rc6uhAzXmM2M54LIPrmpv6HFjdPkQj26baL2U9KZZlpmv7NDhEOuoVyl-dqhAXxea3ulRPwCy6nlb4I9-VwJnFt-UuJ_M3pv83vihtCFT3O_V7lKmipPXAPxvW4ZJ6JQCQVoc4XEy8vMGKp0aJwiYtxG8-VeT1vEML65Dg4bSYRdwXtRIlZna3wMcFopzwSHUZvuQxZ472S3cPzX1KBrotM4N3LefneKVqPC17Dhh5pP2RztbhH5NBg563u41-7d3lma0vAQEVuehYSee4ILRDI3uCiSUgcFEN9C7aMzTO4PCdR9f873E27_kih79I_j7TuJL0JEzkvfhYtHE9TIWj8tmckTC4eSCY3fWvfgUxhnYh8U6XhhPUcNxyI5Ihm3neq1vf267V_vTyrnQ.BNC8kDS79IyEpFOBnfOQig';

it('should decode token', async () => {
  const token = accessToken;
  // Note: refreshTokens cannot be decoded this like following as they are not JWTs
  // const token = refreshToken;
  const response = await verify(token);

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

  // console.log({ response })
  // expect(response['cognito:groups']).toEqual(['TestGroup2', 'TestGroup']);
  expect(response['cognito:groups']).toEqual(['MyTestGroup']);
});
