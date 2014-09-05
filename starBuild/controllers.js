'use strict';

function Render(){
    var game=new Game();
    game.setup();

    var getActionData=function(card){
        return {'name':card.getName(),
            'cost':card.getCost(),
            'data':"+"+card.getActions()+" actions"+" +"+card.getCards()+" cards"+" +"+card.getBuys()+ " buys"+" +$"+card.getMoney(),
            'id':card.getID()}
    }
    this.actionSupply=function(){
        var data=[];
        var piles=game.getPiles();
        for(var i=0;i<piles.length;i++){
            var card=piles[i][0];
            if(card==undefined){
                data.push({'data':"Supply empty"})
            }
            else if(piles[i][0].getType()==CardDef.Action){
                console.log("Action card");
                var cData=getActionData(card);
                cData['num']=piles[i].length;
                data.push(cData);
            }
        }
        return data;
    }

    var getTreasureData=function(card){
        return {'name':card.getName(),'data':"+$"+card.getTreasureMoney(),'cost':"$"+card.getCost(),'id':card.getID()};
    }

    var getVictoryData=function(card){
        return {'name':card.getName(),'cost':"$"+card.getCost(),'data':"+"+card.getVP()+" VP",'id':card.getID()};
    }

    this.treasureSupply=function(){
        var data=[];
        var piles=game.getPiles();
        for(var i=0;i<piles.length;i++){
            var card=piles[i][0];
            if(piles[i][0]==undefined){
                data.push({'data':"Supply empty"})
            }
            else if(piles[i][0].getType()==CardDef.Treasure){
                var tData=getTreasureData(card);
                tData['num']=piles[i].length;
                data.push(tData);
            }
        }
        return data;
    }


    this.victorySupply=function(){
        var data=[];
        var piles=game.getPiles();
        for(var i=0;i<piles.length;i++){
            var card=piles[i][0];
            if(card==undefined){
                data.push({'data':"Supply empty"})
            }
            else if(piles[i][0].getType()==CardDef.Victory){
                var vData=getVictoryData(card);
                vData['num']=piles[i].length;
                data.push(vData);
            }
        }
        return data;
    }

    this.handData=function(){
        var data=[];
        var hand=game.getActiveHand();
        for(var i=0;i<hand.length;i++){
            if(hand[i].getType()==CardDef.Treasure){
                var tData=getTreasureData(hand[i]);
                data.push(tData);
            }if(hand[i].getType()==CardDef.Victory){
                var vData=getVictoryData(hand[i]);
                data.push(vData);
            }if(hand[i].getType()==CardDef.Action){
                var aData=getActionData(hand[i]);
                data.push(aData);
            }
        }
        return data;
    }

    this.playArea=function(){
        var data=[];
        var play=game.getActivePlay();
        for(var i=0;i<play.length;i++){
            console.log(play[i].getName());
            data.push({'name':play[i].getName(),'data':play[i].cardInfo()});
        }
        return data;
    }

    this.getActivePlayer=function(){
        return game.getActivePlayer();
    }

    this.endTurn=function(){
        console.log("Ending turn");
        game.nextTurn();
    }

    this.getPlayerStatus=function(){
        return game.getPlayerStatus();
    }

    this.buyCard=function(name){
        game.buyCard(name);
    }

    this.playCard=function(id){
        game.playCard(id);
    }

    this.playTreasures=function(){
        game.playTreasures();
    }
}

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {

    var game=new Render();
    var refreshData=function(){

        $scope.actionSupply=game.actionSupply();
        $scope.treasureSupply=game.treasureSupply();
        $scope.victorySupply=game.victorySupply();

        $scope.hand=game.handData();
        $scope.play=game.playArea();

        var data=game.getPlayerStatus();
        $scope.money="$"+data["money"];
        $scope.actions="Actions:"+data["actions"];
        $scope.buys="Buys:"+data["buys"];

        $scope.discardPile="Discard pile: "+data["discard"]+" cards";
        $scope.drawPile="Draw pile:"+data["draw"]+" cards";
        $scope.orderProp = 'age';
    }
    refreshData();

    //Plays a card from a hand.
    $scope.playCard=function(id){
        game.playCard(id);
        refreshData();
    }

    //Buys a card from the supply
    $scope.buyCard=function(name){
        game.buyCard(name);
        refreshData();
    }

    $scope.endTurn=function(){
        game.endTurn();
        refreshData();
    }

    $scope.playTreasures=function(){
        game.playTreasures();
        refreshData();
    }
});