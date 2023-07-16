function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', mouseMove);
    let res = document.getElementById('result')

    function mouseMove(ev) {
        res.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
}