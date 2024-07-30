(function () {
    'use strict'
    angular.module('app').controller('about', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        OnInit()
        function OnInit() {
            $.blockUI()
            console.log('enter about')
            $.unblockUI()
        }
    }
})()