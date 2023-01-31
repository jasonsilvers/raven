/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  watchPaths: ['../../libs'],
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  serverBuildTarget: 'vercel',
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
};
