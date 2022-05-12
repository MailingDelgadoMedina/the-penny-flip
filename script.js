


let headsCount = 0;
let tailsCount= 0;

document.querySelector("#flip").addEventListener("click",function(){
    // console.log("I was clicked")

    let isHeads = Math.random() < 0.5;

    if (isHeads){
        // console.log("It is heads")
        document.querySelector("img").src="./assets/images/penny-heads.jpg";
        document.querySelector("h2").textContent = "You flipped heads! ";

        headsCount++;
       
    }else{
        // console.log("It is tails")
        document.querySelector("img").src="./assets/images/penny-tails.jpg";
        document.querySelector("h2").textContent = "You flipped tails! ";
        tailsCount++;
        

    }
    
    let total = headsCount + tailsCount;
    let percentageHeads = 0;
    let  percentageTails = 0;
    if(total > 0){
        percentageHeads = Math.round(headsCount/total * 100);
         percentageTails = Math.round(tailsCount/total * 100);
       
    }

document.getElementById("heads-percentage").textContent = percentageHeads + "%";
    document.getElementById("tails-percentage").textContent =  percentageTails +  "%";
    document.getElementById("tails-count").textContent = tailsCount;
    document.getElementById("heads-count").textContent = headsCount;

    // console.log(percentageTails);
});