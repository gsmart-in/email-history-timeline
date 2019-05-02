import React from "react"

export default class Person extends React.Component
{
	constructor(props) 
	{
    	super(props);
    	this.state =
    	{
    		showMoreInfo:false
    	};
	}
	toggleMoreInfo()
	{
		this.setState((state)=>({showMoreInfo:!state.showMoreInfo}));
	}
	render()
	{
	    return (
				<div class="card" style={{ maxWidth:'236px'}}>
				<div class="card-content">
				<div class="media">
				    <div class="media-left">
				    	{this.props.person.photo &&
				        <figure class="image is-48x48" style={{maxWidth:'48px', overflow:'hidden'}}>
				        	<a href={this.props.person.photo} rel="noopener noreferrer" target="_blank">
				            <img src={this.props.person.photo} 
				            alt={'photo of '+this.props.person.name }
				            title={this.props.person.name}/>
				            </a>
				        </figure>
				    	}
				    </div>
				    <div class="media-content">
				        <h4 class="title is-5"><a  href={this.props.person.bio_url} rel="noopener noreferrer" target="_blank" >{this.props.person.name}</a></h4>
				    </div>
				</div>
				<div class="content is-small">
					{this.props.person.bio}
					<a class="is-size-6" href={this.props.person.bio_url} rel="noopener noreferrer" target="_blank" >&rarr;</a>
					<div><a href="javascript:void(0);" onClick={this.toggleMoreInfo.bind(this)}>more info</a></div>
					{this.state.showMoreInfo &&
					<ul>
					{this.props.person.more_info.map(link => (
						<li>
						<a class="is_small" href={link.url}>{link.title}</a>
						</li>
					))}
					</ul>
					}
				</div>
				</div>
				
				</div>
	    	)
	}
}