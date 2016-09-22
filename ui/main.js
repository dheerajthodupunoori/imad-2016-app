console.log('loaded!');
//change the text of the main-text in div
var element=document.getElementById('main-text');
element.innerHTML='DHEERAJ';

//move the image
var image = document.getElementById('img');
image.onClick = function(){
    image.style.marginLeft='100px';
}