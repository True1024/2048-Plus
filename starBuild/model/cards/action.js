/**
 *
 * @param action
 * @param card
 * @param money
 * @param special
 * @constructor
 */
function Action(cost,action,card,money,buy,special){

    this.getType=function(){
        return CardDef.Action;
    }

    this.getPoints=function(){
        return 0;
    }

    this.getActions=function(){
        return action;
    }

    this.getCards=function(){
        return card;
    }

    this.getMoney=function(){
        return money;
    }

    this.getBuys=function(){
        return buy;
    }

}

Action.abandonedMine=new Action(0,0,0,1,0,null);
Action.ruinedLibrary=new Action(0,0,1,0,0,null);
Action.ruinedMarket=new Action(0,0,0,0,1,null);
Action.ruinedVillage=new Action(0,1,0,0,0,null);

Action.necropolis=new Action(1,2,0,0,0,null);

Action.village=new Action(0,2,1,0,0,null);
Action.woodcutter=new Action(0,0,0,2,1,null);

Action.workersVillage=new Action(0,2,1,0,1,null);
Action.smithy=new Action(0,0,3,0,0,null);

Action.festival=new Action(0,2,0,2,1,null);
Action.laboratory=new Action(0,1,2,0,0,null);
Action.market=new Action(0,1,1,1,1,null);
Action.bazaar=new Action(0,2,1,1,0,null);

Action.setupNum=10;
