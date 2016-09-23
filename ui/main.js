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

//submit name
var nameInput = document.getElementBYId('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onClick = function(){
    //make a request to the server and get the name
    //capture a list of names and render it as a list
    
    
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>'+ names[i] + '</li>';
    }
    var ui = document.getElementById('namelist');
    ui.innerHTML = list;
};