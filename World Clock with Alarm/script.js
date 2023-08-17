const updateTime = ()=>{
let d = new Date ()
usa.innerHTML = d.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
}).split(", ")[1]
pak.innerHTML = d.toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
}).split(", ")[1]
uk.innerHTML = d.toLocaleString("en-US", {
    timeZone: "Europe/London",
}).split(", ")[1]
}
let alarmHour = alarm.value.split(":")[0]
let alarmMinute = alarm.value.split(":")[1]




setInterval(updateTime(), 1000)