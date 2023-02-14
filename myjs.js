'use strict'

const body = document.body;
const box = document.getElementById('box');
const divWhite = document.getElementById('white');
const divRed = document.getElementById('red');
const divYellow = document.getElementById('yellow');

const menu = (event) => {
    event.preventDefault();
    if ((body.clientHeight - event.y - box.clientHeight) < 0) {
        let top = body.clientHeight - box.clientHeight;
        box.style.marginTop = `${top}px`;
    } else {
        box.style.marginTop = `${event.y}px`;
    }

    if ((body.clientWidth - event.x - box.clientWidth) < 0) {
        let left = body.clientWidth - box.clientWidth;
        box.style.marginLeft = `${left}px`;
    } else {
        box.style.marginLeft = `${event.x}px`;
    }
}

const menuOff = () => {
    box.style.marginTop = '-300px';
}

const f1 = () => {
    body.style.backgroundColor = 'white';
    box.style.marginTop = '-300px';
}

const f2 = () => {
    body.style.backgroundColor = 'red';
    box.style.marginTop = '-300px';
}

const f3 = () => {
    body.style.backgroundColor = 'yellow';
    box.style.marginTop = '-300px';
}

body.addEventListener('contextmenu', menu);
body.addEventListener('click', menuOff);
divWhite.addEventListener('click', f1);
divRed.addEventListener('click', f2);
divYellow.addEventListener('click', f3);



