document.querySelector('#card').addEventListener('touchstart', (e) => {
    e.preventDefault();
    document.querySelector('#touchpoints').innerHTML = e.changedTouches.pageX;
}, false);