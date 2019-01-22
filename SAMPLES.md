# SIGN-UP

status: 400
x-amzn-errormessage: Username should be an email.
x-amzn-errortype: InvalidParameterException:
x-amzn-requestid: d1175526-1da4-11e9-a041-51f65c9b19a0
{"__type":"InvalidParameterException","message":"Username should be an email."}

status: 400
x-amzn-errormessage: Password did not conform with policy: Password not long enough
x-amzn-errortype: InvalidPasswordException:
x-amzn-requestid: 31040606-1da4-11e9-a347-677fb0d30979


status: 400
x-amzn-errormessage: Password did not conform with policy: Password must have uppercase characters
x-amzn-errortype: InvalidPasswordException:
x-amzn-requestid: 4ffcfd05-1da5-11e9-b855-bd6a9d280b8f



status: 200
x-amzn-requestid: 726c4bc0-1da5-11e9-a347-677fb0d30979
{
   "CodeDeliveryDetails":{
      "AttributeName":"email",
      "DeliveryMedium":"EMAIL",
      "Destination":"t***@e***.com"
   },
   "UserConfirmed":false,
   "UserSub":"154fb35b-7d4f-41e5-9948-db562e8f0083"
}


status: 400
x-amzn-errormessage: An account with the given email already exists.
x-amzn-errortype: UsernameExistsException:
x-amzn-requestid: 1c68d67a-1da6-11e9-b3d2-ad17606f89a5
{"__type":"UsernameExistsException","message":"An account with the given email already exists."}



status: 400
x-amzn-errormessage: A client attempted to write unauthorized attribute
x-amzn-errortype: NotAuthorizedException:
x-amzn-requestid: 59273fc4-1df8-11e9-bc1d-c97b4a31d156
{"__type":"NotAuthorizedException","message":"A client attempted to write unauthorized attribute"}


status: 400
x-amzn-errormessage: Password did not conform with policy: Password must have uppercase characters
x-amzn-errortype: InvalidPasswordException:
x-amzn-requestid: 420855eb-1dfb-11e9-b96b-ef86fa655126
{"__type":"InvalidPasswordException","message":"Password did not conform with policy: Password must have uppercase characters"}


# AUTHENTICATE USER

status: 200
x-amzn-requestid: 726f106d-1db8-11e9-b855-bd6a9d280b8f

