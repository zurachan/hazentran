(function () {
    'use strict'
    angular.module('app').controller('calldoctors', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        OnInit()
        function OnInit() {
            $.blockUI()
            console.log('enter call doctors')
            $.unblockUI()
        }
    }
})()