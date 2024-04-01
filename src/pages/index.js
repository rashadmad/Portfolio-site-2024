import * as React from "react"
import Banner from './Banner'
//import Data from './data/data.json'

import Seo from "../components/seo"


const IndexPage = () => (
  <Banner firstItem="Grand re-opening!" secondItem="Open to software engineering opportunities" buttonText="Get in touch"></Banner>
)

export const Head = () => <Seo title="Home" />

export default IndexPage