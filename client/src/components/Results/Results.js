import React from "react";

export const Results = ({ children }) => {
	return (
		<div className="container">
			<ul className="collection">
				{children}
			</ul>
		</div>
	);
};

