import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct }, location }) => (
  <Layout>
    <div
      style={{
        marginLeft: "0 auto",
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* product Info */}
      <h2>
        {contentfulProduct.name} -{" "}
        <span style={{ color: "#aaa", fontSize: "0.75em" }}>
          Ajouté le {contentfulProduct.createdAt}
        </span>
      </h2>
      <h4>${contentfulProduct.price}</h4>
      <p>{contentfulProduct.description}</p>
      <button
        style={{
          backgroundColor: "darkorange",
          color: "white",
          padding: "0.3em",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        className="snipcart-add-item"
        data-item-id={contentfulProduct.slug}
        data-item-price={contentfulProduct.price}
        data-item-image={contentfulProduct.image.file.url}
        data-item-name={contentfulProduct.name}
        data-item-url={location.pathname}
      >
        Ajouter au panier
      </button>
      <Img
        fluid={contentfulProduct.image.fluid}
        style={{ margin: "0 auto", maxWidth: 600 }}
      />
    </div>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      slug
      description
      createdAt(formatString: "ddd D MMMM YYYY - H:mm:ss", locale: "fr")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

export default ProductTemplate
