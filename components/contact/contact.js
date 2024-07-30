(function () {
    'use strict'
    angular.module('app').controller('contact', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        OnInit()
        function OnInit() {
            $.blockUI()
            console.log('enter contact')
            $.unblockUI()
        }
    }
})()