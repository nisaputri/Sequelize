async function populateRestaurants() {
    const diningRequest = await fetch('/api/dining/');
    const diningData = await diningRequest.json();

    const diningList = [];
    diningList.push(diningData.data);

    const cleanedDiningList = diningList[0];
    const targetBox = document.querySelector('#targetBox');

    cleanedDiningList.forEach((index) => {
        const diningId = index.hall_id;
        const diningName = index.hall_name;
        const diningLocation = index.hall_address;

        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
        <td>${diningId}</td> 
        <td>${diningName}</td> 
        <td>${diningLocation}</td>`;

    targetBox.append(appendItem);
    });
}

async function windowActions() {
    populateRestaurants();
}
window.onload = windowActions;


