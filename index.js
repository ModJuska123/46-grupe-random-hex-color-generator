console.log('veikia');

const span = document.querySelector('span');
const btn = document.querySelector('btn');
const body = document.querySelector('body');

const generateHexColor = ()=> {
    const randomColor = Math.random().toString(16).slice(2, 8);
    
    span.innerHTML = '#' + randomColor;

    body.style.backgroundColor = '#' + randomColor;
}


btn.addEventListener("click", generateHexColor);
body.addEventListener("mousewheel", generateHexColor);