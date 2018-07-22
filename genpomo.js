function startCounting(time, activeTime){
	setTimeout(stopNotification(time, activeTime), time)
}

function stopNotification(time, activeTime){
	alert("Improve your posture.")
	setTimeout(startCounting(time, activeTime), activeTime)
}

activeTime = 10*1000;
stopTime = 10*1000;

setTimeout(startCounting(stopTime, activeTime), 0)