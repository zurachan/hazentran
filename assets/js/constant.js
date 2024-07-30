(function () {
    angular.module('app').constant('Constant', Config())
    function Config() {
        var config = {}
        config.TEMPLATE_URL = [
            {
                key: 'home',
                url: '/',
                templateUrl: '/components/home/home.html',
                controller: 'home as vm',
                lazyLoadFiles: [
                    "/components/home/home.js",
                ]
            },
            {
                key: 'project',
                url: '/project',
                templateUrl: '/components/project/project.html',
                controller: 'project as vm',
                lazyLoadFiles: [
                    "/components/project/project.js",
                ]
            },
            {
                key: 'about',
                url: '/about',
                templateUrl: '/components/about/about.html',
                controller: 'about as vm',
                lazyLoadFiles: [
                    "/components/about/about.js",
                ]
            },
            {
                key: 'contact',
                url: '/contact',
                templateUrl: '/components/contact/contact.html',
                controller: 'contact as vm',
                lazyLoadFiles: [
                    "/components/contact/contact.js",
                ]
            },
            {
                key: 'redeli',
                url: '/project/redeli',
                templateUrl: '/components/project/redeli/redeli.html',
                controller: 'redeli as vm',
                lazyLoadFiles: [
                    "/components/project/redeli/redeli.js",
                ]
            },
            {
                key: 'calldoctors',
                url: '/project/calldoctors',
                templateUrl: '/components/project/calldoctors/calldoctors.html',
                controller: 'calldoctors as vm',
                lazyLoadFiles: [
                    "/components/project/calldoctors/calldoctors.js",
                ]
            },
            {
                key: 'cake',
                url: '/project/cake',
                templateUrl: '/components/project/cake/cake.html',
                controller: 'cake as vm',
                lazyLoadFiles: [
                    "/components/project/cake/cake.js",
                ]
            },
        ]

        return config
    }
})()