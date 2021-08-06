const addButton = document.getElementById("addSpan");
const userBlock = document.getElementById("right");
const messageBlock = document.getElementById('content');
addButton.addEventListener('click', addUser);
let usersArray = [], count = 0;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function addUser() {
    fetch('https://randomuser.me/api/?result=1')
        .then(res => res.json())
        .then(obj => obj.results)
        .then(results => results[0])
        .then(user => {
                userBlock.innerHTML += `
            <div class="users">
            <img src=${user.picture.large} class="images">
            <ul class="info">
              <li style="color: green; font-weight: bold">${user.name.first} ${user.name.last}</p>
              <li>City: ${user.location.city}</li>
              <li>Phone: ${user.phone}</li>
              </ul>
            </div>
           `
                usersArray.push(user);
            }
        )
        .catch(error => {
            console.log(error);
        })
}

function startChat() {
    for (let i = 0; i < usersArray.length; i++) {

        setInterval(() => fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1',
            {
                'type': 'meat-and-filler',
                'start-with-lorem': '2',
                'paras': '2'
            })
            .then(res => res.json())
            .then(res => {
                let div = document.createElement('div');
                div.className = 'messages';
                div.innerHTML = `<img src=${usersArray[i].picture.large} class="mess-image" />
            <ul class="mess-ul">
            <li style="font-weight: bold; font-size: large">${usersArray[i].name.first} ${usersArray[i].name.last}(${usersArray[i].registered.age})</li>
            <li>${res}</li>
            </ul>
           `
                messageBlock.appendChild(div);
                ++count;
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            }), getRandomArbitrary(5000, 30000));
    }

}

setInterval(startChat, 30000);