import React from "react"
import Person from "./person"

export default class People extends React.Component
{
	render()
	{
	    return (
        	<div class="columns is-multiline">
            <div class="column is-1"></div>
            {this.props.people.map(one => (
            <div class="column is-4" >
                <Person person={one}></Person>
            </div>
            ))}
            </div>
	    )
	}
}
