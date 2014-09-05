
function CardDef(cardData,cost,name){

    var points=cardData.getPoints();

    //Returns the amount of money a card generates.
    this.getMoney=function(){
        return cardData.getMoney();
    }

    this.getPoints=function(){
        return points;
    }

    this.getName=function(){
        return name;
    }

    this.getCost=function(){
        return cost;
    }

    this.getType=function(){
        return cardData.getType();
    }

    this.setupNum=function(){
        return cardData.setupNum();
    }

    this.getActions=function(){
        if(this.getType()==CardDef.Action){
            return cardData.getActions();
        }
        return 0;
    }

    this.getCards=function(){
        if(this.getType()==CardDef.Action){
            return cardData.getCards();
        }
        return 0;
    }

    this.getTreasureMoney=function(){
        if(this.getType()==CardDef.Treasure){
            return cardData.getMoney();
        }
    }
    this.getMoney=function(){
        if(this.getType()==CardDef.Action){
            return cardData.getMoney();
        }
        return 0;
    }

    this.getBuys=function(){
        if(this.getType()==CardDef.Action){
            return cardData.getBuys();
        }
        return 0;
    }
}


CardDef.Treasure="Treasure";
CardDef.Victory="Victory";
CardDef.Action="Action";

//Treasure cards.
CardDef.copper=new CardDef(Treasure.copper,0,"Rock");
CardDef.silver=new CardDef(Treasure.silver,3,"Hydrogen");
CardDef.gold=new CardDef(Treasure.gold,6,"Diamond");
CardDef.platinum=new CardDef(Treasure.platinum,9,"Bilithium");

//Victory cards.
CardDef.estate=new CardDef(Victory.estate,2,"Asteroid");
CardDef.duchy=new CardDef(Victory.duchy,5,"Moon");
CardDef.province=new CardDef(Victory.province,8,"Planet");
CardDef.colony=new CardDef(Victory.colony,11,"Star cluster");

/**
 * A list of action cards.
 */

//Ruins
CardDef.abandonedMine=new CardDef(Action.abandonedMine,0,"Abandoned mine");
CardDef.ruinedLibrary=new CardDef(Action.ruinedLibrary,0,"Ruined library");
CardDef.ruinedMarket=new CardDef(Action.ruinedMarket,0,"Ruined market");
CardDef.ruinedVillage=new CardDef(Action.ruinedVillage,0,"Ruined village");

//Shelters
CardDef.necropolis=new CardDef(Action.necropolis,0,"Necropolis");

//3 cost cards.
CardDef.village=new CardDef(Action.village,3,"Moon base");
CardDef.woodcutter=new CardDef(Action.woodcutter,3,"Miner");

//4 cost cards.
CardDef.workersVillage=new CardDef(Action.workersVillage,4,"Worker's colony");
CardDef.smithy=new CardDef(Action.smithy,4,"Metalworker");

//5 cost cards.
CardDef.festival=new CardDef(Action.festival,5,"Space fair");
CardDef.laboratory=new CardDef(Action.laboratory,5,"Research lab");
CardDef.market=new CardDef(Action.market,5,"Store");
CardDef.bazaar=new CardDef(Action.bazaar,5,"Shop");
