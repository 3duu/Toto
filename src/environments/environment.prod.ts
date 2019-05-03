export const environment = {
  production: true,
  version: require('../../package.json').version,
  name: require('../../package.json').displayName,
  endpoint: require('../../package.json').endpoints,
  passwordConfig: require('../../package.json').passwordConfig
};
