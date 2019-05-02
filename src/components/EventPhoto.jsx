import React from "react";
import renderHTML from 'react-render-html';

export default class EventPhoto extends React.Component
{
	render()
	{
	    return (
			<div class="card" style={{ maxWidth:'256px'}}>
			  <div class="card-image">
			    <figure class="image" style={{maxWidth:'256px', maxHeight:'256px',overflow:'hidden'}}>
			      <a href={this.props.photo.url} rel="noopener noreferrer" target="_blank"><img src={this.props.photo.url} alt="photo" /></a>
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="content is-small">
			      {renderHTML(this.props.photo.description)}
			      <div><a target="_blank" href={this.props.photo.source}>source</a></div>
			    </div>
			  </div>
			</div>
	    	)
	}
}