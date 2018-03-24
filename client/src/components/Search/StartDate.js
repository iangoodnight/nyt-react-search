import React from "react";

export const StartDate = props => (
	<div className="row">
		<div className="input-field col s12">
	    <input className="validate" {...props} />
	    <label htmlFor="search_term">Starting From />
	  </div>
	</div>
);