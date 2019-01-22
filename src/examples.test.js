import { signUp, globalSignOut } from './examples';

it.skip('should sign up', async () => {
  await signUp();
});

it('should sign out', async () => {
  await globalSignOut();
});
