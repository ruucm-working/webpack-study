System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports('default', main);

      function main () {
        module.import('./foo-020ff730.js').then(({ default: foo }) => console.log(foo));
      }

    }
  };
});
