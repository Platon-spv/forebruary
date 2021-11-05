//preparation, set gefault values of year and month
var forebrDate = new Date();
var currentYear = forebrDate.getFullYear()
var startYear = currentYear - 50;
var endYear = currentYear + 20;
var lang = "ru"



setSelects(startYear, endYear);

setCurrentDate();

function setSelects(startYear, endYear) {
	for (var i = startYear; i <= endYear; i++) {
		let option = document.createElement("option");
		option.textContent = i;
		option.value = i;
		document.getElementById("forebrYear").appendChild(option);
	}

	var d = new Date();
	for (var i = 0; i < 12; i++) {
		let option = document.createElement("option");
		d.setMonth(i);
		let monthName = d.toLocaleString(lang, {
			month: 'long'
		});
		option.textContent = monthName;
		option.value = i;
		document.getElementById("forebrMonth").appendChild(option);
	}

}


function setCurrentDate() {
	var d = new Date();
	document.getElementById("forebrMonth").selectedIndex = d.getMonth();
	document.getElementById("forebrYear").selectedIndex = d.getFullYear() - startYear;

}