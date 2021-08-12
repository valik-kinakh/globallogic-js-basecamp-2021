const listOfCars = document.getElementById('carsList');
const hatchBtn = document.getElementById('hatchBtn');
const pickBtn = document.getElementById('pickBtn');
const sportBtn = document.getElementById('sportBtn');
const convertibleBtn = document.getElementById('convertibleBtn');

hatchBtn.onclick = () => getInfo('hatchbacks');
pickBtn.onclick = () => getInfo('pickups');
sportBtn.onclick = () => getInfo('sportscars');
convertibleBtn.onclick = () => getInfo('convertibles');

function getInfo(url) {
    listOfCars.innerHTML = '';
    fetch(`/api/${url}`)
        .then(resp => resp.json())
        .then(cars => {
            let elements = cars.map(car => {
                let li = document.createElement('li');
                li.className = 'carElem'
                li.innerHTML = `Name: ${car.name} <br/>
                 Model: ${car.model} <br/>
                 HP: ${car.hp}
                `;
                return li;
            })
            listOfCars.append(...elements);
        })
        .catch(err => console.error(err))
}

getInfo('hatchbacks');