import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
        alt="Gatsby logo"
        src="../images/icon.png"
				width="100"
				loading="lazy"
      />
    </Layout>
  )
}
export default IndexPage