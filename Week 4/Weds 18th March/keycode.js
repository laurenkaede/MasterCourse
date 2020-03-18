const input1 = document.getElementById('key-pressed')
const input2 = document.getElementById('code')
const input3 = document.getElementById('num')
const input4 = document.getElementById('main')

document.addEventListener('keydown', function () {
    input1.textContent = event.key
    input2.textContent = event.code
    input3.textContent = event.which
    input4.textContent = event.which
});