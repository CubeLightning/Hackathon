// const headerBar = document.getElementById('start')
// let square = document.createElement('div');

// square.innerText = "I'm a red square";
// square.setAttribute('id', 'square');
// //square.innerText.setAttribute('id', 'squareText');
// //square.style.color = white;
// //square.appendChild(squareImg);
// headerBar.appendChild(square);
//document.body.appendChild(headerBar);

// document.addEventListener('DOMContentLoaded', () => {
//     const weather = document.createElement('div');
//     const zipCode = document.getElementById('zipCode');
    
    
//     fetch(`http://api.weatherapi.com/v1/current.json?key=e9049b8544804eaa98b15213232601&q=91011&aqi=no`)
//     .then(response => response.json())
//     .then(data => {
//         const locationCity = data.location.name;
//         const locationState = data.location.region;
//         const temp = data.current['temp_f'];
//         const icon = data.current.icon;

//         console.log('We are inside the the fetch')
//         // const testImg = document.createElement('img');
//         // testImg.style.background = red;
//         // headerBar.appendChild(testImg);
//     })

//     // const testImg = document.createElement('img')
//     // testImg.style.background = red;
//     // headerBar.appendChild(testImg);

//     // let square = document.createElement('div');
//     // square.className = 'square';
//     // headerBar.appendChild(square);




//     //setTimeout(this.move.bind(this), this.SPEED);
// })




// const headerBar = document.getElementById('start')
// let square = document.createElement('div');
// square.className = 'square';
// headerBar.appendChild(square);

// div id="start"
// class="style-scope ytd-masthead"
// id='start.style-scope.ytd-masthead'

// document.getElementById('submit').addEventListener('click', () => {

//     const zipCode = document.getElementById('zipCode').value;

// })

const weatherWidget = document.createElement('div');
    const propertiesList = document.createElement('ul');
        const locationTemp = document.createElement('li');
        const locationCity = document.createElement('li');
        const locationState = document.createElement('li');
    const weatherImg = document.createElement('img');

// propertiesList.appendChild(locationTemp);
// propertiesList.appendChild(locationCity);
// propertiesList.appendChild(locationState);
// weatherWidget.appendChild(propertiesList);
// weatherWidget.appendChild(weatherImg);
// const headerBar = document.getElementById('start');
// headerBar.appendChild(weatherWidget);

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("submit").addEventListener("click", function () {

        if (!document.getElementById('zipCode').value) alert('Enter a zip!')

        const zipCode = document.getElementById('zipCode').value;

        fetch(`http://api.weatherapi.com/v1/current.json?key=e9049b8544804eaa98b15213232601&q=${zipCode}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                locationCity.innerText = data.location.name;
                locationState.innerText = data.location.region;
                temp.innerText = data.current['temp_f'];
                weatherImg.src = data.current.condition.icon;
            });
    })
});



alert(`${data.location.name}, ${data.location.region}, ${data.current['temp_f']}F, ${data.current.condition.icon}`)

propertiesList.appendChild(locationTemp);
propertiesList.appendChild(locationCity);
propertiesList.appendChild(locationState);
weatherWidget.appendChild(propertiesList);
weatherWidget.appendChild(weatherImg);
const headerBar = document.getElementById('start');
headerBar.appendChild(weatherWidget);