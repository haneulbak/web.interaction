var clock = document.getElementById("clock");

setInterval(function(){
    getDate()
},1000);

//change the font family of clock
function fontFunction(){
    var myVariableForFont = document.getElementById("myFonts").value;
    clock.style.fontFamily = myVariableForFont;

}

//bold
function boldFunction(){
    var checkBox = document.getElementById("boldCheck");

    if( checkBox.checked == true ){
        clock.style.fontWeight = 'bold';
    }
    else{
        clock.style.fontWeight = 'inherit';
    }
}

//italic
function italicFunction(){
    var checkBox = document.getElementById("italicCheck");

    if( checkBox.checked == true ){
        clock.style.fontStyle = "italic";
    }
    else{
        clock.style.fontStyle = 'inherit';
    }
}

//color
function colorFunction(){
    var checkBox = document.getElementById("colorCheck");

    if( checkBox.checked == true ){
        clock.style.fontColor = "#EA4335";
    }
    else{
        clock.style.fontCcolor = 'inherit';
    }
}

//size
function sizeFunction(){
    var checkSize = document.getElementById("size").value;
    
    clock.style.fontSize = checkSize+"px";
}

//motion
function myMove() {
    var elem = document.getElementById("clock");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }

//motion for container
function anotherMove() {
    var elem = document.getElementById("clock");   
    var pos = 0;
    var id = setInterval(frame, 3);
    function frame() {
      if (pos == 750) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.bottom = pos + "px"; 
        elem.style.right = pos + "px"; 
      }
    }
  }

//random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }