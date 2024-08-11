(function () {
    'use strict'
    angular.module('app').controller('home', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        OnInit()
        function OnInit() {
            $.blockUI()
            $(".cube6").addClass("cube6-transfer ");
            $(".group134").addClass("group134-transfer ");
            $.unblockUI()
        }
    }
})()