{
   "ChallengeName":"PASSWORD_VERIFIER",
   "ChallengeParameters":{
      "SALT":"18b2b3c892283b8cd818fa96894a3438",
      "SECRET_BLOCK":"XS0zKlIlRQPcxv0PBpetHgb5kd22LF7nhlSENvMDWNNb6nLV7mHFeutYHntFbqDANG7Fp3FBC18KcocLk2SqQ/v+L1yWAjz4vTmKOqiUA0DedNCC4Mkz581iF94K3UI2npzoxhlhPL46QXQLGw4oxkLifNRotVozbdTFNN/N6/RGAjW/WOXDUJrJIKdgI4wL6ofy3pYBOCMBA7iV8jkKDSZHh4bAuP5yHgnkyd1FKQ8aVTBL4eZObk+nU6GnFF7GFAlfMlgzYJsl1xs2r22y1EirFxjb0sM7tm1FN+vaZlNmvht9tEo50eZIdR7up9/HdmzK7xvHPooWcu9IBBvKtFyn3/Q4RUbHzIF25rDGOXNNlSkTgKyaTMRwQ8AJKGxaN8Oc++USwBjhYgtNwsjRLrzZeKS0nr/IVExgc+iTsccdFos+gvDmPRQG05PvakJk8os1VHwmLWWLtKxmHoBgvdBssyIX8BeL/kPg/inrFIQA9qwJndLJVTUJP/ICiLZEb4FTOZQCXJETqxob6KrlMu5YjPXs+QVQvGNmxwR/kDyTVBQuIm7N3fOgJeV75ccqjQAGWunNzm+pPfMGejjKUXwo0fDMLB/hDciM+/d5LeEXE08mS82H5flqM9yAK9NZ8mki8A0QiNsewVs8QzR4lA05VXsHc6mQydsxKtzWKCEZWzoZxxYr0d3RFyRqiX/kfDYxAA6DpDRJG02jJ7irSrxS0MMSQqAQpeMcpl5Fq0/SLRZFKKXWRU2x7HPTCsnE3KDi7uAe7lZGzVFHoahewoxwFD8TsmekIp13Y9zsA4BJ8ADLAlFv7WZdzma4mD6Ea1FmlIuyuY7s9+AI4LjEpnBgU0NYgZRoD9KRi0E6n1V3Lp9PewibmefOo4ubK7JhPTDUNLzntOPfCDHhzzEKpUoE4kjY8qm4JgMmsMDpx7wIQTp2JUj4V89lxvxA3BsVVtl4qTkHYeH25WdHHRXOiDC1n9Vl9Jea6A7+AmQqVcoXjbJNwP3jJYQDORlhcSu7ae0JBVf++OXzPSyUngRPFjKwVnRsnKs7kgS3aU0nqim+lk+kA/KqpeV7LyZ/P0ZV80W5D3yWqIIhX2BtImYNWdaCWIsBzU6QZ5AgSOUAysREXJ3W3ZE4lMgtC38nXXdPyFqBKjEj/RusinK9G/BsHG5zjg3sdTJCcrHxe9c+UaU9bWehorQS+xZl8CiH+Za2/pyDzZmc3l6TurvFTGdNz1Q54LeGpKmK0U+vRIu2mPTJrPCMLNdnW+JA5o9F1HqUnC26Pj/LYweoAsfDT+fYCJw4SW+iqR3FRdMzfHg1tUCS0fsjOqr4KzHXpaOq9j5037t+CRNEctfDbIfqPRMlphNfQzUEPVXl7zp+a+H2+i1cvJWTZTO2gIk7H56UEM57BvfCpH/FuuAreI0ogtB4pFcodQQDN/FwOOnVYKGS5aT0i/fJg/c7X26d5uJw2yHzrecO/q69G5zsDdyeBsK59wVz5WCSCtWkzwyQ92mji/lDL6AnW70zVF6XlDysjeilc4xjOWnnQ922uV2fsZmiuGpPg0dM3GI7dPGciWhKBTWhoDRlHEd6nGb0L2XS5Of+bvlXM3lLup6G+Yoqd1GFSDwUmC0NRFLtKe7os0i3zxkSvojsW0cvWQMOEEXoK5FjQ/Z1krsqkvgtRyarqYRkb+RQCbDkg3pIFYrRwZ4+D0HEVaSw95dCo509Ow==",
      "SRP_B":"561ec6686397cf506b053e103d8e210124e138995ecae3d94b29ae234882bb7503cc1f4d7169f67f3a4e68c3c1e282a5b5f880214f372683441312e654f3b3649e8cc7f69d44eb73cb19b10995aae51052ab95ecd72e95e5e30f9c45bf614783c07ab08bef60c290edf54a7d0763fcf08c5cbdd335e3b5f8218ee9f39eaf05de4c3a960134ff5ec08c554ad733330e933a907c32694c672b3a38869bd869d04f7944d1d8a6f81635afcc48ac7bef04fa01103b706e9d4681c8207b173279015f19db9f63a88dac10bf96d7f804346c3709e35a289b2d933d44dde2eea6c9a9fbe9227bdc7bbb4e0e662d9d6415d91a2c9f56fa06c374b20a7acb86e58c53ad7e3cffe7fcff5c395394d677e338252b40bf40ce636b6ca092ec9255a38d8645a787900911b9a6582ea6e9ab8bceb1e2adb62156e642aaff71c6f0e58a41485ecea1d55af6be966674cdaf9565cdf3f7e5c6ce13cab2e057170420474d57dca644e3fcbd030ba0c9fa5c72505b00bf20dc510b971775969d4882a93e16fb0bee18",
      "USERNAME":"154fb35b-7d4f-41e5-9948-db562e8f0083",
      "USER_ID_FOR_SRP":"154fb35b-7d4f-41e5-9948-db562e8f0083"
   }
}


status: 200
x-amzn-requestid: 72a93381-1db8-11e9-a041-51f65c9b19a0


