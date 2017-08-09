console.log('Loaded!');
//changing the text
var element = document.getElementById('maint');
element.innerHTML='This Website is Blocked';
//moving the image
var move=0;
function moveright(){
move = 10;
img.style.marginleft=moveright+'px';
}
var img = document.getElementById('madi');
img.onclick = function () {
    setinterval(moveright,25);
};