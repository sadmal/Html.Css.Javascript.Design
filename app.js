let input=document.querySelector(".password");
let button=document.querySelector(".labBtn");
let pass="sahil";
var count  = 0;

button.addEventListener("click", movetosecondpage)
var id = null;

function  movetosecondpage(){

    var url = new URL(window.location.href);
var c = url.searchParams.get("limit");
    if ((window.location.href.indexOf("limit") > -1) && c == "true") {
        window.location = window.location.href.replace("limit=true","limit=false");
        count += 1;
        alert("You have exhausted your limit to login")
        return false;
    }
    if(input.value == pass){
       $(".circle").fadeOut();
       var elem = document.getElementById("left"); 
       var elem2 = document.getElementById("right");   
  
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, -30);
  function frame() {

      pos++; 
      elem.style.top = pos - 'px'; 
      elem.style.right = pos + 'px'; 
      elem2.style.top = pos - 'px'; 
      elem2.style.left = pos + 'px'; 
    
  }
       const myTimeout = setTimeout(myGreeting, 3000);

    }
    else if(input.value==""){
      alert("enter your password")
    }
    else{
        alert("wrong password")
    };
   
    
    

}

function myGreeting(){
    window.location.href='index2.html';
   
}