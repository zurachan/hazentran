(function () {
    'use strict'
    angular.module('app').component('appRoot', {
        templateUrl: '/components/app.html',
        controller: Controller,
        controllerAs: 'vm',
    })

    function Controller($scope, $state) {
        var vm = this
        vm.showMenu = false
        OnInit()

        vm.toggleMenu = () => {
            vm.showMenu = !vm.showMenu
            var ele = document.getElementById('btn');
            if (vm.showMenu) ele.classList.add('on')
            else ele.classList.remove('on')
        }

        function OnInit() {
            $.blockUI()
            $state.dispose()
            $state.go('home')
            console.log('go home')

            // _.defer(() => { $scope.$apply() })
            $.unblockUI()
        }

    }
})()