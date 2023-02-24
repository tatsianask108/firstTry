// ИГРА
// запуск игры нажатием на кнопку начать, генерируется задача
// пользователь может ввести ответ, появляется кнопка проверит

// сравниваем ввод пользователя с ответом
// вывести результат и прравильное значение, сменить кнопку на начать заново




const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)

    // let symbol
    // if (Math.random() > 0.5) {
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children

const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        toggleGameState()
    } else {
        // сравнить ответ юзера сс правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        // вывести поздравление
        title.innerText = (isRight) ? "Верно" : "Неверно"
        // поменять кнопку и состояние
        btnGame.innerText = "Начать заново"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})










// console.dir(document)
// querySelector берет первый попавшийся элемент, он читает код линейно
// обращаемся к параграфу внутри элемента с id my_game 
const chosenEl = document.querySelectorAll(".chosen_block-container > div")
const counterEl = document.querySelector(".chosen_block span")
// console.log(chosenEl.length)

const chosenState = {
    countElements: 0,

}
const changeCount = (value) => {
    chosenState.countElements += value
    counterEl.innerText = chosenState.countElements
}

for (let i = 0; i < chosenEl.length; i++) {
    chosenEl[i].addEventListener("click", (e) => {
        // console.log("click")
        // выбрать элемент, то есть выделить его с помощью класса
        // chosenEl[i].className = "chosen_element"
        // console.log(e)
        // запустить счетчик
        if (e.target.className === "") {
            e.target.className = "chosen_element"
            changeCount(1)
        } else {
            e.target.className = ""
            changeCount(-1)

        }
    })
}



// setTimeout(() => {
//     aleret ("sold out")
// }, 2000)

// setInterval()

console.log("1")
setTimeout(() => {
    console.log("2")
}, 0)
console.log("3")

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then( data => {
        console.log(data)
    })
    .catch((err) => {
console.log(err)
console.log(err.message)
    })