
function Treasure(amt,setupNum){

    var money=amt;
    var points=0;

    this.getMoney=function(){
        return money;
    }

    this.getPoints=function(){
        return 0;
    }

    this.setupNum=function(){
        return setupNum;
    }

    this.getType=function(){
        return CardDef.Treasure;
    }
}

Treasure.copper=new Treasure(1,60);
Treasure.silver=new Treasure(2,40);
Treasure.gold=new Treasure(3,30);
Treasure.platinum=new Treasure(5,10);