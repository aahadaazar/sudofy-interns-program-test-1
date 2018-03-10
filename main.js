var interval;
var counter = 0;
var laparray=[];

function lapinterval(minutes, seconds, milliseconds) {
     this.minutes = minutes;
     this.seconds = seconds;
     this.milliseconds = milliseconds;
 }





document.getElementById("stopbtn").disabled = true;
document.getElementById("rebtn").disabled = true;
document.getElementById("lapbtn").disabled = true;


function reset() {
    document.getElementById("minutes").innerHTML = 00;
    document.getElementById("seconds").innerHTML = 00;
    document.getElementById("milliseconds").innerHTML = 00;
}
function start() {
    interval = setInterval(function () {
        var temp = document.getElementById("milliseconds").innerHTML;
        temp = parseInt(temp);
        temp++;
        document.getElementById("milliseconds").innerHTML = temp;


        document.getElementById("stopbtn").disabled = false;
        document.getElementById("stbtn").disabled = true;
        document.getElementById("lapbtn").disabled = false;


        if (temp == 100) {
            var second = 0;
            document.getElementById("milliseconds").innerHTML = "00";

            var temp2 = document.getElementById("seconds").innerHTML;
            temp2 = parseInt(temp2);
            temp2++;
            document.getElementById("seconds").innerHTML = temp2;

            if (temp2 == 59) {
                document.getElementById("seconds").innerHTML = "00";
                var temp3 = document.getElementById("minutes").innerHTML;
                temp3 = parseInt(temp3);
                temp3++;
                document.getElementById("minutes").innerHTML = temp3;
            }
        }
    }, 10);
}


function stop() {
    clearInterval(interval);
    document.getElementById("stbtn").disabled = false;
    document.getElementById("rebtn").disabled = false;
}



function reset() {
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";

    document.getElementById("stopbtn").disabled = true;
    document.getElementById("rebtn").disabled = true;
    document.getElementById("lapbtn").disabled = true;

}


function lap() {
    counter++;
    var lap = document.createElement('div');
    lap.className = "lapchart";
    lap.textContent = "Lap " + counter + ":-" + document.getElementById("minutes").innerHTML + ":" + document.getElementById("seconds").innerHTML + ":" + document.getElementById("milliseconds").innerHTML;
    document.getElementById("maincontainer").appendChild(lap);

    var min = document.getElementById("minutes").innerHTML;
    var sec = document.getElementById("seconds").innerHTML;
    var ms = document.getElementById("milliseconds").innerHTML;


    var lappush=new lapinterval(min,sec,ms);

    var tempstorage=JSON.parse(localStorage.getItem('laps'))

    if(tempstorage===null){
        laparray.push(lappush);
        localStorage.setItem('laps',JSON.stringify(laparray));
    }
    else{
        tempstorage.push(lappush);
        localStorage.setItem('laps',JSON.stringify(tempstorage));
    }


}