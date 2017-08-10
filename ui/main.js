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
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML= counter.toString();
            }
        }
    };

request.open('GET','http://aspiringvignesh.imad.hasura-app.io/counter');
request.send('null');
};
var submit = document.getElementById("submitb");
submit.onclick = function(){
    var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>' + names[i] +'</li>';
                }
                    var ul =document.getElementById("list");
                    ul.innerHTML=list;
                    
                
            }
        }
    };
var nameI = document.getElementById("Text");
name= nameI.value;
request.open('GET','http://aspiringvignesh.imad.hasura-app.io/submitname?name=' +name,true);
request.send('null');
};