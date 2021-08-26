const button = document.getElementsByTagName('button')[0];
const label = document.getElementsByTagName('h1')[0];

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

button.addEventListener('click', () => {
    const color = random_hex_color_code();
    document.body.style.backgroundColor = color;
    label.innerText = color;
});