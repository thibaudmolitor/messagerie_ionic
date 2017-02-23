angular.module('mike.controllers', [])

.controller('areacodeCtrl', function($scope, $state, $ionicModal) {

})

.controller('signCtrl', function($scope, $state, $ionicPopup) {
	$scope.data= {};
	$scope.login = function(){
		if ( ($scope.data.password=="000000000") && ($scope.data.phone=="000000000")) {
			$state.go('tab.messages');
			// else if(angular.isDefined($scope.data.phone)){
				// permet le truc ifexists en php
		}else if(($scope.data.phone)&&($scope.data.password== null)){
			console.log('Mdp vide')
		}else if(($scope.data.password)&&($scope.data.phone== null)){	
			console.log('tel vide')
		}else if(($scope.data.password !="000000000") && ($scope.data.phone !="000000000")){
			console.log('remplissez les champs')
		
		}
		

	}
})

.controller('tabCtrl', function($scope, $state) {

})

.controller('messagesCtrl', function($scope, $state, $ionicPopup) {

})

.controller('messagesDetail', function($scope, $state) {

})

.controller('sendLocation', function($scope, $state) {

})

.controller('messagesCall', function($scope, $state, $ionicModal) {

})

.controller('contactsCtrl', function($scope, $state) {

})

.controller('contactsRecommended', function($scope, $state) {

})

.controller('contactsAdd', function($scope, $state) {

})

.controller('contactsSearch', function($scope, $state, $stateParams) {

})

.controller('contactsUpdate', function($scope, $state) {

})

.controller('contactsNearby', function($scope, $state) {

})

.controller('nearbyLocation', function($scope, $state) {

})

.controller('contactsInvite', function($scope, $state) {

})

.controller('groupCtrl', function($scope, $state) {

})

.controller('groupCreate', function($scope, $state) {

})

.controller('groupAdd', function($scope, $state) {

})

.controller('groupView', function($scope, $state) {

})

.controller('groupDetail', function($scope, $state) {

})

.controller('settingsCtrl', function($scope, $state) {

})

.controller('changePasswordCtrl', function($scope, $state) {

})

.controller('searchCtrl', function($scope, $state) {

})