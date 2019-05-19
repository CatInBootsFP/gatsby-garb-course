import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{ color: "rebeccapurple" }}>
      <p
        style={{
          textAlign: "center",
          marginBottom: 0,
          backgroundColor: "white",
        }}
      >
        site de test - vous ne pouvez rien acheter ici! ----- testing site - you
        can't buy anything here!
      </p>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <span>
        <h1 style={{ margin: 0 }}>
          <Link to="/" className="navlink" activeClassName="active">
            {siteTitle}
          </Link>
        </h1>
      </span>
      <Link to="/blog" className="navlink" activeClassName="active">
        Blogue
      </Link>
      <Link to="/products" className="navlink" activeClassName="active">
        Produits
      </Link>
      {/* Shopping Cart Summary */}
      <div
        style={{
          color: "white",
          cursor: "pointer",
        }}
        className="snipcart-summary snipcart-checkout"
      >
        <div>
          <strong>Mon panier</strong>
        </div>
        <div>
          <span
            style={{ fontWeight: "bold" }}
            className="snipcart-total-items"
          />{" "}
          articles au panier
        </div>
        <div>
          Prix total:{" "}
          <span
            style={{ fontWeight: "bold" }}
            className="snipcart-total-price"
          />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