{
   "AuthenticationResult":{
      "AccessToken":"eyJraWQiOiIwZytGWTBRMXJKOW1EYmtocUl6bU0yVXdybzJkSXNQNXF5TXgra2oxbXZRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNTRmYjM1Yi03ZDRmLTQxZTUtOTk0OC1kYjU2MmU4ZjAwODMiLCJldmVudF9pZCI6IjcyYTkzMzgxLTFkYjgtMTFlOS1hMDQxLTUxZjY1YzliMTlhMCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NDgxMDEzNjQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yXzF4OEJJTlNkYyIsImV4cCI6MTU0ODEwNDk2NCwiaWF0IjoxNTQ4MTAxMzY0LCJqdGkiOiJmZmI0NWM5Yi0yZTY1LTQ5NDctYmE3YS1iM2Y4NGQ3YTcyODQiLCJjbGllbnRfaWQiOiI0b2U3M2NnZDEwdGtqa2JtMWg4YWVzZmI0diIsInVzZXJuYW1lIjoiMTU0ZmIzNWItN2Q0Zi00MWU1LTk5NDgtZGI1NjJlOGYwMDgzIn0.GbvhOvm5WTMkRC_S-xL1RXeKn1k1kl5ObS1p2_-D6jpGREx1cZf876pc05VfmwvwSTbzxCHtK0uNkti1ZKGi9wVHth2LjwJ0WGYUNmH90DwAjaL9bZKYL_GPV2iR40RZ7x96fMbbngCKh0a7WoIQ97PP0nTGm9v5uKCDu1-hBfhig4NN0Ta_3W6-YxiEKbmVA6iPzEsu53SG2g2Oegx9PaL-zn-Yh5IfRIK_sKecNT1xTURo5yuFgBvbj0ruIGKfGuTSV4xFXVv-h3zQQ7BdwqW4v62nqwmRS8VP4ii-mpfLEfpGol26yovr-VptvUqN1jdE1ykyyEGTwZNjuiY7Uw",
      "ExpiresIn":3600,
      "IdToken":"eyJraWQiOiJxQmFmZ0Q1N2VzdCtiZ29iMlRMbE5EaHdxVThvSTJGcHliVUxGT254bHdrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNTRmYjM1Yi03ZDRmLTQxZTUtOTk0OC1kYjU2MmU4ZjAwODMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yXzF4OEJJTlNkYyIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiIxNTRmYjM1Yi03ZDRmLTQxZTUtOTk0OC1kYjU2MmU4ZjAwODMiLCJhdWQiOiI0b2U3M2NnZDEwdGtqa2JtMWg4YWVzZmI0diIsImV2ZW50X2lkIjoiNzJhOTMzODEtMWRiOC0xMWU5LWEwNDEtNTFmNjVjOWIxOWEwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NDgxMDEzNjQsInBob25lX251bWJlciI6IisxMjA2MTExMTExMSIsImV4cCI6MTU0ODEwNDk2NCwiaWF0IjoxNTQ4MTAxMzY0LCJlbWFpbCI6InRlc3QxQGV4YW1wbGUuY29tIn0.hcpXd2kZUlA7SzGIbevTHmWNBL8-ZbzJnFZiCPRGY6_xQ3HoevOYsXpCyN9dKn--2Dmos4QdfTYcRz2k-1vnxnGApSCyHErw_be72W22Co1Tf8M9VLwH0OgNmT_WnAar2wPuHQJgVdbR79WbOKLIx1-0e3l75DmeIaru5LeqV_c4LvRaFHsMZBarQuOcqQ9594iImLkBuhxFrJ_rosp22sCYzwxcciRUMd7Oi9-LqpavMv6gaYwZRGyuQqn8VbaRnTjtTXQyPLpqjawuZDLct6JcvFFMy8QxY7FC-oW_XuYGb0RmupUA6LKvPIUYQhO_iAUZ3tHg9RFgwSc-X6eiwQ",
      "RefreshToken":"eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.XLZdrWa9Xqxzhb3mPisw-4fwbAufcmHI0nGyw1r-xPFGVRXPOK-TwUFbiJEjur5-0acmkdyKp2vo9Aaa4LBKKaZcHhsMRzVrzwuzAgumGiTSc-IETQTGKwFQASJPeH8F5aNOcDr4cp6TUbV2U9jU0gYjkd3tR_uPMtyRVVPFouX-c1QsHadCyz3jmm-fQaL9opllMeM94F_XO4cuL9bffq_DOH1Qt--hitUIFiCgB9zUramQHOGgdn8P2flPzUNgAcc8STxbu1XY70_q-wM9BbD_jvfz4Hp68RrisspMUhV-qG0H8I70Y87CXhvsj_FPEJ3E7ibHONEL2zFumw1W6g.-3o28MJmjS9cYP65.Es-AuqkW-9Y0hM33mor_61JtvpovSQ2v_mgqg7BNKSHGITJh0EjzBEhXjG5BiHkmCQvCMwe1leEUymwpqegHklNgtGkBHmwimJm6Yy2W_l-d0_ycQo4lrOzquTSxhtAKZ-v3NGPjOCFM3fFo_z_9bk1EOFb3XWzSP53nMODvaNozOGIIiLQrFYgHon3jCLn63zJTs-immsTURHZnft7ZsZu2vYUCTLgb6p1oMv17ikw-6iv5-MLnKmB5y0Lz0Z2E4HxhqgNmHlS8Ny2dJZLypXBzy_YnXQQhGRgJf9bFiRB7t9mmAySWRsnpyvqWBQGoLkqdHP6AKDQgsH92k-Ogc0j2tdWwXmypyrrOEofTou9xzmo-OuH2PFaG2pCUZ-JEWBT2hl6-0avybxeuKaoGg4Xq900vJDYhGdzjT6Kk_XxnEtZ2Myx3psY1sPgnSQDY4BvTq5sPWm16raBIY6oobACLgMlN2uaRL-t6pPI9m1yGVFd_L7SqpXpnKTNPM2koZueINpw0aRe3eILQfoSF5vkgFFzxYhxK0T22_sBJfw_FpMxZo-ODekRmeNHhPTdGe4os3hHxxsFh2ybpQNOWoq3Npdqt3Fx81OcD8pBumvxPwBmKjzAPgzDQ_xaX4rde3OPf37ly5cyyOeNeJA7Mlc7BLrzyL3H47DOnoEf_a0-26ZX_yqxDGLjRbg8v2ZpRLJMWVDnLtSdzoC5CJIC3t7QMookdNC1rm7UTlT3viNXIY_zupujsbiWY9lzOA1jXPVuFaq2ZMPfR1mZ9K4WyTT1eSZzDgkpfKaND7kBvs-bSWxZr20XsRThnINDtZTMqwh14eQ1q0pPymuN7bGvE4SCymQCce0nbxIggIflh-MhX1T-FLoMdB8-GXC2HN10GvoIctUd4fX-MqEHgwsuvQTPhJT7_3-dwojVY5Ze_tcPZ83uKtDznSO2EobTN5WPOd9QP1oTxOAMSl8dz2f3bA5VbL3jqPS7Syb5dvyhjpj2ez2vNyxzwGfP_vJjljt682ZKxUnV23mr0GnoiCRsRESbCQ_lgIWCstR2-fzgYa5JF-GTLNWOjsHPxdejvHnBbzz56QpsLGaj7-s0SAJZmr3r-yMb3thehzMJZ8nLmgcrqKsrangVYf89VG-5wipfz8xrnnJVGGyc6LSimAZKpVcnmnzr1w_tuQes_ODfVuXZvVgJvo_Pr3w1Hdht7G7RuwckfWGg0WatzKfXO953nGhyqRZat71sJLZQ0G0n4iQK7_WLrL0ZqCinefD0YLzUHZtAi4Uj9mV394l627npnIzANPJK2PBqfv5S5atrA26coa8PqUS9-WnVbZOCAcQ.p-imivcq8BJQ2eyt6LmqMQ",
      "TokenType":"Bearer"
   },
   "ChallengeParameters":{

   }
}


