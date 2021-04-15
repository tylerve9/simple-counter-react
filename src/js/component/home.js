import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./secondsCounter";

//include images into your bundle
var seconds = 0;
const initMoment = Date.now();
var rendering;
let changer = setInterval(() => {
	//let currentMoment = Date.now();

	ReactDOM.render(
		<SecondsCounter seconds={seconds} />,
		document.querySelector("#counter")
	);
	seconds += 1;
	//console.log("initMoment: " + seconds);
	// console.log("currentMoment: " + currentMoment);
	// console.log("seconds: ", seconds);
}, 1000);
//create your first component
export function Home() {
	//console.log(initMoment);
	return <div id="counter"></div>;
}
