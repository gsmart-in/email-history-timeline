import React from "react"


export default class EndLinks extends React.Component
{
	render()
	{
	    return (
		<div class="columns" style={{marginTop:'3rem'}} >
		
		<div class="column">
		<nav class="level">
  		<div class="level-item">
  		<p class="content">
		Created by <a href="https://gsmart.in">GSmart.in</a>. 
		</p>
		</div>
		<div class="level-item">
		<p class="content">
		Made with <a href="https://www.gatsbyjs.com/">GatsbyJS</a>. </p>
		</div>
		<div class="level-item">
		<p class="content">
		Uses <a href="https://bulma.io">Bulma</a>.</p>
		</div>
		<div class="level-item">
		<p class="content">
		This page is open source. 
		<a href="https://github.com/gsmart-in/email-history-timeline">Improve and enhance at Github</a>.
		</p>
		</div>
		</nav>
		</div>
		</div>
	    );
	}
}