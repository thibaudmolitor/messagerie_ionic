angular.module('mike', ['ionic', 'mike.services', 'mike.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar)
            StatusBar.styleDefault();
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('tab', {
        cache: false,
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: 'tabCtrl'
    })

    .state('walkthrough', {
        url: '/walkthrough',
        templateUrl: 'templates/sign/walkthrough.html',
    })

    .state('register', {
        url: '/register',
        templateUrl: 'templates/sign/register.html',
        controller: 'signCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/sign/login.html',
        controller: 'signCtrl'
    })

    .state('editInfomation', {
        url: '/editInfomation',
        templateUrl: 'templates/sign/edit-infomation.html',
        controller: 'signCtrl'
    })

    .state('tab.messages', {
        cache: false,
        url: '/messages',
        views: {
            'tab-messages': {
                templateUrl: 'templates/messages/index.html',
                controller: 'messagesCtrl'
            }
        }
    })

    .state('detail', {
        cache: false,
        url: '/messages/detail/:id',
        templateUrl: 'templates/messages/detail.html',
        controller: 'messagesDetail'
    })

    .state('sendLocation', {
        cache: false,
        url: '/messages/location/:id/:source',
        templateUrl: 'templates/messages/location.html',
        controller: 'sendLocation'
    })

    .state('tab.contacts', {
        cache: false,
        url: '/contacts',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/index.html',
                controller: 'contactsCtrl'
            }
        }
    })

    .state('tab.recommended', {
        url: '/contacts/recommended',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/recommended.html',
                controller: 'contactsRecommended'
            }
        }
    })

    .state('tab.addContacts', {
        cache: false,
        url: '/contacts/add',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/add.html',
                controller: 'contactsAdd'
            }
        }
    })

    .state('tab.searchContacts', {
        cache: false,
        url: '/contacts/search/:id',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/search.html',
                controller: 'contactsSearch'
            }
        }
    })

    .state('tab.inviteContacts', {
        url: '/contacts/invite/:id',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/invite.html',
                controller: 'contactsInvite'
            }
        }
    })

    .state('tab.updateContacts', {
        url: '/contacts/update',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/update.html',
                controller: 'contactsUpdate'
            }
        }
    })

    .state('tab.nearbyContacts', {
        cache: false,
        url: '/contacts/nearby',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/nearby.html',
                controller: 'contactsNearby'
            }
        }
    })

    .state('tab.nearbyLocation', {
        cache: false,
        url: '/contacts/location',
        views: {
            'tab-contacts': {
                templateUrl: 'templates/contacts/location.html',
                controller: 'nearbyLocation'
            }
        }
    })

    .state('tab.group', {
        url: '/group',
        views: {
            'tab-group': {
                templateUrl: 'templates/group/index.html',
                controller: 'groupCtrl'
            }
        }
    })

    .state('createGroup', {
        cache: false,
        url: '/group/create',
        templateUrl: 'templates/group/create.html',
        controller: 'groupCreate'
    })

    .state('tab.addGroup', {
            url: '/group/add/:id',
            views: {
                'tab-group': {
                    templateUrl: 'templates/group/add.html',
                    controller: 'groupAdd'
                }
            }
        })
        .state('tab.viewGroup', {
            cache: false,
            url: '/group/view/:id',
            views: {
                'tab-group': {
                    templateUrl: 'templates/group/view.html',
                    controller: 'groupView'
                }
            }
        })

    .state('groupDetail', {
        cache: false,
        url: '/group/detail/:id',
        templateUrl: 'templates/group/detail.html',
        controller: 'groupDetail'
    })

    .state('tab.settings', {
        cache: false,
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'templates/settings/index.html',
                controller: 'settingsCtrl'
            }
        }
    })

    .state('profiles', {
        url: '/settings/profiles',
        templateUrl: 'templates/settings/profiles.html',
        controller: 'settingsCtrl'
    })

    .state('settingsMessages', {
        url: '/settings/messages',
        templateUrl: 'templates/settings/messages.html',
        controller: 'settingsCtrl'
    })

    .state('settingsContacts', {
        url: '/settings/contacts',
        templateUrl: 'templates/settings/contacts.html',
        controller: 'settingsCtrl'
    })

    .state('settingsLanguages', {
        url: '/settings/languages',
        templateUrl: 'templates/settings/languages.html',
        controller: 'settingsCtrl'
    })

    .state('about', {
        url: '/settings/about',
        templateUrl: 'templates/settings/about.html',
    })

    .state('settingsAccount', {
        url: '/settings/account',
        templateUrl: 'templates/settings/account.html',
        controller: 'settingsCtrl'
    })

    .state('settingsPassword', {
        url: '/settings/password',
        templateUrl: 'templates/settings/password.html',
        controller: 'changePasswordCtrl'
    })

    .state('search', {
        cache: false,
        url: '/search',
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
    })

    ;

    $urlRouterProvider.otherwise('/tab/messages');

})