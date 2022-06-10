
// function to show Calories 
document.getElementById('item').click();

function Show_Calorie() {

	let itemVal = document.getElementById('item').value;
	console.log(itemVal);

	if(itemVal==""){
		itemVal = "banana" ;
	}
	fetch(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${itemVal}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
			"x-rapidapi-key": "26d9176cc6mshc711d4f82da5a07p10e9e5jsna1d165a76c04"
		}
	})
		.then(ApiData => {
			// console.log(ApiData);
			return ApiData.json();
		})
		.then(actualData => {

			// console.log(actualData);
			const mydata = actualData[0];
			// console.log(mydata);
			let calorie_Table = '';
			calorie_Table = `
		<table>
			<tr><th>Component</th><th>Quantity</th></tr>
			<tr><td>Calories</td><td>${mydata.calories}</td></tr>
			<tr><td>Carbohydydrate</td><td>${mydata.carbohydrates_total_g}</td></tr>
			<tr><td>Cholesterol</td><td>${mydata.cholesterol_mg}</td></tr>
			<tr><td>Fiber </td><td>${mydata.fiber_g} </td></tr>
			<tr><td>protein </td><td> ${mydata.protein_g} </td></tr>
			<tr><td>Sugar</td><td>${mydata.sugar_g}</td></tr>
			<tr><td>Pottassium</td><td>${mydata.potassium_mg}</td></tr>
			<tr><td>Sodium</td><td>${mydata.sodium_mg}</td></tr>
			<tr><td>Fat</td><td>${mydata.fat_total_g}</td></tr>
		</table>`;

			document.getElementById('item_to_calorie').innerHTML = calorie_Table;
			// document.getElementById('root2').innerHTML = calorie_Table;
			// console.log(calorie_Table);
		})
		.catch(err => {
			console.error(err);
		});
}

// Daily Calories Requirement under fitness calculator
// change the parameters .

// For activity level :

// "1" : "BMR",
// "2" : "Sedentary: little or no exercise",
// "3" : "Exercise 1-3 times/week",
// "4" : "Exercise 4-5 times/week",
// "5" : "Daily exercise or intense exercise 3-4 times/week",
// "6" : "Intense exercise 6-7 times/week",
// "7" : "Very intense exercise daily, or physical job"
// For goals :

// "maintain" : "maintain weight",
// "mildlose" : "Mild weight loss",
// "weightlose" : "Weight loss",
// "extremelose" : "Extreme weight loss",
// "mildgain" : "Mild weight gain",
// "weightgain" : "Weight gain",
// "extremegain" : "Extreme weight gain"

//Fitness Meter API

function fitness_calory() {

	const feild = document.getElementsByTagName('fieldset');
	// console.log(feild[0]);
	const n = feild[0].getElementsByTagName('input');
	const gender = document.getElementById('gender').value;
	// console.log(n);
	// console.log(n[0].value);
	// console.log(n[1].value);
	// console.log(n[2].value);
	// console.log(n[3].value);
	let activity = "level_" + n[3].value;
	// console.log(activity);	

	fetch(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${n[0].value}&gender=${gender}&height=${n[1].value}&weight=${n[2].value}&activitylevel=${activity}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
			"x-rapidapi-key": "26d9176cc6mshc711d4f82da5a07p10e9e5jsna1d165a76c04"
		}
	})
		.then(ApiData => {
			// console.log(ApiData);
			return ApiData.json();
		})
		.then(actualData => {

			const myData = actualData.data;
			// console.log(myData);
			const select_weight = document.getElementById('selected_weight').value;
			// console.log(myData.goals);
			// console.log(select_weight);
			const reqCalorie = myData.goals[select_weight]['calory'];
			document.getElementById('root2').innerHTML = myData.BMR;
			document.getElementById('fitness_calorie').innerHTML = `<h2> Your BMR value is ${myData.BMR} and You need ${reqCalorie} Calorie Daily to ${select_weight} and for mainting your weight you need ${myData.goals["maintain weight"]}. </h2>`;

			// console.log("Function ends");

		})
		.catch(err => {
			console.error(err);
		});
}


// fat calculator

// fetch("https://fitness-calculator.p.rapidapi.com/bodyfat?age=25&gender=male&weight=70&height=178&neck=50&waist=96&hip=92", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
// 		"x-rapidapi-key": "26d9176cc6mshc711d4f82da5a07p10e9e5jsna1d165a76c04"
// 	}
// })
// .then(response => {
// 	return response.json();
// }).then(actualData => {
// 	console.log(actualData);
// 	console.log(actualData.data);
// 	let myJSON = JSON.stringify(actualData.data);
// 	console.log("myJSON",myJSON);
// 	let myObj = JSON.parse(myJSON);
// 	console.log("myObj",myObj);
// 	document.getElementById('root2').innerHTML = myObj ;
// 	document.getElementById('root3').innerHTML = myJSON ;
// 	// document.getElementById('root3').innerHTML ="saurbah kumar patil and once again saurabh kumar patil " ;
// 	console.log(actualData.request_result);
// })
// .catch(err => {
// 	console.error(err);
// });
