(function () {
    angular.module('app', ['ngAnimate', 'ngTouch', 'ui.router', 'oc.lazyLoad'])

    angular.module('app').directive('offClick', function ($document, $parse, $timeout) {
        return {
            restrict: 'A',
            compile: function (tElement, tAttrs) {
                var fn = $parse(tAttrs.offClick);
                return function (scope, iElement, iAttrs) {
                    function eventHandler(ev) {
                        if (iElement[0].contains(ev.target)) $document.one('click touchend', eventHandler);
                        else scope.$apply(function () { fn(scope); });
                    }
                    scope.$watch(iAttrs.offClickActivator, function (activate) {
                        if (activate) {
                            $timeout(function () {
                                $document.one('click touchend', eventHandler);
                            });
                        } else {
                            $document.off('click touchend', eventHandler);
                        }
                    });
                };
            }
        };
    });
})()
