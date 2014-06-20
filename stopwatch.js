	 var intervalId = false;
	 var timerDiv = document.querySelector('.time');
	 var timerState = "init";
	 var lapWrapper = document.getElementById('lap-wrapper');
	 var count = 0;
	 /*is called when document is clicked*/
	 function startClicked() {
	     console.log(timerState);
	     if (timerState === "init") {
	         return startTimer();
	     }
	     if (timerState === "running") {
	         return stopTimer();
	     }
	 }

	 function resetClicked() {
	     console.log(timerState);
	     if (timerState === "stopped") {
	         return resetTimer();
	     }

	     if (timerState === "running") {
	         return addLap();
	     }
	 }

	 function addLap() {
	     if (count <= 10)
	         lapWrapper.innerHTML += "<br>" + "Lap " + (count + 1).toString() + "  =   " + timerDiv.innerHTML;
	     count += 1

	 }

	 function resetTimer() {
	     // set the content of the .time div
	     timerState = "init";
	     timerDiv.innerHTML = "00:00.00";
	     document.getElementById("start").style.backgroundColor = "#01DF01";
	     document.getElementById("start").innerHTML = "START";
	     lapWrapper.innerHTML = " ";
	     count = 0;
	 }

	 function stopTimer() {
	     timerState = "stopped";
	     clearInterval(intervalId);
	     document.getElementById("reset-lap").innerHTML = "RESET";

	     intervalId = false;
	 }

	  //changes reset to lap while running and stop to start when stopped
	 function startTimer() {
	     timerState = "running";
	     document.getElementById("reset-lap").innerHTML = "LAP";
	     document.getElementById("start").innerHTML = "STOP";
	     document.getElementById("start").style.backgroundColor = "#DF0101";

	     // get the current time
	     var start = moment();

	     // do this 100 times a second

	     var updateTimer = function() {
	         // format the elapsed timespan between now and start
	         var now = moment();
	         var timeString = moment(now - start).format('mm:ss:SS');
	         // set the content of the .time div
	         timerDiv.innerHTML = timeString;
	     }

	     intervalId = setInterval(updateTimer, 10); // 10 miliseconds -> 100 times  a second

	 };

	 function main() {
	     // when document is clicked, call the documentClicked function
	     document.getElementById("start").addEventListener('click', startClicked);

	     /*document.getElementById("stop").addEventListener('click', stopClicked);*/

	     document.getElementById("reset-lap").addEventListener('click', resetClicked);
	 }

	  // call main function when document is loaded
	 document.addEventListener('DOMContentLoaded', main);