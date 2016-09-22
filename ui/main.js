console.log('loaded!');
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
};