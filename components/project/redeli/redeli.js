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
        vm.listIcon =
            [
                {
                    "value": "heart",
                    "id": 1
                },
                {
                    "value": "calendar-2",
                    "id": 2
                },
                {
                    "value": "home-2",
                    "id": 3
                },
                {
                    "value": "search-normal-2",
                    "id": 4
                },
                {
                    "value": "arrow-up",
                    "id": 5
                },
                {
                    "value": "arrow-down",
                    "id": 6
                },
                {
                    "value": "arrow-right",
                    "id": 7
                },
                {
                    "value": "arrow-left",
                    "id": 8
                },
                {
                    "value": "chevron-left-circle",
                    "id": 9
                },
                {
                    "value": "chevron-right-circle",
                    "id": 10
                },
                {
                    "value": "chevron-down-circle",
                    "id": 11
                },
                {
                    "value": "chevron-up-circle",
                    "id": 12
                },
                {
                    "value": "user-2",
                    "id": 13
                },
                {
                    "value": "location",
                    "id": 14
                },
                {
                    "value": "media-sliders-3",
                    "id": 15
                },
                {
                    "value": "setting-1",
                    "id": 16
                },
                {
                    "value": "phone-ringing",
                    "id": 17
                },
                {
                    "value": "x-circle",
                    "id": 18
                },
                {
                    "value": "add-circle",
                    "id": 19
                },
                {
                    "value": "add",
                    "id": 20
                },
                {
                    "value": "minus",
                    "id": 21
                },
                {
                    "value": "x",
                    "id": 22
                },
                {
                    "value": "moon",
                    "id": 23
                },
                {
                    "value": "sun",
                    "id": 24
                },
                {
                    "value": "cloud",
                    "id": 25
                },
                {
                    "value": "cloud-add",
                    "id": 26
                },
                {
                    "value": "cloud-minus",
                    "id": 27
                },
                {
                    "value": "cloud-x-1",
                    "id": 28
                },
                {
                    "value": "cloud-sunny",
                    "id": 29
                },
                {
                    "value": "cloud-notif",
                    "id": 30
                },
                {
                    "value": "cloud-rain",
                    "id": 31
                },
                {
                    "value": "cloud-snow",
                    "id": 32
                },
                {
                    "value": "flash-speed",
                    "id": 33
                },
                {
                    "value": "drop",
                    "id": 34
                },
                {
                    "value": "wind-1",
                    "id": 35
                },
                {
                    "value": "wind-2",
                    "id": 36
                },
                {
                    "value": "cloud-fog",
                    "id": 37
                },
                {
                    "value": "sun-fog",
                    "id": 38
                },
                {
                    "value": "sun",
                    "id": 39
                },
                {
                    "value": "dollar-circle",
                    "id": 40
                },
                {
                    "value": "receipt-text",
                    "id": 41
                },
                {
                    "value": "filter-tick",
                    "id": 42
                },
                {
                    "value": "emoji-happy",
                    "id": 43
                },
                {
                    "value": "emoji-normal",
                    "id": 44
                },
                {
                    "value": "emoji-sad",
                    "id": 45
                },
                {
                    "value": "filter",
                    "id": 46
                },
                {
                    "value": "clock",
                    "id": 47
                },
                {
                    "value": "wifi-square",
                    "id": 48
                },
                {
                    "value": "smart-car",
                    "id": 49
                },
                {
                    "value": "pet",
                    "id": 50
                },
                {
                    "value": "info-badge",
                    "id": 51
                },
                {
                    "value": "notepad",
                    "id": 52
                },
                {
                    "value": "eye-slash",
                    "id": 53
                },
                {
                    "value": "eye",
                    "id": 54
                },
                {
                    "value": "verify",
                    "id": 55
                },
                {
                    "value": "tick-circle",
                    "id": 56
                },
                {
                    "value": "arrow-right",
                    "id": 57
                },
                {
                    "value": "arrow-left",
                    "id": 58
                },
                {
                    "value": "arrow-down",
                    "id": 59
                },
                {
                    "value": "arrow-up",
                    "id": 60
                },
                {
                    "value": "toggle-off-round",
                    "id": 61
                },
                {
                    "value": "toggle-on-round",
                    "id": 62
                },
                {
                    "value": "calendar-tick",
                    "id": 63
                },
                {
                    "value": "calendar-x",
                    "id": 64
                },
                {
                    "value": "cloud-lightning",
                    "id": 65
                },
                {
                    "value": "x-circle",
                    "id": 66
                },
                {
                    "value": "home-2",
                    "id": 67
                },
                {
                    "value": "calendar-2",
                    "id": 68
                },
                {
                    "value": "heart",
                    "id": 69
                },
                {
                    "value": "user-2",
                    "id": 70
                },
                {
                    "value": "clock",
                    "id": 71
                },
                {
                    "value": "dislike",
                    "id": 72
                },
                {
                    "value": "like",
                    "id": 73
                },
                {
                    "value": "camera",
                    "id": 74
                }
            ]

        OnInit()
        function OnInit() {
            $.blockUI()
            $.unblockUI()
        }

        vm.viewProcessBook = () => {
            window.open("https://drive.google.com/file/d/1keSpdhT9R3nc8pelqAvM_5q2bo9miT2p/view", '_blank');
        }
    }
})()