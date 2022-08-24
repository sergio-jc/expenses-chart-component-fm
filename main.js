import data from "./data.json" assert { type: "json" };

let chartBarsContainer = document.querySelector(".chart__bars-container");

data.forEach((element) => {
  chartBarsContainer.innerHTML += `
  <div class="chart__bar">
    <div class="chart__bar--label">$${element.amount}</div>
    <div class="chart__bar--day">${element.day}</div>
  </div>`;
});

let bars = document.querySelectorAll(".chart__bar");
bars = [...bars];

bars.forEach((bar) => {
    bar.addEventListener("mouseover", (event)=> {
        let labelElement = event.target.childNodes[1]; 
        labelElement.style.display = "block"
    })
    bar.addEventListener("mouseout", (event) => {
        let labelElement = event.target.childNodes[1]; 
        labelElement.style.display = "none"
    })
});
