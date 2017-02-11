
let counter = 0

function displayWin() {
		document.getElementById("win").style.display = "inline";
		document.getElementById("button1").style.display = "inline";
}
function displayLose() {
		document.getElementById("lose").style.display = "inline";
		document.getElementById("button1").style.display = "inline";
}
function playAgain() {
		document.getElementById("lose").style.display = "none";
		document.getElementById("win").style.display = "none";
		document.getElementById("button1").style.display = "none";
		document.getElementById("diceButton").disabled = false;
}
function diceRoll() {
    let randNum1 = Math.floor(Math.random() * 6)+1;
    document.getElementById("demo1").textContent = randNum1;
    let randNum2 = Math.floor(Math.random() * 6)+1;
    document.getElementById("demo2").textContent = randNum2;
    counter += 1
    document.getElementById("totguesses").textContent = counter

		if (randNum1 === 6 && randNum2 === 6 ) {
			document.getElementById("diceButton").disabled = true;
			setTimeout(function() {
				displayWin();
				document.getElementById("demo1").textContent = "0";
				document.getElementById("demo2").textContent = "0";
				document.getElementById("totguesses").textContent = "0";
				counter = 0;
			},1000);
    }

		if (counter === 36) {
			document.getElementById("diceButton").disabled = true;
			setTimeout(function() {
				displayLose();
				document.getElementById("demo1").textContent = "0";
				document.getElementById("demo2").textContent = "0";
				document.getElementById("totguesses").textContent = "0";
				counter = 0;
			},1000);
    }
}
