/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  watchPaths: ['../../libs'],
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  serverBuildTarget: 'vercel',
};
