const wrapper = document.getElementById("wrapper");
const content = document.getElementById("content");
const dagger = document.getElementById("dagger");
const zero = document.getElementById("zero");
const templateDagger = `<img src="img/dagger.png" alt="dagger" style="margin-top: 20px; width: 60px; height: 60px">`;
const templateZero = `<img src="img/zero.png" alt="zero" style="margin-top: 20px; width: 50px; height: 50px">`

for (let i = 1; i < 10; i++) {
    wrapper.innerHTML += `<div class="cell droppable" index="${i}"></div>`
}

function checkWinner() {
    if (wrapper.children[0].innerHTML === templateDagger && wrapper.children[1].innerHTML === templateDagger && wrapper.children[2].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[3].innerHTML === templateDagger && wrapper.children[4].innerHTML === templateDagger && wrapper.children[5].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[6].innerHTML === templateDagger && wrapper.children[7].innerHTML === templateDagger && wrapper.children[8].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[0].innerHTML === templateDagger && wrapper.children[3].innerHTML === templateDagger && wrapper.children[6].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[3].innerHTML === templateDagger && wrapper.children[4].innerHTML === templateDagger && wrapper.children[5].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[1].innerHTML === templateDagger && wrapper.children[4].innerHTML === templateDagger && wrapper.children[7].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[2].innerHTML === templateDagger && wrapper.children[5].innerHTML === templateDagger && wrapper.children[8].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[0].innerHTML === templateDagger && wrapper.children[4].innerHTML === templateDagger && wrapper.children[8].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[2].innerHTML === templateDagger && wrapper.children[5].innerHTML === templateDagger && wrapper.children[7].innerHTML === templateDagger) {
        alert("X is winner!!!");
        return true;
    } else if (wrapper.children[0].innerHTML === templateZero && wrapper.children[1].innerHTML === templateZero && wrapper.children[2].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[3].innerHTML === templateZero && wrapper.children[4].innerHTML === templateZero && wrapper.children[5].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[6].innerHTML === templateZero && wrapper.children[7].innerHTML === templateZero && wrapper.children[8].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[0].innerHTML === templateZero && wrapper.children[3].innerHTML === templateZero && wrapper.children[6].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[3].innerHTML === templateZero && wrapper.children[4].innerHTML === templateZero && wrapper.children[5].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[1].innerHTML === templateZero && wrapper.children[4].innerHTML === templateZero && wrapper.children[7].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[2].innerHTML === templateZero && wrapper.children[5].innerHTML === templateZero && wrapper.children[8].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[0].innerHTML === templateZero && wrapper.children[4].innerHTML === templateZero && wrapper.children[8].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    } else if (wrapper.children[2].innerHTML === templateZero && wrapper.children[5].innerHTML === templateZero && wrapper.children[7].innerHTML === templateZero) {
        alert("0 is winner!!!");
        return true;
    }


}

function checkDraw() {
    let count = 0;
    for (let i = 0; i < wrapper.children.length; i++) {
        if (wrapper.children[i].firstChild) {
            ++count;
        }
    }
    if (count === 9) {
        alert("It's draw)");
        return true;
    }
}


function dragNDrop(obj) {
    let currentDroppable = null;
    let elemBelow;
    obj.onmousedown = function (event) {
        obj.style.position = 'absolute';
        obj.style.zIndex = 3;
        document.body.append(obj);

        function moveAt(pageX, pageY) {
            obj.style.left = pageX - obj.offsetWidth / 2 + 'px';
            obj.style.top = pageY - obj.offsetHeight / 2 + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
            obj.hidden = true;
            elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            obj.hidden = false;

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.droppable');
            if (currentDroppable !== droppableBelow) {
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    enterDroppable(currentDroppable);
                }
            }
        }

        moveAt(event.pageX, event.pageY);

        document.addEventListener('mousemove', onMouseMove);
        obj.onmouseup = function () {

            if (currentDroppable) {
                leaveDroppable(currentDroppable);
            }
            if (checkWinner()) {
                document.body.removeChild(obj);
                return;
            }
            if (checkDraw()) {
                document.body.removeChild(obj);
                return;
            }
            if (obj.id === "dagger") {
                const newImg = document.createElement("img");
                newImg.src = "img/zero.png";
                newImg.style.marginTop = "20px";
                newImg.style.width = "90px";
                newImg.style.height = "90px";
                newImg.id = "zero";
                document.body.removeChild(obj);
                content.appendChild(newImg);
                dragNDrop(newImg);
            } else {
                const newImg = document.createElement("img");
                newImg.src = "img/dagger.png";
                newImg.style.marginTop = "20px";
                newImg.style.width = "90px";
                newImg.style.height = "90px";
                newImg.id = "dagger";
                document.body.removeChild(obj);
                content.appendChild(newImg);
                dragNDrop(newImg)
            }
            document.removeEventListener('mousemove', onMouseMove);
            obj.onmouseup = null;
        };

    };

    function enterDroppable(elem) {
        elem.style.background = '';
    }

    function leaveDroppable(elem) {
        elem.style.background = '';
        if (!elem.firstChild) {
            if (obj.id === "dagger") {
                elem.innerHTML = templateDagger

            } else {
                elem.innerHTML = templateZero
            }

        }

    }

    obj.ondragstart = function () {
        return false;
    };
}


dragNDrop(dagger);
dragNDrop(zero);


