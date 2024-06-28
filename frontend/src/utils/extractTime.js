
function extractTime(dateTime) {
    const date=new Date(dateTime)
    const hour=padZero(date.getHours())
    const minutes=padZero(date.getMinutes())
    return `${hour}:${minutes}`
}
function padZero(number){
    return number.toString().padStart(2,"0");
}

export default extractTime