function SupplyEvent(){}

/**
 * This function generates a click event for a particular button.
 * @param sel
 * @param player
 * @param game
 * @param card
 */
SupplyEvent.generateEvent=function(sel,player,game){
    $(document).on("click",sel,function(){
        player.buyCard(game.removeFromSupply(sel));
    });
}

