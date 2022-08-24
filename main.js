import data from "./data.json" assert { type: "json" };

let chartBarsContainer = document.querySelector(".chart__bars-container");

let values = []

data.forEach((element) => {
    values.push(element.amount)
  chartBarsContainer.innerHTML += `
  <div class="chart__bar">
    <div class="chart__bar--label">$${element.amount}</div>
    <div class="chart__bar--day">${element.day}</div>
  </div>`;
});

let alturaMaxBarpx = 150;
let maxValue = Math.max(...values);

    /*
    52.36 -> 200
    17.45 -> x
    x = (17.45 * 200px) / 52.36

    alturaActualpx = ( nuevoValor *  alturaMaxBarpx) / maxValor
    */

let bars = document.querySelectorAll(".chart__bar");
bars = [...bars];

bars.forEach((bar) => {

    let newValue =  parseFloat(bar.childNodes[1].innerText.slice(1));
    let alturaActualpx  = (newValue*alturaMaxBarpx) / maxValue
    bar.style.height = `${alturaActualpx}px`

    // pintar la barra con mas valor 
    if(newValue == maxValue) bar.style.backgroundColor ="hsl(186,34%,60%)"



    bar.addEventListener("mouseover", (event)=> {
        let labelElement = event.target.childNodes[1]; 
        labelElement.style.display = "block"
    })
    bar.addEventListener("mouseout", (event) => {
        let labelElement = event.target.childNodes[1]; 
        labelElement.style.display = "none"
    })
});
