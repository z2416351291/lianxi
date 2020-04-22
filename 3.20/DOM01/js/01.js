(function() {
	var divClock = document.getElementById('clock');
	// console.log(divClock)
	function formatTime(num) {
		return (num >= 10 ? "" : "0") + num;
	}

	function showTime() {
		var date = new Date();
		divClock.innerHTML = formatTime(date.getHours()) + ":" + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds())
	}
	setInterval(showTime, 1000);
}())
