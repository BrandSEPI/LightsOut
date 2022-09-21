document.addEventListener("DOMContentLoaded", () => {
    const scoreDiv = document.querySelector(".score");
    const allCase = document.querySelectorAll(".case");

    let Case = class {
        constructor() {
            this.state = Math.random < 0.5;
        }
    }

    scoreDiv.innerHTML = 0;

    let array = []
    let x = 0
    let y = 0
    for (let index = 0; index < 25; index++) {
        if (x >= 5) {
            x = 0
            y++
        }
        array.push([x, y, Case])
        x++


    }
    console.log(array);

    allCase.forEach(box => {
        box.addEventListener('click', (e) => {
            console.log(e);
        });
    });



})