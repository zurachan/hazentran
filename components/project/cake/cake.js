(function () {
    'use strict'
    angular.module('app').controller('cake', ['$scope', Controller])
    function Controller($scope) {
        var vm = this

        vm.primaryColor = '#FF37A4'
        vm.primaryColorRange = ['#FFD7ED', '#FFAFDB', '#FE87C8', '#FF5FB6', '#FF37A4', '#EF0082', '#CB006F']
        vm.neutralColorRange = ['#FAFAFA', '#E4E4E4', '#CFCECE', '#BAB8B8', '#A5A1A1', '#908B8B', '#7A7474']
        vm.segmaticColorRange = [
            { name: 'Danger', listColor: ['#FFBEB9', '#FF7C73', '#D10E00'] },
            { name: 'Success', listColor: ['#E2FC99', '#C4FA33', '#648804'] },
            { name: 'Info', listColor: ['#ECF9FF', '#3FBFFF', '#26759C'] },
            { name: 'Warning', listColor: ['#FFE7BF', '#FFD07F', '#DD8B00'] }

        ]
        OnInit()
        function OnInit() {
            $.blockUI()
            $.unblockUI()
        }
    }
})()