status: 400
x-amzn-errormessage: User is disabled
x-amzn-errortype: NotAuthorizedException:
x-amzn-requestid: 07e20549-1dc0-11e9-b96b-ef86fa655126
{"__type":"NotAuthorizedException","message":"User is disabled"}



x-amzn-errormessage: User is not confirmed.
x-amzn-errortype: UserNotConfirmedException:
x-amzn-requestid: 24d8b8ff-1dc0-11e9-a041-51f65c9b19a0
{"__type":"UserNotConfirmedException","message":"User is not confirmed."}


status: 400
x-amzn-errormessage: Incorrect username or password.
x-amzn-errortype: NotAuthorizedException:
x-amzn-requestid: 733a98c3-1e69-11e9-bc1d-c97b4a31d156
{"__type":"NotAuthorizedException","message":"Incorrect username or password."}


status: 400
x-amzn-errormessage: User does not exist.
x-amzn-errortype: UserNotFoundException:
x-amzn-requestid: ddd45491-1e69-11e9-9a61-611fead63397
{"__type":"UserNotFoundException","message":"User does not exist."}


# Global Sign out

status: 200
x-amzn-requestid: 99d75769-1dea-11e9-bc1d-c97b4a31d156
{}

status: 400
x-amzn-errormessage: Access Token has been revoked
x-amzn-errortype: NotAuthorizedException:
x-amzn-requestid: 539e0ba9-1dea-11e9-975d-43cfa037e426
{"__type":"NotAuthorizedException","message":"Access Token has been revoked"}


status: 400
x-amzn-errormessage: Access Token has expired
x-amzn-errortype: NotAuthorizedException:
x-amzn-requestid: 855e3108-1e6a-11e9-975d-43cfa037e426
{"__type":"NotAuthorizedException","message":"Access Token has expired"}


status: 400
x-amzn-errormessage: Invalid Access Token
x-amzn-errortype: NotAuthorizedException:
x-amzn-requestid: a81b5141-1e6a-11e9-975d-43cfa037e426
{"__type":"NotAuthorizedException","message":"Invalid Access Token"}


# Get User Data

status: 200
x-amzn-requestid: 188d6576-1dfa-11e9-b855-bd6a9d280b8f
{"UserAttributes":[{"Name":"sub","Value":"1932694d-0e99-48fd-835d-05fb69eb937a"},{"Name":"email_verified","Value":"false"},{"Name":"phone_number_verified","Value":"false"},{"Name":"phone_number","Value":"+12061111112"},{"Name":"custom:apiSecret","Value":"my-api-secret"},{"Name":"email","Value":"test4@example.com"}],"Username":"1932694d-0e99-48fd-835d-05fb69eb937a"}
