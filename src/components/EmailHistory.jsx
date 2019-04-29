import React from "react"
import HistoryEvent from "./HistoryEvent"

export default class EmailHistory extends React.Component
{
	render()
	{
	    return (
		<div>
		{this.props.evts.map(({ evt }) => (
			<HistoryEvent evt={evt} ></HistoryEvent>
		))}
		</div>
	    );
	}
}

