function addDate(){

    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    var hour =date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    var apm = "AM";
    hour = checkTime(hour);
    mins = checkTime(mins);
    seconds = checkTime(seconds);
    apm = checkAPM(hour);
    hour = checkHour(hour);
    date = mm + "/" + dd + "/" + yyyy +" " + hour + ":"+ mins +":"+ seconds+ " " +apm;
    document.getElementById("main").innerText=date;
    //refresh every 1000ms
    setTimeout(addDate, 1000);
 
}
function checkTime(i){
    if(i < 10){
        i = "0"+i;
    }
    return i;
}
function checkAPM(hour){
    if (hour > 12){
        apm = "PM";
    }
    return apm;
}
function checkHour(hour){
    if(hour > 12){
        hour = hour %12;
    }
    return hour;
}