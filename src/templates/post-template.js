import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const Capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default ({ data: post }) => (
  <Layout>
    <Link to="/blog">Retour aux articles</Link>
    <br />
    <h2 style={{ marginTop: "15px" }}>
      {post.markdownRemark.frontmatter.title}{" "}
      <span style={{ color: "#999" }}>
        - {Capitalize(post.markdownRemark.frontmatter.date)}
      </span>
    </h2>
    <h4>
      {post.markdownRemark.timeToRead}
      {post.markdownRemark.timeToRead > 1 ? "minutes" : "minute"}
    </h4>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "dddd, D MMMM YYYY", locale: "fr")
      }
    }
  }
`
