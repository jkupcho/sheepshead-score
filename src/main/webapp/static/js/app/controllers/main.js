'use strict';

angular.module('sheepsheadApp')
  .controller('MainCtrl', function($scope, $routeParams, GameService) {
	
	$scope.players = [
	  new Sheepshead.Player({name: 'Jonathan'}),
	  new Sheepshead.Player({name: 'Ryan'}),
	  new Sheepshead.Player({name: 'Mike'}),
	  new Sheepshead.Player({name: 'Alan'}),
	  new Sheepshead.Player({name: 'Scott'})
	];
	
	$scope.rounds = [
	    new Sheepshead.Round({
			picker: 'Jonathan',
			partner: 'Scott', 
			pickerWon: false,
			noTrick: false,
			schneider: true,
			doubler: false,
			cracked: false,
			players: $scope.players
	    }),
	    new Sheepshead.Round({
			picker: 'Alan', 
			partner: 'Mike', 
			pickerWon: true,
			noTrick: false,
			schneider: false,
			doubler: true,
			cracked: true,
			players: $scope.players
	    }),
	    new Sheepshead.Round({
			picker: 'Scott', 
			partner: 'Ryan', 
			pickerWon: false,
			noTrick: false,
			schneider: false,
			doubler: true,
			cracked: true,
			players: $scope.players
	    }),
	    new Sheepshead.Round({
			picker: 'Scott', 
			partner: undefined, 
			pickerWon: true,
			noTrick: true,
			schneider: false,
			doubler: true,
			cracked: true,
			players: $scope.players
	    })
	];
	
  });