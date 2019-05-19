import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery, Link } from "gatsby"

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <h1>Bienvenue sur la page 3</h1>
      <h3>Données relatives aux images</h3>
      <StaticQuery
        query={getImageData}
        render={data => (
          <table>
            <thead>
              <tr>
                <th>Chemin relatif</th>
                <th>Taille</th>
                <th>Type</th>
                <th>Prise de vue</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.size}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />
      <Link to="/page-2">Aller à la page 2</Link>
    </Layout>
  )
}
