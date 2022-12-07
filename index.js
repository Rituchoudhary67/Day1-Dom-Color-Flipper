const button = document.querySelector('.btn');
const buttonTwo = document.querySelector('.btn2');
const buttonThree = document.querySelector('.btn3');


/*C.step2 :- making function for button three for effect of radial color*/
function radialColor() {
    let color1 = `rgb(${Math.random() *255},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    let color2 = `rgb(${Math.random() *255},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    let color3 = `rgb(${Math.random() *255},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;

    document.body.style.backgroundImage =`radial-gradient(${color1}, ${color2}, ${color3})`
}

/*B.step2 :- making function for singlecolor*/
function singleColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    document.body.style.background = 'rgb('+red+','+green+','+blue+')';
}


/*A.step2 :- making function for gradientcolor*/
function gradientColor() {
let color1=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
let color2=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`

        document.body.style.backgroundImage = `linear-gradient(to right, ${color1},${color2})`
        
    }


/*C.step1 :- add event listener on button three*/
buttonThree.addEventListener('click',radialColor)

/*B.step1 :- add event listner on single color button*/
button.addEventListener('click',singleColor)

/*A.step1 :- add event listener on btn2*/
buttonTwo.addEventListener('click',gradientColor)