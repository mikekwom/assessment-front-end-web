const color = document.querySelector("#color")
const place = document.querySelector("#place")
const ritual = document.querySelector("#ritual")

const colorAlert = (event) => {
    event.preventDefault()

    alert("blue")
}

const placeAlert = (event) => {
    event.preventDefault()

    alert("couch")
}

const ritualAlert = (event) => {
    event.preventDefault()

    alert("code")
}
color.addEventListener("click", colorAlert)
place.addEventListener("click", placeAlert)
ritual.addEventListener("click", ritualAlert)