import React from "react"
import Layout from "../components/layout"
import HistoryEvent from "../components/HistoryEvent"
import Intro from "../partials/intro"
import End from "../partials/end"
import EndLinks from "../partials/EndLinks"
import { graphql } from "gatsby"
import HeaderMeta from "../partials/HeaderMeta"

const IndexPage =  ({data}) => (
		<Layout>
    <HeaderMeta/>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">History and Timeline of Email</h1>
        </div>
      </div>
    </section>
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
          photo_source
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
        photos{
          url
          description
          source
        }
      }
    }
  }

}
`
