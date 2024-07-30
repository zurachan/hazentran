(function () {
    'use strict'
    angular.module('app').controller('home', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        OnInit()
        function OnInit() {
            $.blockUI()
            console.log('enter home')
            $.unblockUI()
        }
    }
})()