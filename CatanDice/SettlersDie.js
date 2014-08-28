
$('document').ready(function() {

    var dice=true;

    $('body').flowtype({
        minimum   : 500,
        maximum   : 1200,
        minFont   : 12,
        maxFont   : 40,
        fontRatio : 30
    });

    var probabilities = [-1,7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 5, 5, 5, 5, 9, 9, 9, 9, 4, 4, 4, 10, 10, 10, 3, 3, 11, 11, 2, 12];
    var drawDeck=Array();

    function shuffleDeck(){
        drawDeck=probabilities.slice(0);
    }
    shuffleDeck();


    var num = 0;
    var reshuffles=0;

    var stats=Array();
    for(var i=0;i<13;i++){
        stats[i]=0;
    }


    var audio = new Audio("click.wav");

    $('#roll').click(function () {

        var idx=Math.floor(Math.random() * drawDeck.length);
        console.log("Index:"+idx);
        num = drawDeck[idx];
        if(num==-1){ //Reshuffle
            shuffleDeck();
            reshuffles++;
        }else{
            $('#num').html(num);
            drawDeck.splice(idx,1);
            stats[num]++;
            audio.play();
        }


    });

    var click = true;

    $('#normal').click(function(){
        dice=true;
        $('#title').html("Settlers of Catan Dice");
        shuffleDeck();
    });

    $('#event').click(function(){
        dice=false;
        $('#title').html("Settlers of Catan card deck");
        shuffleDeck();
    });

    $('#stats').click(function () {
        if (click) {
            console.log("Click");
            var dataStr="";
            for(var i=2;i<=12;i++){
                dataStr+="<br>"+i+" has been played "+stats[i]+ " times";
            }
            dataStr+="<br> There have been "+reshuffles+" reshuffles.";
            $('#statDisplay').html(dataStr);
            click = false;
        }
        else {
            $('#statDisplay').html("");
            click = true;
        }
    });
});