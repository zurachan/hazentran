(function () {
    'use strict'
    angular.module('app').config(
        function ($stateProvider, $locationProvider, Constant) {
            $locationProvider.hashPrefix('')
            let state = Constant.TEMPLATE_URL
            state.forEach((item) => {
                $stateProvider.state(item.key, {
                    url: item.url,
                    templateUrl: item.templateUrl,
                    controller: item.controller,
                    resolve: {
                        lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                files: item.lazyLoadFiles
                            })
                        }]
                    }
                })
            })
        }
    )
})()