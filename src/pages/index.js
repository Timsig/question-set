import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Qtext from "../components/q_textinput"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout header="About you">
    <Qtext question="First name" subtext="Sthe else" />
  </Layout>
)

export default IndexPage
