import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`
  console.log(pageContext)
  const Capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <Layout>
      <div>
        <h1 style={{ display: "inlineBlock", borderBottom: "1px solid" }}>
          Blogue Gatsby Garb
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} articles</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              <Link to={`/posts${node.fields.slug}`}>
                {node.frontmatter.title}
              </Link>{" "}
              <span style={{ color: "#ddd" }}>
                - {Capitalize(node.frontmatter.date)}
              </span>
            </h3>
            <p>
              <strong>Extrait:</strong> {node.excerpt}
            </p>
          </div>
        ))}
        {/* Pagination */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: 300,
            margin: "0 auto",
          }}
        >
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Page précéd.
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
              {index + 1}
            </Link>
          ))}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Page suiv.
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "dddd, D MMMM YYYY", locale: "fr")
          }
          excerpt
        }
      }
    }
  }
`
