/*console.log('loaded!');
//change the text of the main-text in div
var element=document.getElementById('main-text');
element.innerHTML='DHEERAJ';

//move the image
var image = document.getElementById('img');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+10;
    image.style.marginLeft = marginLeft+'px';
}
image.onClick = function(){
    var interval = setInterval(moveRight,100);
};*/


var counter = 0;
var button = document.getElementById('counter');
button.onClick = function(){
    //
    
    
    
    
   //render the variable in the correct span 
    counter = counter+1;
    var span  = document.getElementById('count');
    span.innerHTML = counter.toString();
}