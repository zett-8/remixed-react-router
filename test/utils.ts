export const setTestEnv = (env) => ({
  ...env,
  VITE_CLERK_PUBLISHABLE_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  CLERK_PUBLISHABLE_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  CLERK_SECRET_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
})
