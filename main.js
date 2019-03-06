//Custom function
function calculateTip(){
    
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;
    
    //Quick validation
    if(billAmount == "" ||  serviceQuality == 0){
        return window.alert("Please enter a value");
    }
    
    //Chceck to see if this input is empty or <= 1
    if(totalPeople == "" || totalPeople <= 1){
        totalPeople = 1;
        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block"
    }
    
    //math
    var total = (billAmount * serviceQuality) / totalPeople;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerText = total;
   }

//Hide the tip amount in load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//clicking button calls custom function

document.getElementById("calculate").onclick=function(){ calculateTip()};