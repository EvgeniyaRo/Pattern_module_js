var counter = (function () {
	var _number;

	function setValue(x) {
	//Number.isInteger(x) либо (x % 1 == 0)
		if (x % 1 == 0){
			_number = x;
		} else {
			console.log("Неверное значение.");
		}
		
	}


	function increaseCounter() {
		_number++;
	}

	function decreaseCounter() {
		_number--;
	}

	function printCounter() {
		console.log(_number);
	}

	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}

}())

counter.setValue(6.1);
counter.increaseCounter();
counter.decreaseCounter();
counter.printCounter();