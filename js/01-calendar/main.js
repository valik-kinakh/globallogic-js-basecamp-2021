const date = new Date();
const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

    let days = "";
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
};

document.getElementById("next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
    redDays();
    chosenElem();
});

document.getElementById("prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
    redDays();
    chosenElem();
});

function chosenElem() {
    let selectedElem;

    document.getElementsByClassName("days")[0].onclick = function (event) {
        let target = event.target;
        highlight(target);
    };

    function highlight(elem) {
        if (selectedElem) {
            selectedElem.style.backgroundColor = "white";
            selectedElem.style.color = "black";
        }
        selectedElem = elem;
        selectedElem.style.backgroundColor = "blue";
        selectedElem.style.color = "white";

    }
}

chosenElem();

function redDays() {
    const allDivDays = document.getElementsByClassName("days")[0];
    allDivDays.children[0].style.color = "red";
    for (let i = 1; i <= allDivDays.children.length; i++) {
        if (i % 7 == 0 && allDivDays.children[i].className != "today") {
            allDivDays.children[i].style.color = "red";
        }
    }
}

renderCalendar();
redDays();