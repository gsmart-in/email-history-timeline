import React from "react"
import People from "./people"
import EventPhoto from "./EventPhoto"

export default class HistoryEvent extends React.Component
{
	constructor(props) 
	{
    	super(props);
    	this.state =
    	{
    		showMoreInfo:false
    	};
	}	
	get paragraphs()
	{
		return this.props.evt.description.split("\n").filter(Boolean);
	}
	toggleMoreInfo()
	{
		this.setState((state)=>({showMoreInfo:!state.showMoreInfo}));
	}

	render()
	{
	    return (
	    	<div class="event_box">
	    	
			<div class="columns is-mobile">
			    <div class="column is-2-mobile is-1-tablet">
			        <h2 class="year subtitle"><div class="time_dot"></div> {this.props.evt.year}</h2>
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

			        {this.props.evt.photos && this.props.evt.photos.map(photo => (
				        <div class="column is-full-mobile is-one-third-tablet" >
				        <EventPhoto photo={photo} />
				        </div>
			        ))}

					{this.props.evt.people &&
						<People people={this.props.evt.people}></People>
					}
			        </div>
			        <div class="columns">
			        <div class="column is-full">
			        {this.props.evt.related &&
				        <div>
				        <div><a href="javascript:void(0)" onClick={this.toggleMoreInfo.bind(this)}>Related links</a></div>
					        {this.state.showMoreInfo &&
							<ul>
					        {this.props.evt.related && this.props.evt.related.map(link => (
					        	<li>
					        	<a class="is_small" href={link.url}>{link.title}</a>
					        	</li>
					        ))}
					        </ul>
					    	}
				    	</div>
			    	}
			        </div>
			        </div>
			        
			    </div>
			</div>

			</div>
	    )
	}
}
