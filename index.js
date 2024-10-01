const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meters = 3.2808;
const feet = 0.3048;
const liter = 0.264172;
const gallon = 3.78541;
const kilogram = 2.20462;
const pound = 0.453592;

convertBtn.addEventListener("click", function () {
  const inputVal = inputEl.value;

  lengthEl.innerHTML = `
    <p>
        ${inputVal} meters = ${(inputVal * meters).toFixed(3)} feet 
        | ${inputVal} feet = ${(inputVal * feet).toFixed(3)} meters
    </p>  
  `;

  volumeEl.innerHTML = `
    <p>
        ${inputVal} liters = ${(inputVal * liter).toFixed(3)} gallons 
        | ${inputVal} gallons = ${(inputVal * gallon).toFixed(3)} liters
    </p>
  `;

  massEl.innerHTML = `
    <p>
        ${inputVal} kilos = ${(inputVal * kilogram).toFixed(3)} pounds
        | ${inputVal} pounds = ${(inputVal * pound).toFixed(3)} kilos
    </p>
  `;
});
