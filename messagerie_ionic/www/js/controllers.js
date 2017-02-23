angular.module('mike.controllers', [])

.controller('areacodeCtrl', function($scope, $state, $ionicModal) {

})

.controller('signCtrl', function($scope, $state, $ionicPopup,Login) {
	$scope.data= {};
	$scope.login = function(){
		if ( ($scope.data.password=="000000000") && ($scope.data.phone=="000000000")) {
			$state.go('tab.messages');
			// else if(!angular.isDefined($scope.data.phone)){
				// permet le truc ifexists en php
		}else if(($scope.data.phone)&&($scope.data.password== null)){
			console.log('Mdp vide')
		}else if(($scope.data.password)&&($scope.data.phone== null)){	
			console.log('tel vide')
		}else if(($scope.data.password !="000000000") && ($scope.data.phone !="000000000")){
			console.log('remplissez les champs')
		
		}

	}
	$scope.register = function(){
		 if ($scope.data.phone == null) {
		 	console.log('phone pas rempli')
		 }else if ($scope.data.email == null) {
		 	console.log('email pas rempli')
		 }else if($scope.data.passwor == null) {
		 	console.log('verif mdp pas rempli')
		 }else if ($scope.data.password != $scope.data.repassword ) {
		 	console.log('mdp pas identique')
		 }else{
		// ici code pour envoyer a la function qui enregistre
			// Login.set($scope.data);
			localStorage.setItem('user',JSON.stringify($scope.data));
			$state.go('tab.messages');

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