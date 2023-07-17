Package.describe({
  name: 'sergeant:test-packages',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('2.9.0')
  api.addAssets('./.babelrc', 'server')
  api.use('typescript')
  api.use('zodern:relay')

  api.mainModule('index.ts')
})

Npm.depends({
  zod: '3.20.2',
  '@zodern/babel-plugin-meteor-relay': '1.1.2',
})
