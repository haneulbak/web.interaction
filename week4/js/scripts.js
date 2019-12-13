// rotate my diamond

var rotate = true;
$('#diamond').click(function(){

    if(rotate===true){
    $('#diamond').css('transform','rotate(0deg)')
    rotate=false;
    }
    else{
    $('#diamond').css('transform','rotate(45deg)')
    rotate=true;
    }
    console.log(rotate)

})


//randomly position left to right

$('square').css('margin-left','50px')

setInterval(function(){

    var randomNumber = Math.random() * 100 + "px";
    $('#square').css('margin-left',randomNumber)

},1000)
