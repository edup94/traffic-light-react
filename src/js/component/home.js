import React, { useState } from "react";

export function TrafficLight() {
	let redLight = "#F8AE56";
	let yellowLight = "#EEF856";
	let greenLight = "green";

	const [red, setRed] = useState(redLight);
	const [yellow, setYellow] = useState(yellowLight);
	const [green, setGreen] = useState(greenLight);
	const [shadow, setShadow] = useState("");

	const redButton = {
		backgroundColor: red
	};
	const yellowButton = {
		backgroundColor: yellow
	};
	const greenButton = {
		backgroundColor: green
	};

	const setRedLight = () => {
		setRed("red");
		setYellow(yellowLight);
		setGreen(greenLight);
		setShadow("luz1");
	};
	const setYellowLight = () => {
		setYellow("yellow");
		setRed(redLight);
		setGreen(greenLight);
		setShadow("luz2");
	};
	const setGreenLight = () => {
		setGreen("#47FA02");
		setRed(redLight);
		setYellow(yellowLight);
		setShadow("luz3");
	};

	return (
		<div className="traffic bg-dark mt-5">
			<button
				className={shadow + " dot"}
				style={redButton}
				onClick={setRedLight}></button>
			<button
				className={shadow + " dot"}
				style={yellowButton}
				onClick={setYellowLight}></button>
			<button
				className={shadow + " dot"}
				style={greenButton}
				onClick={setGreenLight}></button>
		</div>
	);
}
