
/*
setTimeout(() =>{
    console.log("hi tr")

},4000)
*/
//setTimeout(display,3000);

//function display(){
   // console.log("display function")
//}


/*
const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click",saveUser);

function saveUser(){
    message.textContent = "Registration Successful";


setTimeout(() =>{
    message.textContent= "";
}, 3000);

}
*/


const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");


 saveButton.addEventListener("click", displayCount);
 function displayCount() {
   let count = 1;
   message.textContent = count;

   setInterval(() => {
    count++;
    message.textContent = count;
  }, 1000);
 }

