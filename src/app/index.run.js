(function() {
  'use strict';

  angular
    .module('hireVideo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
