const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const box = document.getElementById("box");

red.addEventListener('input', updateBox);
blue.addEventListener('input', updateBox);
green.addEventListener('input', updateBox);

function updateBox(){
    const redValue = red.value;
    const blueValue = blue.value;
    const greenValue = green.value;
    if(blueValue >100 )
        box.style.color="black";
    else
        box.style.color="aliceblue";
    box.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
    box.innerHTML ="( " +  redValue  + ", " + blueValue + ", " + greenValue+ " )";
}