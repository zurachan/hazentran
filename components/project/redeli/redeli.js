(function () {
    'use strict'
    angular.module('app').controller('redeli', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        OnInit()
        function OnInit() {
            $.blockUI()
            console.log('enter redeli')
            $.unblockUI()
        }
    }
})()