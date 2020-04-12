const path = require('path');

const config = {
  firebaseConfig: {
    file: path.join(__dirname, '..', 'app.tsx'),
    patterns: [
      {
        pattern: '<apiKey>',
        replaceWith: '<apiKey>'
      },
      {
        pattern: '<authDomain>',
        replaceWith: '<authDomain>'
      },
      {
        pattern: '<databaseURL>',
        replaceWith: '<databaseURL>'
      },
      {
        pattern: '<projectId>',
        replaceWith: '<projectId>'
      },
      {
        pattern: '<storageBucket>',
        replaceWith: '<storageBucket>'
      },
      {
        pattern: '<messagingSenderId>',
        replaceWith: '<messagingSenderId>'
      },
      {
        pattern: '<appId>',
        replaceWith: '<appId>'
      }
    ]
  },
  expoConfig: {
    file: path.join(__dirname, '..', 'app.json'),
    patterns: [
      {
        pattern: 'App Name',
        replaceWith: 'App Name'
      },
      {
        pattern: 'appname',
        replaceWith: 'appname'
      }
    ]
  },
  authenticationClientIds: {
    file: path.join(__dirname, '..', 'src', 'pages', 'login', 'Login.tsx'),
    patterns: [
      {
        pattern: '<iosClientId>',
        replaceWith: '<iosClientId>'
      },
      {
        pattern: '<iosStandaloneAppClientId>',
        replaceWith: '<iosStandaloneAppClientId>'
      }
    ]
  }
}

module.exports = config;
