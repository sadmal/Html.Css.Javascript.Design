let startBtn = document.getElementById('start');

let logout=document.querySelector(".logout");

logout.addEventListener("click",backtohomepage);

function backtohomepage(){
    window.location.href='index.html'
}
function backhome(){
    window.location.href='index.html?limit='+"true"
}

let minute = 4;
let second = 59;
let count = 60;
  


// startBtn.addEventListener('click', stopWatch)
    
  
window.onload = stopWatch();
  
function stopWatch(){
    timer = true;
    if (timer && second>0) {
        count--;
  
        if (count == 0 && second>=0) {
            second--;
            count = 60;
        }
  
        if (second == 0 && min>=0) {
            minute--;
            second = 60;
        }
  
  
        
        let minString = minute;
        let secString = second;
        let countString = count;
  
  
        if (minute < 10) {
            minString = "0" + minString;
        }
  
        if (second < 10) {
            secString = "0" + secString;
        }
  
        if (count < 10) {
            countString = "0" + countString;
        }
  

        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);

        if(minString==00 && secString==00){
            backhome();
         
    }
    }
    
}

