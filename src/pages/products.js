import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Products = ({ data: { allContentfulProduct } }) => {
  return (
    <Layout>
      {/* Products List */}
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          <h2>Garb Products</h2>
          <Link
            to={`/products/${product.slug}`}
            style={{
              textDecoration: "none",
              color: "#551a8b",
            }}
          >
            <h3>
              {product.name} -{" "}
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  color: "#f60",
                }}
              >
                ${product.price}
              </span>
            </h3>
          </Link>
          <Img style={{ maxWidth: 400 }} fluid={product.image.fluid} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          price
          name
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Products
