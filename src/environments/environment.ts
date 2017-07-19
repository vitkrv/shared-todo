// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA9seut8nrnu_KIXD3SpvM3ZSoKuZCUMLI',
    authDomain: 'shared-todo-9b23a.firebaseapp.com',
    databaseURL: 'https://shared-todo-9b23a.firebaseio.com',
    projectId: 'shared-todo-9b23a',
    storageBucket: '',
    messagingSenderId: '840781808105'
  }
};
