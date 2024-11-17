function getRandomColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        let letter = hex[Math.floor(Math.random() * hex.length)];
        color += letter;
    }

    return color;
}

function changeBackground(color) {
    document.getElementById("color-box").style.background = color;
}

function showRandomColor() {
    let color = getRandomColor();
    document.getElementById("hex-value").value = color;
    changeBackground(color);
}
