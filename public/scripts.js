async function populateRestaurants() {
    const diningRequest = await fetch('/api/dining/');
    const diningData = await diningRequest.json();

    const dinningList = [];
    dinningList.push(diningData.data);

    diningData.data.forEach((restaurant) => {
        const name = restaurant.hall_name;
        const location = restaurant.hall_address;

        const appendItem = document.createElement('tr');


        appendItem.classList.add('tile', 'has-text-centered', 'is-parent', 'us-3');
        appendItem.innerHTML = 
        `<td>${id}</td> <td>${name}</td> <td>${location}</td>`;

    targetBox.append(appendItem);
    });
}

async function getMeals() {
    const diningRequest = await fetch("/api/meals");
    const diningData = await diningRequest.json();
    return diningData;
}

function setBasicData() {
    localStorage.setItem("myCat", "Tom");
}

function setComplexData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

function getBasicData() {
    return localStorage.getItem('myCat');
}

async function windowActions() {
    console.log('loaded window');
    const meals = await getMeals();
    console.table(meals);


    //setBasicData();
    //const cat = getBasicData();

    setComplexData(meals);
    const storedMeals = localStorage.getItem('data');
    const storedMealData = JSON.parse(storedMeals)
    console.log(storedMeals);
}


window.onload = windowActions;


