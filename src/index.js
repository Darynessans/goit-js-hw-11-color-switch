'use strict'
import './sass/main.scss';
const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];


const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
  };  

const bodyItem = document.querySelector("body");

const butStart = document.querySelector('button[data-action="start"]');
const butStop = document.querySelector('button[data-action="stop"]');

let timerId = null;
butStart.addEventListener("click", () => {

  timerId = setInterval(() => {
    
    bodyItem.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  butStart.disabled = true;
});

butStop.addEventListener("click", (e) => {
 
  if (timerId != null) clearTimeout(timerId);
  butStart.disabled = false;
});