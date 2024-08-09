(function () {
    'use strict'
    angular.module('app').controller('redeli', ['$scope', Controller])
    function Controller($scope) {
        var vm = this
        vm.primaryColor = '#4D32CE'
        vm.primaryListColor = ['#EDEBFA', '#B6ABEB', '#9888E3', '#6B55D6', '#4D32CE', '#362390', '#2F1F7E']
        vm.neutralColor = ['#F2F2F4', '#C8C8D3', '#B1B1C0', '#9090A5', '#797993', '#555567', '#4A4A5A']
        vm.segmaticColor = [
            { name: 'Danger', listColor: ['#FFECEB', '#FFAFAC', '#FF8E8A', '#FF5D57', '#FF3C35', '#B32A25', '#9C2520'] },
            { name: 'Success', listColor: ['#E8FCEF', '#A2F1BF', '#7BEBA5', '#43E37E', '#1CDD63', '#149B45', '#11873C'] },
            { name: 'Info', listColor: ['#ECF9FF', '#B0E5FF', '#90DAFF', '#60CAFF', '#3FBFFF', '#2C86B3', '#26759C'] },
            { name: 'Warning', listColor: ['#FFFBEC', '#FFF0AF', '#FFEA8E', '#FFE15E', '#FFDB3D', '#B3992B', '#9C8625'] }
        ]

        vm.icons = ['heart', 'calendar-2', 'home-2', 'search-normal-2', 'arrow-up', 'arrow-down', 'arrow-right', 'arrow-left', 'chevron-left-circle', 'chevron-right-circle', 'chevron-down-circle', 'chevron-up-circle', 'user-2', 'location', 'media-sliders-3', 'setting-1', 'call-calling', 'close-circle', 'add-circle', 'add', 'minus', 'close', 'moon', 'sun', 'cloud', 'cloud-plus', 'cloud-minus', 'cloud-cross', 'cloud-sunny', 'cloud-notif', 'cloud-drizzle', 'cloud-snow', 'flash', 'drop', 'wind', 'wind-2', 'cloud-fog', 'sun-fog', 'sun', 'dollar-circle', 'receipt-text', 'filter-tick', 'emoji-happy', 'emoji-normal', 'emoji-sad', 'filter', 'clock', 'wifi-square', 'smart-car', 'pet', 'information', 'menu-board', 'eye-slash', 'eye', 'verify', 'tick-circle', 'arrow-right', 'arrow-left', 'arrow-down', 'arrow-up', 'toggle-off-circle', 'toggle-on-circle', 'calendar-tick', 'calendar-remove', 'cloud-lightning', 'close-circle', 'home-2', 'calendar-2', 'heart', 'user', 'clock', 'dislike', 'like', 'camera']
        vm.listIcon
        OnInit()
        function OnInit() {
            $.blockUI()

            vm.listIcon = vm.icons.map((str, index) => ({ value: str, id: index + 1 }));

            console.log('enter redeli')
            $.unblockUI()
        }
    }
})()