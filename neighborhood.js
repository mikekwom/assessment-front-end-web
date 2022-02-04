const resterauntsArr = ["Jimmy Johns", "Panda Express", "Waffle Love", "The Habit", "Chipotle"]

const getResteraunt = (event) => {
    event.preventDefault()

    const random = Math.floor(Math.random() * resterauntsArr.length)
    randomResteraunt = resterauntsArr[random]

    let placeToEat = document.querySelector("#resteraunt-placeholder")
    if (placeToEat.textContent.anchor !== "...") {
        placeToEat.textContent = ""
    }
    placeToEat.textContent = randomResteraunt
    // document.body.appendChild(newP)

    //console.log(newP.textContent)

    // clear previous answer
}

document.querySelector("#random-resteraunt-btn").addEventListener("click", getResteraunt)