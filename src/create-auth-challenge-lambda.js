exports.handler = async event => {
  if (event.request.challengeName == 'CUSTOM_CHALLENGE') {
    // The value set for publicChallengeParameters is arbitrary for our
    // purposes, but something must be set
    event.response.publicChallengeParameters = { foo: 'bar' };
  }
  return event;
};
