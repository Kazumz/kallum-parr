import * as React from "react"
import {
  useStaticQuery,
  graphql
} from "gatsby"
import Img from "gatsby-image"

const OrangeBlob: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "orange-blob.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default OrangeBlob
