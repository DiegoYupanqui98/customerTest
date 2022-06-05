setInterval(() => {

    const date = new Date;

    const startTime1 = "08:30"
    const endTime1 = "10:00"

    const startTime2 = "15:00"
    const endTime2 = "16:30"


    const hour = date.getHours()
    const minutes = date.getMinutes()
    const day = date.getDay()
    const hourString = hour / 10 < 1 ? `0${hour}` : hour.toString()
    const minuteString = minutes / 10 < 1 ? `0${minutes}` : minutes.toString()

    const stringTime = `${hourString}:${minuteString}`

    if (day > 6 | day < 1) {
        document.querySelector(".weekend-sign").classList.remove("hidden")
        document.querySelector(".closed-sign").classList.add("hidden")
        document.querySelector(".open-sign").classList.add("hidden")
    }
    else if (stringTime >= startTime1 && stringTime < endTime1 | stringTime >= startTime2 && stringTime < endTime2) {
        document.querySelector(".open-sign").classList.remove("hidden")
        document.querySelector(".closed-sign").classList.add("hidden")
        document.querySelector(".weekend-sign").classList.add("hidden")
    }
    else {
        document.querySelector(".closed-sign").classList.remove("hidden")
        document.querySelector(".open-sign").classList.add("hidden")
        document.querySelector(".weekend-sign").classList.add("hidden")
    }
}, 10);