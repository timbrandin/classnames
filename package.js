Package.describe({
  name: 'timbrandin:classnames',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "classnames": "2.1.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['cosmos:browserify@0.8.3'], 'client');

  api.addFiles('classnames.js');

  api.addFiles([
    'exports-server.js'
  ], 'server');

  api.addFiles([
    'client.browserify.js'
  ], 'client');

  api.export('classNames');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('classnames');
  api.addFiles('classnames-tests.js');
});
