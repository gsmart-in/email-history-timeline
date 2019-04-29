import React from "react"
import Layout from "../components/layout"
import HistoryEvent from "../components/HistoryEvent"
import { graphql } from "gatsby"

const IndexPage =  ({data}) => (
		<Layout>
		<h1 class="title">History and TimeLine</h1>
		{data.allEmailHistoryHJson.edges.map(({ node }) => (

			<HistoryEvent evt={node} ></HistoryEvent>
		))}
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
