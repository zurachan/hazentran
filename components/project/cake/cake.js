(function () {
    'use strict'
    angular.module('app').controller('cake', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        OnInit()
        function OnInit() {
            $.blockUI()
            console.log('enter cake vpb')
            $.unblockUI()
        }
    }
})()