(function () {
    'use strict';

    angular
        .module('hireVideo')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig, $mdThemingProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        // toastrConfig.allowHtml = true;
        // toastrConfig.timeOut = 3000;
        // toastrConfig.positionClass = 'toast-top-right';
        // toastrConfig.preventDuplicates = true;
        // toastrConfig.progressBar = true;

        $mdThemingProvider.theme('HireBtn')
            .primaryPalette('light-blue', {
                'default': '400',
                // by default use shade 500 from the deep-orange palette for primary intentions
            })
    }



})();
