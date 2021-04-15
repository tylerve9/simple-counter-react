import React from "react";
import PropTypes from "prop-types";

function SecondsCounter(props) {
	return (
		<div className="text-center mt-5">
			<div className="card shadow">
				<div className="card-header bg-primary text-white font-weight-bolder">
					{props.title}
				</div>
				<div className="card-body">
					<h3 className="card-title">
						Seconds <span> {props.seconds} </span>
					</h3>
					<p className="card-text"></p>
					{/* <a href="#" className="btn btn-primary">
						Go somewhere
					</a> */}
				</div>
			</div>
		</div>
	);
}

SecondsCounter.defaultProps = {
	seconds: 0,
	title: ""
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number,
	title: PropTypes.string
};

export default SecondsCounter;
