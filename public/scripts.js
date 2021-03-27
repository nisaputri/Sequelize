async function populateRestaurants() {
    const diningRequest = await fetch('/api/meals');
    const diningData = await diningRequest.json();

    diningData.data.forEach((restaurant) => {
        const name = restaurant.hall_name;
        const location = restaurant.hall_address;

        const appendItem = document.createElement('tr');


        appendItem.classList.add('tile', 'has-text-centered', 'is-parent', 'us-3');
        appendItem.innerHTML = 
        `
        <article class="tile is-child box has-background-link-dark ">
        <td>name</td>
        <td>location</td>`


        /* `
        <article class="tile is-child box has-background-link-dark ">
        <span class="subtitle has-text-light has-text-weight-bold>
            ${restaurant.hall_name}</span>
        <br />
        <span class="has-text-light">
         ${restaurant.hall_address.split(',')[0]}
         </span>
         <span class="has-text-light">
         ${restaurant.hall_address.split(',')[1]}
         </span>
         </article>`;
         */

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


