console.log('Loaded!');
//moving the image
var move=0;
function moveright(){
move =move + 10;
img.style.marginLeft=move+'px';
}
var img = document.getElementById('madi');
img.onclick = function () {
   var interval= setInterval(moveright,25);
};

var button = document.getElementById("counter");
var counter = 0;
counter.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById("count");
span.innerHTML= counter.toString();
    
};