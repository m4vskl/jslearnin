window.addEventListener('load', calculateTime);

function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var second = date.getSeconds();

    hour = hour % 12;
    hour = hour ? hour : 12;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    document.getElementById('day').innerHTML = dayNames[dayNumber];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('second').innerHTML = second;

    setTimeout(calculateTime, 200);
}
