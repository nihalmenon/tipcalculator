function roundNum(num) {
	return Math.round(num * 100) / 100;
}

function calculate() {
	var bill = parseFloat(document.getElementById("bill").value);
	var percentage = parseFloat(document.getElementById("percentage").value) / 100;
	var people = parseFloat(document.getElementById("people").value);
	if(bill < 0 || percentage < 0 || people < 0){
		document.getElementById("tip").textContent = "Must be greater than 0!";
		document.getElementById("total").textContent = "Change number please!";
	}else{
		var calculateTip = (bill * percentage) / people;
		var calculateTotal = (bill * (1 + percentage)) / people;
		calculateTip = roundNum(calculateTip);
		calculateTotal = roundNum(calculateTotal);
		var sup = document.createElement("sup");
		var sup2 = document.createElement("sup");
		sup.innerHTML = "$";
		sup2.innerHTML = "$";
		var supValue = sup.textContent;
		var sup2Value = sup2.textContent;
		var tip = document.getElementById("tip");
		tip.innerHTML = "Tip per person: " + supValue + calculateTip;
		var total = document.getElementById("total");
		total.innerHTML = "Total per person: "+ sup2Value + calculateTotal;
	}
}

function calculate1(event) {
	if (event.which == 13 || event.keyCode == 13) {
		calculate();
	}
}

function main() {
	var billInput = document.getElementById("bill");
	var percentageInput = document.getElementById("percentage");
	var peopleInput = document.getElementById("people");
	billInput.addEventListener('blur', calculate);
	billInput.addEventListener('keypress', calculate1);
	percentageInput.addEventListener('blur', calculate);
	percentageInput.addEventListener('keypress', calculate1);	
	peopleInput.addEventListener('blur', calculate);
	peopleInput.addEventListener('keypress', calculate1);
}

main();
