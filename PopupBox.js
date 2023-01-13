


//alert("don't do it again");

//confirm("are you sure")

function welcomemsg(){
var h1 = document.createElement("h1");
let text;


var name = prompt("Enter your name:");

if(name ==null || name == ""){
    text = "no name found";
}
else{

    text = name;
}
 var textNode = document.createTextNode(text);
 h1.appendChild(textNode);
 document.body.appendChild(h1);

}

welcomemsg();