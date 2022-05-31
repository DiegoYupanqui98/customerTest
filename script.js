setInterval(() => {

    const date = new Date;

    const startTime1 = "08:30"
    const endTime1 = "10:00"
    
    const startTime2 = "15:00"
    const endTime2 = "16:30"

    const hour = date.getHours()
    const minutes = date.getMinutes()
    
    const hourString = hour/10 < 1 ? `0${hour}` : hour.toString()
    const minuteString = minutes/10 < 1 ? `0${minutes}` : minutes.toString()

    const stringTime = `${hourString}:${minuteString}`

    if(stringTime >= startTime1 && stringTime <endTime1 | stringTime >= startTime2 && stringTime <endTime2 ){
    document.querySelector(".open-sign").classList.remove("hidden")
    document.querySelector(".closed-sign").classList.add("hidden")
    }
    else{
        document.querySelector(".open-sign").classList.add("hidden")
        document.querySelector(".closed-sign").classList.remove("hidden")
    }
}, 10);

setInterval(() => {
    location.reload()
}, 1000);