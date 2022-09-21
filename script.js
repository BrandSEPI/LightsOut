document.addEventListener("DOMContentLoaded", () => {
    const scoreDiv = document.querySelector(".score");
    const allCase = document.querySelectorAll(".case");
    let score = 0
    console.log(Math.round(Math.random() * (4 - 0)));



    class Case {
        constructor(xCor, yCor, statement) {
            this.state = statement;
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

    let clickCase = (arrayGame, xCase, yCase) => {
        let key = getKeyByCoord(xCase, yCase)
        arrayGame[key].state = !arrayGame[key].state;
        if (xCase + 1 < 5) {
            key = getKeyByCoord(xCase + 1, yCase)
            arrayGame[key].state = !arrayGame[key].state;
        }
        if (xCase - 1 > -1) {
            key = getKeyByCoord(xCase - 1, yCase)
            arrayGame[key].state = !arrayGame[key].state;
        }
        if (yCase + 1 < 5) {
            key = getKeyByCoord(xCase, yCase + 1)
            arrayGame[key].state = !arrayGame[key].state;
        }
        if (yCase - 1 > -1) {
            key = getKeyByCoord(xCase, yCase - 1)
            arrayGame[key].state = !arrayGame[key].state;
        }
        // console.log(arrayGame);
        return arrayGame
    }

    let matriceCreation = () => {
        let matrice = [{ state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }, { state: true }]
        for (let index = 0; index < 10; index++) {
            let x = Math.round(Math.random() * (4 - 0))
            let y = Math.round(Math.random() * (4 - 0))
            console.log(x, y);
            matrice = clickCase(matrice, x, y)
                // console.log(matrice);

        }
        return matrice
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
    let matrice = matriceCreation()
    for (let index = 0; index < 25; index++) {
        if (x >= 5) {
            x = 0
            y++
        }
        array.push(new Case(x, y, matrice[index].state ? true : false))
        x++


    }


    refresh()
    console.log(matrice);
    scoreDiv.innerHTML = score;

    allCase.forEach(box => {
        box.addEventListener('click', (e) => {
            let xBox = parseInt(e.target.classList[3].slice(1));
            let yBox = parseInt(e.currentTarget.parentNode.classList[1].slice(1));
            array = clickCase(array, xBox, yBox)

            // array.forEach(element => {
            //     console.log(element.getCoord().x);
            // })
            refresh();
            score++
            scoreDiv.innerHTML = score;
        });



    });


})