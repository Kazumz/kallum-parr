import * as React from "react"
import {
  useStaticQuery,
  graphql
} from "gatsby"
import Img from "gatsby-image"

const KallumParr: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kallum-parr.png" }) {
        childImageSharp {
          fluid(maxWidth: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default KallumParr
