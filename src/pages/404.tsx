import * as React from "react"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops!" />
    <h1>Oops! What were you looking for?</h1>
  </Layout>
)

export default NotFoundPage;