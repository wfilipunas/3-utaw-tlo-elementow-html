const changeBackground = () => {
    let p1 = document.getElementById('first');
    let p2 = document.getElementById('second');
    
    p1.classList.add('p1-bcg');
    p2.classList.add('p2-bcg');
}

let btn = document.querySelector('button');
btn.addEventListener('click', changeBackground);