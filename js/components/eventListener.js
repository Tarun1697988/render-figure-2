import { divElem } from './figure';
import Rectagle from './rectangle';
import Circle from './circle';
import Square from './square';
import {handler} from './tools'


let squareButton = document.querySelector('.button-square');
let circleButton = document.querySelector('.button-circle');
let rectangleButton = document.querySelector('.button-rectangle');
let resetButton = document.querySelector('.button-reset');


squareButton.addEventListener("click", function () {
  handler(Square);
});

circleButton.addEventListener("click", function () {
  handler(Circle);
});

rectangleButton.addEventListener("click", function () {
  handler(Rectagle);
});

resetButton.addEventListener('click', function () {
  divElem.innerHTML = "";
});
  


