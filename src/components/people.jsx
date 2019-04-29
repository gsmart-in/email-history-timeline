import React from "react"
import Person from "./person"

export default class People extends React.Component
{
	render()
	{
	    return (
            <>
        	{this.props.people.map(one => (
            <div class="column is-4" >
                <Person person={one}></Person>
            </div>
            ))}
            </>
          )
	}
}
