function Deck(){

    var drawDeck=Array();
    var discard=Array();
    var hand=Array();
    var played=Array();

    var money=0;
    var actions=1;
    var buys=1;

    this.getMoney=function(){
        return money;
    }

    this.getActions=function(){
        return actions;
    }

    this.getBuys=function(){
        return buys;
    }

    this.discardSize=function(){
        return discard.length;
    }

    this.drawSize=function(){
        return drawDeck.length;
    }

    this.showStatus=function(){
        actions=1;
        buys=1;
        money=0;
    }

    this.createDeck=function(){
        for(var i=0;i<3;i++){
            var estate=new Card(CardDef.estate);
            estate.setOwner(this);
            discard.push(estate);
        }
        for(i=0;i<7;i++){
            var copper=new Card(CardDef.copper);
            copper.setOwner(this);
            discard.push(copper);
        }
    }

    this.shuffle=function(){
        drawDeck=discard.slice(0);
        discard=[];
        var counter = drawDeck.length, temp, index;
        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = drawDeck[counter];
            drawDeck[counter] = drawDeck[index];
            drawDeck[index] = temp;
        }
    }

    this.drawCards=function(num){
        for(var i=0;i<num;i++){
            if(drawDeck.length<=0){
                this.shuffle();
            }
            if(drawDeck.length==0){ //The entire deck has been drawn.
                return;
            }
            hand.push(drawDeck.pop());
        }
    }

    this.discard=function(num){
        for(var i=0;i<num;i++){
            if(hand.length==0){
                return;
            }else{
                discard.push(hand.pop());
            }
        }
    }

    this.discardHand=function(){
        this.discard(hand.length);
    }

    this.playCardByName=function(card){


        if(card.getType()==CardDef.Action){
            if(actions>0){
                money+=card.getMoney();
                actions+=card.getActions();
                buys+=card.getBuys();
                this.drawCards(card.getCards());
                actions--;
            }
        }if(card.getType()==CardDef.Treasure){
            money+=card.data.getTreasureMoney();
        }
        played.push(card);
        var idx=hand.indexOf(card);
        hand.splice(idx,1);
    }

    /**
     * Plays the card from the player's hand with the specified id.
     * @param id
     */
    this.playCard=function(id){
        for(var i=0;i<hand.length;i++){
            if(hand[i].getID()==id){
                this.playCardByName(hand[i]);
            }
        }
    }

    /**
     * Clear all the cards from the play area at the end of the turn.
     */
    this.cleanup=function(){
        for(var i=0;i<played.length;i++){
            discard.push(played[i]);
        }
        money=0;
        buys=0;
        actions=0;
        played=[];
    }

    /**
     * Buys a card for the player.
     * @param card
     * @returns Returns true if the purchase succeeds. Returns false if the purchase fails.
     */
    this.buyCard=function(card){
        if(card.getCost()<=money&&buys>0){
            discard.push(card);
            buys--;
            money-=card.getCost();
            card.setOwner(this);
            return true;
        }
        return false;
    }

    this.endTurn=function(){
        this.cleanup();
        this.discardHand();
        this.drawCards(5);
        actions=1;
        buys=1;
    }

    this.getHand=function(){
        return hand;
    }

    this.getPlayed=function(){
        return played;
    }

    /**
     * Plays all treasures from the active player's hand.
     */
    this.playTreasures=function(){
        var newHand=Array();
        for(var i=0;i<hand.length;i++){
            if(hand[i].getType()==CardDef.Treasure){
                money+=hand[i].getTreasureMoney();
                played.push(hand[i]);
            }else{
                newHand.push(hand[i]);
            }
        }
        hand=newHand;
    }
}