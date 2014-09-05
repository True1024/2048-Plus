
function Card(data){
    this.data=data;
    this.ID=Card.num; //This is a unique identifier for the card
    this.owner=null;
    Card.num++;
}

Card.prototype.getType=function(){
    return this.data.getType();
}

Card.prototype.getName=function(){
    return this.data.getName();
}

Card.prototype.sameCard=function(other){
    return (this.data.getName()===(other.data.getName()));
}

Card.prototype.getID=function(){
    return this.ID;
}

Card.prototype.getCost=function(){
    return this.data.getCost();
}

Card.prototype.setOwner=function(own){
    this.owner=own;
}

Card.prototype.getTreasureMoney=function(){
    return this.data.getTreasureMoney();
}

/**
 * This returns the number of VP the card is worth.
 */
Card.prototype.getVP=function(){
    return this.data.getPoints();
}

Card.prototype.getActions=function(){
    return this.data.getActions();
}

Card.prototype.getBuys=function(){
    return this.data.getBuys();
}

Card.prototype.getCards=function(){
    return this.data.getCards();
}

Card.prototype.getMoney=function(){
    return this.data.getMoney();
}

//What will be displayed on the card when it is in a player's hand.
Card.prototype.cardInfo=function(){
    var info=this.data.getName()+'\n';
    if(this.getType()==CardDef.Treasure){
        info+="$"+this.data.getMoney()+"   ";
    }if(this.getType()==CardDef.Victory){
        info+=this.data.getPoints()+'VP'+"   ";
    }
    info+="Cost:"+this.getCost();
    return info;

}


Card.num=0; //This is a running count of the total number of cards. It is used to generate unique IDs for the cards.