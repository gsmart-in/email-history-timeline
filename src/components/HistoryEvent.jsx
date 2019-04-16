import React from "react"
import People from "./people"

export default class HistoryEvent extends React.Component
{
	get paragraphs()
	{
		return this.props.evt.description.split("\n").filter(Boolean);
	}

	render()
	{
	    return (
	    	<div>
			<div class="columns is-mobile">
			    <div class="column is-2-mobile is-1-tablet">
			        <h2 class="subtitle">{this.props.evt.year}</h2>
			    </div>
			    <div class="column">
			        <h2 class="title">{this.props.evt.title}</h2>
			    </div>
			</div>
			<div class="columns">
			    <div class="column is-offset-1">
			        <div class="columns is-multiline">
			        {this.paragraphs.map(col_text => (
			        <div class="column is-full-mobile is-one-third-tablet" >
			         {col_text}   
			        </div>
			        ))}
			        </div>
			    </div>
			</div>
			{this.props.evt.people &&
				<People people={this.props.evt.people}></People>
			}
			
			</div>
	    )
	}
}
