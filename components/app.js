(function () {
    'use strict'
    angular.module('app').component('appRoot', {
        templateUrl: '/components/app.html',
        controller: Controller,
        controllerAs: 'vm',
    })

    function Controller($scope, $state, $location, $transitions) {
        var vm = this
        vm.Menu = [
            { name: "Home", path: "home" },
            { name: "Project", path: "project" },
            { name: "About", path: "about" },
            { name: "Contact", path: "contact" },
        ]
        vm.Project = [
            { name: "reDeli", path: "redeli" },
            { name: "Call Doctors", path: "calldoctors" },
            { name: "Cake By VPBank", path: "cake" },
        ]
        vm.showMenu = false
        vm.Current
        vm.showScrollTop = false
        OnInit()
        vm.toggleMenu = () => vm.showMenu = !vm.showMenu

        vm.backToTop = () => $('html,body').animate({ scrollTop: 0 }, 700);

        $scope.$watch('vm.showMenu', function (isShow) {
            var ele = document.getElementById('btn-menu-bar');
            if (isShow) ele.classList.add('on')
            else ele.classList.remove('on')
        })

        $transitions.onSuccess({}, function () {
            vm.backToTop()
            vm.Current = $location.path().replace('/', '')
            if (!vm.Current) vm.Current = 'home'
            vm.showMenu = false
        })

        function OnInit() {
            $.blockUI()
            vm.Current = $location.path().replace('/', '')
            if (!vm.Current) vm.Current = 'home'
            $state.dispose()
            $state.go(vm.Current)
            _.defer(() => { $scope.$apply() })
            $.unblockUI()
        }

        $('html,body').on('scroll', function (e) {
            vm.showScrollTop = e.target.scrollTop > 1080
            _.defer(() => { $scope.$apply() })
        });
    }
})()