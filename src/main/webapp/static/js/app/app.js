'use strict';

var Sheepshead = {
	Player: function(player) {
		this.name = player.name;
		
		this.calculateRoundScore = function(round) {
			var score = 1;
			if(!round.schneider) {
				score += 1;
			}
			if(round.noTrick) {
				score += 1;
			}
			if(!round.isWinner(this.name)) {
				score = -score;
			}
			if(round.isPicker(this.name)) {
				score *= 2;
				if(round.wentAlone()) {
					score += score;
				}
			}
			if(round.doubler) {
				score *= 2;
			}
			if(round.cracked) {
				score *= 2;
			}
			return score;
		};
	},
	
	Game: function() {},
	
	Round: function(round) {
		
		this.picker = round.picker;
		this.partner = round.partner;
		this.pickerWon = round.pickerWon;
		this.noTrick = round.noTrick;
		this.schneider = round.schneider;
		this.doubler = round.doubler;
		this.cracked = round.cracked;
		this.players = round.players;
				
		this.isPicker = function(player) {
			return this.picker == player;
		};
		
		this.isPartner = function(player) {
			return this.partner == player;
		};
		
		this.wentAlone = function() {
			return this.partner == undefined;
		}
		
		this.isWinner = function(player) {
			return (this.pickerWon && (this.isPicker(player) || this.isPartner(player))) ||
				   (!this.pickerWon && (!this.isPicker(player) && !this.isPartner(player)));
		};
		
	}
};

angular.module('sheepsheadApp', [
  'ngRoute',
  'ngResource'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });


