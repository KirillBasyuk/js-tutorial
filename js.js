let year = document.querySelector('.news__date__year');
let time = document.querySelector('.news__date__time');

let timerId = setInterval(() => {
    year.innerHTML = new Date().toLocaleDateString();
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000);
