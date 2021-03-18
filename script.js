var start = document.querySelector("#start");
var currentNos = document.querySelectorAll(".current");
var nextNos = document.querySelectorAll(".next");

var c = 0;
var interval;


function startCounter() {
    var count = document.getElementsByName("counter")[0].value;
    if (isNaN(count)) {
        alert("Enter valid number");
        clearInterval(interval);
        return;
    }
    else if (count < 1 || count > 99999) {
        alert("Range out of Bound");
        clearInterval(interval);
        return;
    }
    resetCounter(currentNos, nextNos);
    clearInterval(interval);


    interval = setInterval(function () {
        
        increaseCount(currentNos, nextNos, 0, count);
        c++;
    }, 1000);
}

function resetCounter(current, next) {
    c = 0;
    for (let i = 0; i < current.length; i++) {
        next[i].innerText = 1;
        current[i].innerText = 0;
    }
}


function increaseCount(currentNos, nextNos, i, count) {
    if (c == count) {
        clearInterval(interval);
        alert("Counter has stopped");
        return;
    }
    let current = currentNos[i];
    let next = nextNos[i];

    if (current.innerText == 9) {
        increaseCount(currentNos, nextNos, i + 1, count);
    }
    next.classList.add('animate');

    setTimeout(function () {
        current.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
        if (next.innerText > 9) {
            next.innerText = 0;
        }
    }, 500);
}

start.addEventListener("click", startCounter);