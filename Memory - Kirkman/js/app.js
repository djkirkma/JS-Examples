// Memory Game

var holderDiv = document.querySelector("#holderDiv");
var count = 1;
var clickOne;
var clickTwo;
var theNumber = null;

var holder1
//Making 16 divs
    makeDivs();

function theClick(event) {

    if(count == 1) {
        
        clickOne = event.target.getAttribute("data")
        holder = event.target;
        count++
        event.target.innerHTML = event.target.getAttribute("data")
    }
    
        else if (count == 2) {
            clickTwo = event.target.getAttribute("data")
            event.target.innerHTML = event.target.getAttribute("data")
            
                if(clickOne == clickTwo) {
                    
                    setTimeout(function(){
                        holder.style.background = "white";
                        event.target.style.background = "white";
                        holder.innerHTML = ""
                        event.target.innerHTML = ""
                                         }, 2000);
                    
                }
                else {
                     setTimeout(function(){
                        holder.innerHTML = ""
                        event.target.innerHTML = ""
                                         }, 2000);
                }

        count = 1;
    }

}

function makeDivs() {
    for(i = 0; i < 16; i++) {
    
    var theDiv = document.createElement("div");
    theDiv.style.backgroundColor = "#4286f4";
    theDiv.style.margin = 10 + "px";
    theDiv.style.height = 175 + "px";
    theDiv.style.width = 200 + "px";
    theDiv.style.position = "absolute";
    theDiv.style.fontSize = 100 + "px";
    var numberArray = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]

    while(theNumber == null) {
        var a = Math.round(Math.random() * 15)
            console.log(a)
        if(numberArray[a] != "") {
            if(numberArray[a]  == 0 || numberArray[a]  == 1)
            theDiv.setAttribute("data", 1);
            if(numberArray[a]  == 2 || numberArray[a]  == 3)
            theDiv.setAttribute("data", 2);
            if(numberArray[a]  == 4 || numberArray[a]  == 5)
            theDiv.setAttribute("data", 3);
            if(numberArray[a]  == 6 || numberArray[a]  == 7)
            theDiv.setAttribute("data", 4);
            if(numberArray[a]  == 8 || numberArray[a]  == 9)
            theDiv.setAttribute("data", 5);
            if(numberArray[a]  == 10 || numberArray[a]  == 11)
            theDiv.setAttribute("data", 6);
            if(numberArray[a]  == 12 || numberArray[a]  == 13)
            theDiv.setAttribute("data", 7);
            if(numberArray[a]  == 14 || numberArray[a]  == 15)
            theDiv.setAttribute("data", 8);
            
            numberArray[a] = ""
            theNumber = true;
        }
        else {
            
        }
    }
    theNumber = null;
    

    theDiv.addEventListener("click", theClick);
    if(i < 4) {
        theDiv.style.left = (i * 400) + "px";
        theDiv.style.top = 0 + "px"
    }
    else if ( i >= 4 && i < 8 ) {
        theDiv.style.left = ((i - 4) * 400) + "px";
        theDiv.style.top = 200 + "px"
    }
    else if ( i >= 8 && i < 12 ) {
        theDiv.style.left = ((i - 8) * 400) + "px";
        theDiv.style.top = 400 + "px"
    }
    else {
        theDiv.style.left = ((i - 12) * 400) + "px";
        theDiv.style.top = 600 + "px"
    }
        
        holderDiv.appendChild(theDiv)
    }
}
function again() {
    holderDiv.innerHTML = "";
    makeDivs();
}
