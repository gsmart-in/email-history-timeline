import React from "react"
import Layout from "../components/layout"
import HistoryEvent from "../components/HistoryEvent"
import Intro from "../partials/intro"
import End from "../partials/end"
import EndLinks from "../partials/EndLinks"
import { graphql } from "gatsby"

const IndexPage =  ({data}) => (
		<Layout>
    <div>
    <span class="tag is-warning is-medium">Draft</span> 
    </div>
		<h1 class="title">History and TimeLine of Email</h1>
    <Intro/>

		{data.allEmailHistoryHJson.edges.map(({ node }) => (

			<HistoryEvent evt={node} ></HistoryEvent>
		))}

    <End/>
    <EndLinks/>
		</Layout>
);

export default IndexPage;

export const query = graphql`
query {
  allEmailHistoryHJson
  {
    edges
    {
      node
      {
        year
        title
        description
        people {
          name
          photo
          bio
          bio_url
          more_info{
            title
            url
          }
        }
        related{
          title
          url
        }
      }
    }
  }

}
`
