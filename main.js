document.querySelector('#card-footer').addEventListener('touchmove', (e) => {
    e.preventDefault();
    document.querySelector('#touchpoints').innerHTML = e.changedTouches.pageX;
}, false);