const mainContainer = document.querySelector('.main-container');
const boxContainer = document.querySelector('.container');
const btnContainer = document.querySelector('.button-conatiner');
const grayBtn = document.querySelector('.btn-gray');
const colorBtn = document.querySelector('.btn-color');
const greenBtn = document.querySelector('.btn-green');
const eraseBtn = document.querySelector('.btn-erase');
const clearBtn = document.querySelector('.btn-clear');
const btnSize = document.querySelector('.btn-size');



function createBox(col, rows) {
    for(let i = 0; i < (col * rows); i++){
      const box = document.createElement('div');
      boxContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      boxContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      boxContainer.appendChild(box).classList.add('box');
    }  

}

createBox(16, 16);

function grayColor() {
  const boxs = boxContainer.querySelectorAll('.box');
   grayBtn.addEventListener('click', () => {
   boxs.forEach(box => box.addEventListener('mouseover' , () => {
        let Rnum = Math.floor(Math.random() * 255)
        box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
    }))

   })
}

grayColor();


function colorButton() {
   const boxs = boxContainer.querySelectorAll('.box');
   colorBtn.addEventListener('click', () => {
       boxs.forEach(box => box.addEventListener('mouseover', () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${R},${G},${B})`
       }))
   })
   
}

colorButton()


function greenButton() {
   const boxs = boxContainer.querySelectorAll('.box');
   greenBtn.addEventListener('click', () => {
       boxs.forEach(box => box.addEventListener('mouseover', () => {
           let font = Math.floor(Math.random() * 100)
           box.textContent = font;
           let R = Math.floor(Math.random() * 255);
           let G = Math.floor(Math.random() * 255);
           let B = Math.floor(Math.random() * 255);
           box.style.color = `rgb(${R},${G},${B})`

           box.style.textAlign = 'center';
           box.style.fontSize = '20px';
       }))
   })
}

greenButton();

function eraseButton() {
  const boxs = boxContainer.querySelectorAll('.box');
  eraseBtn.addEventListener('click' , () => {
      boxs.forEach(box => box.style.background = `#ffffff`);
      boxs.forEach(box => box.style.color = `#ffffff`);
  })
}
eraseButton();

function clearButton() {
   const boxs = document.querySelectorAll('.box');
   clearBtn.addEventListener('click', () => {
       boxs.forEach(box => box.addEventListener('mouseover', () => {
           box.style.background = `rgb(255,255,255)`;
           box.style.color = `rgb(255,255,255)`;
           
       }))
   })
}

clearButton();


function reSet() {
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => box.remove())
}

function sizeButton(){
    btnSize.addEventListener('click', () => {
        let val = prompt("What size do you want your grid to be?");
        if(val === null || val < 1 || val > 20) {
            reSet()
            createBox(16,16);
            colorButton();
            greenButton();
            eraseButton();
            clearButton();
        }else{
            reSet();
            createBox(val,val);
            colorButton();
            greenButton();
            eraseButton();
            clearButton();
        }
    })
}
sizeButton()
