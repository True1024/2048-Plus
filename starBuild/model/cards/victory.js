
function Victory(points){

    this.getMoney=function(){
        return 0;
    }

    this.getPoints=function(){
        return points;
    }

    this.getType=function(){
        return CardDef.Victory;
    }


}

Victory.estate=new Victory(1);
Victory.duchy=new Victory(3);
Victory.province=new Victory(6);
Victory.colony=new Victory(11);
Victory.setupNum=8;