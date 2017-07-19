

let button = document.getElementById('grow-btn');
button.addEventListener('click', tree);

function tree() {
	
	let treeParams = { 
	height: document.getElementById('height-input').value,
	symbol: document.getElementById('symbol').value
	}
	let treeHeight = treeParams.height;
	let symbolChoice = treeParams.symbol;
	let symbolNumber = 1;
	let newTree = [];
	let emptySpace = " ";
	let amountOfSpaces = treeHeight;

	for (let i = 0; i < treeHeight; i++) {
		newTree.push(emptySpace.repeat(amountOfSpaces) + symbolChoice.repeat(symbolNumber));
		amountOfSpaces--;
		symbolNumber++;
		symbolNumber++;
		console.log(newTree[i]);
	}
}

function pressEnterKey(selectedField) {

	document.querySelector(selectedField).addEventListener('keypress', function (e) {
	    let key = e.which || e.keyCode;
	    if (key === 13) { 
	        if (document.getElementById('height-input').value !== "" && document.getElementById('symbol').value	 !== "") {
	        	tree();
	        } else {
	        	alert("Both fields most have a value!");
	        }
    	}


	});	
}

pressEnterKey("#height-input");
pressEnterKey("#symbol");


	

	



