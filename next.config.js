// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@danetheory/foo',
  '@danetheory/bar'
])

const isProd = process.env.NODE_ENV === 'production';

const baseConfigs = {
  assetPrefix: isProd ? '/' : process.env.BASE_PATH,
  publicRuntimeConfig: {
    basePath: isProd ? '/' : process.env.BASE_PATH,
  }
  // basePath: isProd ? '/' : ''
}



module.exports = withPlugins([withTM], baseConfigs);
