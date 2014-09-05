
function Game(){

    var turns=1;
    var p1=new Deck();
    var piles=Array();

    this.playCard=function(idx){
        p1.playCard(idx);
    }

    this.nextTurn=function(){
        p1.endTurn();
        turns++;
    }

    this.findSupplyPile=function(name){
        var rPile=null;
        for(var i=0;i<piles.length;i++){
            if(piles[i][piles[i].length-1].getName()==name){
                return piles[i];
            }
        }
        return null;
    }

    this.removeFromSupply=function(card){
        for(var i=0;i<piles.length;i++){
            for(var j=0;j<piles.length;j++){
                if(piles[i][j]==card){
                    piles[i].pop();
                }
            }
        }
    }

    var addSupply=function(cardInfo,num){
        var pile=Array();
        for(var i=0;i<num;i++){
            pile.push(new Card(cardInfo));
        }
        piles.push(pile);
    }

    //Sets up the game and the view;
    this.setup=function(){
        p1.createDeck();
        p1.shuffle();
        p1.drawCards(5);
        addSupply(CardDef.copper,CardDef.copper.setupNum());
        addSupply(CardDef.silver,CardDef.silver.setupNum());
        addSupply(CardDef.gold,CardDef.gold.setupNum());
        addSupply(CardDef.platinum,CardDef.platinum.setupNum());

        addSupply(CardDef.estate,Victory.setupNum);
        addSupply(CardDef.duchy,Victory.setupNum);
        addSupply(CardDef.province,Victory.setupNum);
        addSupply(CardDef.colony,Victory.setupNum);

        addSupply(CardDef.village,Action.setupNum);
        addSupply(CardDef.woodcutter,Action.setupNum);

        addSupply(CardDef.workersVillage,Action.setupNum);
        addSupply(CardDef.smithy,Action.setupNum);

        addSupply(CardDef.festival,Action.setupNum);
        addSupply(CardDef.laboratory,Action.setupNum);
        addSupply(CardDef.market,Action.setupNum);
        addSupply(CardDef.bazaar,Action.setupNum);
    }

    this.getPlayerStatus=function($scope){
        var data={};
        data["money"]=p1.getMoney();
        data["actions"]=p1.getActions();
        data["buys"]=p1.getBuys();
        data["draw"]=p1.drawSize();
        data["discard"]=p1.discardSize();
        return data;
    }

    this.getActiveHand=function(){
        return p1.getHand();
    }

    this.getActivePlay=function(){
        return p1.getPlayed();
    }



    this.getPiles=function(){
        return piles;
    }

    this.playCard=function(id){
        p1.playCard(id)
    }

    /**
     * The active player will buy a card.
     * @param id
     */
    this.buyCard=function(name){
        var pile=this.findSupplyPile(name);
        var card=pile.pop();
        if(p1.buyCard(card)==true){
            console.log("Purchase successful");
        }else{
            pile.push(card);
        }
    }

    /**
     * Plays all treasures from the active player's hand.
     */
    this.playTreasures=function(){
        p1.playTreasures();
    }
}