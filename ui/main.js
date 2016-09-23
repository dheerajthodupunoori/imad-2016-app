//var counter = 0;
var button = document.getElementById('counter');
button.onClick = function(){
    //create a request to the counter enddpoint
    var request = new XMLHttpRequest();
    //cpature the response and store it in the counter varaiable
    request.onreadystatechange = function(){
        if(request.readystate==XMLHttpRequest.DONE){
            if(request.status==200){
            var counter = request.responseText;
             var span  = document.getElementById('count');
             span.innerHTML = counter.toString();
            }
        }
        
        
    };
    //make a request
    request.Open('GET','http://http://dheerajthodupunoori.imad.hasura-app.io/counter',true);
    request.send(null);
};