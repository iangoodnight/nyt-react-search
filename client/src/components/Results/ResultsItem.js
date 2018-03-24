import React from "react";

export const ResultsItem = props => (
	<li className="collection-item dismissable">
		<div>
			<a href={props.children.url}>{props.children.title}</a>
			<a href={props.children.url} className="secondary-content">
				<i className="material-icons">send</i>
			</a>
		</div>
	</li>
);