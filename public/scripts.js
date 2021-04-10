function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

async function generateStackBar() {
    const wholeMealRequest = await fetch('/api/wholeMeals/');
    const wholeMealData = await wholeMealRequest.json();

    const mealArray = [1,2,3,4,5,6,7,8,9,10];
    const selected = mealArray.map(element => {
        const random = getRandomIntInclusive(0, wholeMealData.data.length -1);
        return wholeMealData.data[random];
        console.log("fired")
    }) 

    function createName(mealArray) {
      return String(selected[mealArray][0].meal_name);
    }
  
    function createCal(mealArray) {
      return selected[mealArray][1].calories;
    }
  
    function createSize(mealArray) {
      return selected[mealArray][1].serving_size;
    }
  
    function createChol(mealArray) {
      return selected[mealArray][1].cholesterol;
    }
  
    function createSod(mealArray) {
      return selected[mealArray][1].sodium;
    }
  
    function createPro(mealArray) {
      return selected[mealArray][1].protein;
    }
  
    function createFat(mealArray){
      return selected[mealArray][1].fat;
    }
  
    const chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Dining Hall Meal Statistics for the University of Maryland"
        },
      axisX: {
        title: "Meals"
      },
      axisY: {
        title: "Macro Information"
      },
      toolTip: {
        shared: true
      },
      legend:{
        cursor: "pointer",
        itemclick: toggleDataSeries
      },
      data: [{
        type: "stackedBar",
        name: "Calories",
        color: "red",
        showInLegend: "true",
        dataPoints: [
          { label:createName(0), y: createCal(0) },
          { label:createName(1), y: createCal(1) },
          { label:createName(2), y: createCal(2) },
          { label:createName(3), y: createCal(3) },
          { label:createName(4), y: createCal(4) },
          { label:createName(5), y: createCal(5) },
          { label:createName(6), y: createCal(6) },
          { label:createName(7), y: createCal(7) },
          { label:createName(8), y: createCal(8) },
          { label:createName(9), y: createCal(9) },
        ]
      },
      {
        type: "stackedBar",
        name: "Serving Size",
        color: "lime",
        showInLegend: "true",
        dataPoints: [
          { label:createName(0), y: createSize(0) },
          { label:createName(1), y: createSize(1) },
          { label:createName(2), y: createSize(2) },
          { label:createName(3), y: createSize(3) },
          { label:createName(4), y: createSize(4) },
          { label:createName(5), y: createSize(5) },
          { label:createName(6), y: createSize(6) },
          { label:createName(7), y: createSize(7) },
          { label:createName(8), y: createSize(8) },
          { label:createName(9), y: createSize(9) },
        ]
      },
      {
        type: "stackedBar",
        name: "Cholesterol",
        color: "blue",
        showInLegend: "true",
        dataPoints: [
          { label:createName(0), y: createChol(0) },
          { label:createName(1), y: createChol(1) },
          { label:createName(2), y: createChol(2) },
          { label:createName(3), y: createChol(3) },
          { label:createName(4), y: createChol(4) },
          { label:createName(5), y: createChol(5) },
          { label:createName(6), y: createChol(6) },
          { label:createName(7), y: createChol(7) },
          { label:createName(8), y: createChol(8) },
          { label:createName(9), y: createChol(9) },
        ]
      },
      {
        type: "stackedBar",
        name: "Sodium",
        color: "yellow",
        showInLegend: "true",
        dataPoints: [
          { label:createName(0), y: createSod(0) },
          { label:createName(1), y: createSod(1) },
          { label:createName(2), y: createSod(2) },
          { label:createName(3), y: createSod(3) },
          { label:createName(4), y: createSod(4) },
          { label:createName(5), y: createSod(5) },
          { label:createName(6), y: createSod(6) },
          { label:createName(7), y: createSod(7) },
          { label:createName(8), y: createSod(8) },
          { label:createName(9), y: createSod(9) },
        ]
      },
      {
        type: "stackedBar",
        name: "Protein",
        color: "silver",
        showInLegend: "true",
        dataPoints: [
          { label:createName(0), y: createPro(0) },
          { label:createName(1), y: createPro(1) },
          { label:createName(2), y: createPro(2) },
          { label:createName(3), y: createPro(3) },
          { label:createName(4), y: createPro(4) },
          { label:createName(5), y: createPro(5) },
          { label:createName(6), y: createPro(6) },
          { label:createName(7), y: createPro(7) },
          { label:createName(8), y: createPro(8) },
          { label:createName(9), y: createPro(9) },
        ]
      },
      {
        type: "stackedBar",
        name: "Fat",
        color: "cyan",
        showInLegend: "true",
        dataPoints: [
          { label:createName(0), y: createFat(0) },
          { label:createName(1), y: createFat(1) },
          { label:createName(2), y: createFat(2) },
          { label:createName(3), y: createFat(3) },
          { label:createName(4), y: createFat(4) },
          { label:createName(5), y: createFat(5) },
          { label:createName(6), y: createFat(6) },
          { label:createName(7), y: createFat(7) },
          { label:createName(8), y: createFat(8) },
          { label:createName(9), y: createFat(9) },
        ]
      }]
    });
    chart.render();

function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}
}

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
    generateStackBar();
    populateRestaurants();
}
window.onload = windowActions;


