function handleIncrease(){
    data.innerText = Number(data.innerText) + Number(inputdata[0].value);
}

function handleDecrease() {
    data.innerText = Number(data.innerText) - inputdata[0].value;
}


var increment = document.querySelector(".increment");
var decrement = document.querySelector(".decrement");
var inputdata = document.getElementsByTagName("input");
var data = document.querySelector(".data");
var reset = document.querySelector(".reset");

increment.addEventListener("click", handleIncrease);
decrement.addEventListener("click", handleDecrease);
reset.addEventListener("click", () =>{data.innerText = 0});
