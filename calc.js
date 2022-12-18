let output = document.querySelector(".screen .output");
let keys = document.querySelectorAll(".keys div p");
let actionKeys = document.querySelectorAll('.action-key');


function disableActionKeys(){
    actionKeys.forEach(key => {
        key.style.pointerEvents = 'none';
    })
}

disableActionKeys()

function enableActionKeys(){
    actionKeys.forEach(key => {
        key.style.pointerEvents = 'all';
    })
} 

let screenVal = '0';
output.textContent = screenVal;

function calculate() {
    if (screenVal == '0'  && this.textContent == '0') {
        disableActionKeys();
        output.textContent = screenVal;
      }
       else if (this.textContent == "=") {
        disableActionKeys()
        screenVal = eval(screenVal);
        output.textContent = screenVal;
    
      } else if (this.textContent == "C") {
        disableActionKeys();
        screenVal = 0;
        output.textContent = screenVal
    
      } else if (this.textContent == 'x'){
        disableActionKeys()
        screenVal += '*'
        output.textContent = screenVal;
      } else if(this.textContent == '+'){
        screenVal += this.textContent;
        output.textContent = screenVal;
        disableActionKeys();
      } else if(this.textContent == '%'){
        screenVal += this.textContent;
        output.textContent = screenVal;
        disableActionKeys();
      }
       else {
        enableActionKeys();
        screenVal += this.textContent;
        output.textContent = screenVal;
      }
}

keys.forEach((key) => {
    key.style.cursor = 'pointer'
  key.addEventListener("click", calculate);
});

// This section change the color of the body with a click

let button = document.getElementById('button');
button.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);
 let cal_body = document.getElementById('cal-bd');
 cal_body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};





