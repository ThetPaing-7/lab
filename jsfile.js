function randomColor() {
    return `rgb(${getTwoRandomNumbers(0, 255)}, ${getTwoRandomNumbers(0, 255)}, ${getTwoRandomNumbers(0, 255)})`;
}

function getTwoRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('JavaScript loaded');

const body = document.getElementById('Test');
console.log('Body element:', body);

console.log('Random color:', randomColor());

document.body.addEventListener('click',() => {
    const color = randomColor();
    console.log(color);
    document.body.style.backgroundColor = color;
});