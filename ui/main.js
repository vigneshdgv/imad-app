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
button.onclick = function(){
    var request =new XMLHttpRequest();
    request.onreadyStatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML= counter.toString();
        }    }
    };

request.open('GET','http://aspiringvignesh.imad.hasura-app.io/');
request.send('null');
};