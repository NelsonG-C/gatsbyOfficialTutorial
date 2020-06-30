import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer that is dedicated to
        showing you pictures of pandas eating lots of food
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
