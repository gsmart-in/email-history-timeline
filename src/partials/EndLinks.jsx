import React from "react"


export default class EndLinks extends React.Component
{
	render()
	{
	    return (
	    <footer class="footer" style={{marginTop:'3rem'}}>
		<div class="columns"  >
		
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
			<a href="https://github.com/gsmart-in/email-history-timeline">Contribute @Github</a>.
			</p>
			</div>
			<div class="level-item">
				<a href="https://github.com/gsmart-in/email-history-timeline/issues/new"
				>Report issues</a>
			</div>
			</nav>
		</div>
		</div>
		
		</footer>
	    );
	}
}