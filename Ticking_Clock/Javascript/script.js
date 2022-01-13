var tickingClock = setInterval(function() {clock();}, 1000);

function clock() {
    var date = new Date()
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}
