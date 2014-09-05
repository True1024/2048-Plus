function GameRender(){}

GameRender.clear=function(){
    $('#supply').html("");
    $('#discard').html("");
    $('#draw').html("");
    $('#hand').html("");
}

GameRender.showSupply=function(pData,p1,game){
    for(var i=0;i<pData.length;i++){
        var data=pData[i];
        var id=GameRender.generateButton('#supply',data["info"],data["id"]);
        SupplyEvent.generateEvent(id,p1,game);
        $(id).append('<p>'+data["size"]+'</p>');
    }
}

GameRender.renderHand=function(player){
    var hand=player.getHand();
    for(var i=0;i<hand.length;i++){
        var card=hand[i];
        var sel=GameRender.generateButton('#hand',card.cardInfo(),card.getID());
        PlayEvent.generateEvent(sel,player,card);
    }
}

/**
 * This function generates a button and returns an ID to access it.
 * @param div
 * @param text
 * @param id
 * @returns {string}
 */
GameRender.generateButton=function(div,text,id){
    var data='<button id='+id+'>'+text+'</button>'
    $(div).append(data);
    return "#"+id;
}


GameRender.showDiscardPile=function(cNum){
    $('#discard').append('<p>'+cNum+' cards in discard pile.</p>');
}

GameRender.showDrawPile=function(cNum){
    $('#draw').append('<p>'+cNum+' cards in draw pile.</p>');

}

GameRender.showMoney=function(money){
    $("#money").html("$"+money);
}