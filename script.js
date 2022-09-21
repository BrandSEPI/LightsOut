document.addEventListener("DOMContentLoaded", () => {
    const scoreDiv = document.querySelector(".score");
    const allCase = document.querySelectorAll(".case");
    let score = 0
    let matrice = [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1]
    class Case {
        constructor(xCor, yCor) {
            this.state = Math.random() < 0.5;
            this.coord = {
                x: xCor,
                y: yCor
            }
        }

        getCoord = () => {
            return this.coord;
        }
    }

    let getKeyByCoord = (x, y) => {
        return x + y * 5
    }

    let refresh = () => {
        let count = 0
        array.forEach(element => {

            // console.log(element.state);
            if (element.state) {
                allCase[count].classList.add("light")
            } else {
                allCase[count].classList.remove("light")
            }
            count++
        })
    }


    let array = []
    let x = 0
    let y = 0
    for (let index = 0; index < 25; index++) {
        if (x >= 5) {
            x = 0
            y++
        }
        array.push(new Case(x, y))
        x++


    }
    scoreDiv.innerHTML = score;

    allCase.forEach(box => {
        box.addEventListener('click', (e) => {
            let xBox = parseInt(e.target.classList[3].slice(1));
            let yBox = parseInt(e.currentTarget.parentNode.classList[1].slice(1));
            let key = getKeyByCoord(xBox, yBox)
                // console.log(yBox);
            array[key].state = !array[key].state;
            if (xBox + 1 < 5) {
                key = getKeyByCoord(xBox + 1, yBox)
                array[key].state = !array[key].state;
            }
            if (xBox - 1 > -1) {
                key = getKeyByCoord(xBox - 1, yBox)
                array[key].state = !array[key].state;
            }
            if (yBox + 1 < 5) {
                key = getKeyByCoord(xBox, yBox + 1)
                array[key].state = !array[key].state;
            }
            if (yBox - 1 > -1) {
                key = getKeyByCoord(xBox, yBox - 1)
                array[key].state = !array[key].state;
            }

            // array.forEach(element => {
            //     console.log(element.getCoord().x);
            // })
            refresh();
            score++
            scoreDiv.innerHTML = score;
        });



        refresh()
    });


})