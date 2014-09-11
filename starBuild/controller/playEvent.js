function PlayEvent(){}

PlayEvent.generateEvent=function(sel,player,card){
    $(document).off("click",sel);
    $(document).on("click",sel,function(){
        player.playCardByID(card);
        $(sel).hide();
    });
}
