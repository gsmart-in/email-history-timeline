import React from "react"
import { Helmet } from "react-helmet"

export default class HeaderMeta extends React.Component
{
	render()
	{
	    return (
		<Helmet>
		      <meta charSet="utf-8" />
		      <title>Email History and Timeline</title>
		      <meta name="description" content="The timeline and history of Email from 1971 to present. With complete reference links, people and all the details"/>
		      <link rel='shortcut icon' type='image/x-icon' href='https://gsmart.in/favicon.ico' />
		      <link rel="canonical" href="https://eh.gsmart.in" />
		</Helmet>
		)
	}
}