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



// propertiesList.appendChild(locationTemp);
// propertiesList.appendChild(locationCity);
// propertiesList.appendChild(locationState);
// weatherWidget.appendChild(propertiesList);
// weatherWidget.appendChild(weatherImg);
// const headerBar = document.getElementById('start');
// headerBar.appendChild(weatherWidget);



document.addEventListener('DOMContentLoaded', () => {
    // Target div on the Youtube page
//     const headerBar = document.getElementById('start'); 

//     const weatherWidget = document.createElement('div');
//     const weatherImg = document.createElement('img');
//     const propertiesList = document.createElement('ul');
//         const locationTemp = document.createElement('li');
//         const locationCity = document.createElement('li');
//         const locationState = document.createElement('li');
    
//         weatherWidget.setAttribute('id', 'weatherWidget');
//         locationState.src = '';

//         propertiesList.appendChild(locationTemp);
//         propertiesList.appendChild(locationCity);
//         propertiesList.appendChild(locationState);
//     weatherWidget.appendChild(propertiesList);
//     weatherWidget.appendChild(weatherImg);
//     console.log(weatherWidget);
// headerBar.appendChild(weatherWidget);

    document.getElementById("submit").addEventListener("click", function () {
        
        if (!document.getElementById('zipCode').value) alert('Enter a zip!')

        const zipCode = document.getElementById('zipCode').value;

        fetch(`http://api.weatherapi.com/v1/current.json?key=e9049b8544804eaa98b15213232601&q=${zipCode}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                

                // locationCity.innerText = data.location.name;
                // locationState.innerText = data.location.region;
                // temp.innerText = data.current['temp_f'];
                // weatherImg.src = data.current.condition.icon;

                let city = data.location.name;
                let state = data.location.region;
                let temp = data.current['temp_f'];
                let img = data.current.condition.icon;                        

                alert(`${city}, ${state}, ${temp}F, ${img}`)
                //generateWeatherWidget(temp, city, state, img);

                
                const locationTemp = document.querySelector('#locationTemp');
                const locationCity = document.querySelector('#locationCity');
                const locationState = document.querySelector('#locationState');
                const weatherImg = document.querySelector('#weatherImg');
                locationTemp.innerText = temp;
                locationCity.innerText = city;
                locationState.innerText = state;
                weatherImg.src = img;


                // // Target div on the Youtube page
                // const headerBar = document.getElementById('start'); 
                                
                                
                // const weatherWidget = document.createElement('div');
                //     const weatherImg = document.createElement('img');
                //     const propertiesList = document.createElement('ul');
                //         const locationTemp = document.createElement('li');
                //         const locationCity = document.createElement('li');
                //         const locationState = document.createElement('li');
                    
                        // weatherWidget.setAttribute('id', 'weatherWidget');
                        // locationTemp.innerText = temp;
                        // locationCity.innerText = city;
                        // locationState.innerText = state;
                        // weatherImg.src = img;
                        
                //         propertiesList.appendChild(locationTemp);
                //         propertiesList.appendChild(locationCity);
                //         propertiesList.appendChild(locationState);
                //     weatherWidget.appendChild(propertiesList);
                //     weatherWidget.appendChild(weatherImg);
                //     console.log(weatherWidget);
                // headerBar.appendChild(weatherWidget);

                
            });
            
    })

});

function generateWeatherWidget (temp = 'temp', city = 'city', state = 'state', img = 'https://www.freeiconspng.com/uploads/cloud-icon-8.png') {
// Target div on the Youtube page
const headerBar = document.getElementById('start'); 
                
                
const weatherWidget = document.createElement('div');
    const weatherImg = document.createElement('img');
    const propertiesList = document.createElement('ul');
        const locationTemp = document.createElement('li');
        const locationCity = document.createElement('li');
        const locationState = document.createElement('li');
    
        weatherWidget.setAttribute('id', 'weatherWidget');
        locationTemp.setAttribute('id', 'locationTemp');
        locationCity.setAttribute('id', 'locationCity');
        locationState.setAttribute('id', 'locationState');
        weatherImg.setAttribute('id', 'weatherImg');

        locationTemp.innerText = temp;
        locationCity.innerText = city;
        locationState.innerText = state;
        weatherImg.src = img;

        propertiesList.appendChild(locationTemp);
        propertiesList.appendChild(locationCity);
        propertiesList.appendChild(locationState);
    weatherWidget.appendChild(propertiesList);
    weatherWidget.appendChild(weatherImg);
    console.log(weatherWidget);
 headerBar.appendChild(weatherWidget);    
}
// // Target div on the Youtube page
// const headerBar = document.getElementById('start'); 
                
                
// const weatherWidget = document.createElement('div');
//     const weatherImg = document.createElement('img');
//     const propertiesList = document.createElement('ul');
//         const locationTemp = document.createElement('li');
//         const locationCity = document.createElement('li');
//         const locationState = document.createElement('li');
    
//         weatherWidget.setAttribute('id', 'weatherWidget');

//         propertiesList.appendChild(locationTemp);
//         propertiesList.appendChild(locationCity);
//         propertiesList.appendChild(locationState);
//     weatherWidget.appendChild(propertiesList);
//     weatherWidget.appendChild(weatherImg);
//     console.log(weatherWidget);
//  headerBar.appendChild(weatherWidget);

generateWeatherWidget();


