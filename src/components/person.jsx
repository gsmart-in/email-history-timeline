import React from "react"

export default class Person extends React.Component
{
	render()
	{
	    return (
				<div class="card" style={{ maxWidth:'220px'}}>
				<div class="card-content">
				<div class="media">
				    <div class="media-left">
				        <figure class="image is-48x48" style={{maxWidth:'48px', overflow:'hidden'}}>
				            <img src={this.props.person.photo} />
				        </figure>
				    </div>
				    <div class="media-content">
				        <h4 class="title is-5">{this.props.person.name}</h4>
				    </div>
				</div>
				<div class="content is-small">
					{this.props.person.bio}
				</div>
				</div>
				</div>
	    	)
	}
}