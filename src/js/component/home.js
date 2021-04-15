import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./secondsCounter";

//include images into your bundle
var seconds = 0;
var rendering;
var isCountDown = false;
var isCounting = false;
var changer;
let title = "Seconds Counter";

function change() {
	isCountDown = !isCountDown;
	setTitleCard();
}

function reset() {
	if (isCountDown) {
		seconds = 3000;
	} else {
		seconds = 0;
	}
}

function stop() {
	clearInterval(changer);
	isCounting = false;
}

function resume() {
	if (!isCounting) {
		isCounting = true;
	} else {
		return;
	}
	changer = setInterval(() => {
		ReactDOM.render(
			<SecondsCounter seconds={seconds} title={title} />,
			document.querySelector("#counter")
		);
		if (isCountDown) {
			seconds -= 1;
		} else {
			seconds += 1;
		}
	}, 1000);
}

function setSeconds() {
	//asigno los segundos
}

function setTitleCard() {
	if (isCountDown) {
		title = "Countdown";
	} else {
		title = "Seconds Counter";
	}
	// buttonTitle = (
	// 	<button
	// 		className="text-center btn {{  (isCountDown) ? btn-primary : btn-success }}"
	// 		onClick={change}>
	// 		{title}
	// 	</button>
	// );
	// ReactDOM.render(buttonTitle, document.querySelector("#changerButton"));
}

resume();
//ReactDOM.render(buttonTitle, document.querySelector("#changerButton"));
//create your first component
export function Home() {
	//console.log(initMoment);
	return (
		<div className="text-center my-3 mx-auto ">
			<div className="d-flex justify-content-around text-center my-3 mx-auto ">
				<button
					className="text-center btn btn-primary"
					onClick={change}>
					Seconds Counter / Count Down
				</button>
			</div>
			<div id="counter"></div>
			<div className="d-flex justify-content-around text-center my-3 mx-auto ">
				<button className="text-center btn btn-warning" onClick={reset}>
					Reset
				</button>
				<button className="text-center btn btn-danger" onClick={stop}>
					Stop
				</button>
				<button
					className="text-center btn btn-success"
					onClick={resume}>
					Resume
				</button>
			</div>
		</div>
	);
}
