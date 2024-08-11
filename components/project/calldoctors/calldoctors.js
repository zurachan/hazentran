(function () {
    'use strict'
    angular.module('app').controller('calldoctors', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        vm.listIcon = [
            {
                "value": "location",
                "id": 1
            },
            {
                "value": "bell-1",
                "id": 2
            },
            {
                "value": "group",
                "id": 3
            },
            {
                "value": "headphones",
                "id": 4
            },
            {
                "value": "calendar-2",
                "id": 5
            },
            {
                "value": "user-2",
                "id": 6
            },
            {
                "value": "grid-apps-2",
                "id": 7
            },
            {
                "value": "clipboard-text-1",
                "id": 8
            },
            {
                "value": "heart-monitor-square",
                "id": 9
            },
            {
                "value": "arrow-right",
                "id": 10
            },
            {
                "value": "arrow-left",
                "id": 11
            },
            {
                "value": "search-normal-1",
                "id": 12
            },
            {
                "value": "arrow-left",
                "id": 13
            },
            {
                "value": "lock-2",
                "id": 14
            },
            {
                "value": "star",
                "id": 15
            },
            {
                "value": "star",
                "id": 16
            },
            {
                "value": "search-normal-2",
                "id": 17
            },
            {
                "value": "filter-search",
                "id": 18
            },
            {
                "value": "eye",
                "id": 19
            },
            {
                "value": "eye-slash",
                "id": 20
            },
            {
                "value": "mail",
                "id": 21
            },
            {
                "value": "document-2",
                "id": 22
            },
            {
                "value": "hospital",
                "id": 23
            },
            {
                "value": "clock",
                "id": 24
            },
            {
                "value": "building-1",
                "id": 25
            },
            {
                "value": "group",
                "id": 26
            },
            {
                "value": "shield-lock",
                "id": 27
            },
            {
                "value": "calendar-x",
                "id": 28
            },
            {
                "value": "setting-4",
                "id": 29
            }
        ]

        vm.primaryColor = '#009688'
        vm.primaryColorShade = ['#008180', '#00626C', '#004757', '#003448']
        vm.primaryColorTint = ['#30C0A5', '#59DFBA', '#92F4D0', '#C7F9E2']
        vm.neutralColor = '#7A808C'
        vm.neutralColorShade = ['#FAFAFA', '#e4e4e4', '#7A808C', '#0A0A0A']

        OnInit()
        function OnInit() {
            $.blockUI()
            console.log(vm.neutralColorShade)
            $.unblockUI()
        }
    }
})()