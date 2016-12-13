'use strict';

angular.module('hireVideo')
	.controller('dialogcontroller', function ($scope, $mdDialog) {




		$scope.closeDialog = function () {
			$mdDialog.cancel();
		};

	});
