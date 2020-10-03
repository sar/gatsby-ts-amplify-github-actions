import * as React from 'react';
import SEO from '../SEO/SEO';
import Layout from "./Layout";

/**
 * AppContainer default resource
 */
class AppContainer extends React.Component<{}> {
  public render() {
    return (
      <>
        <SEO title={'Gatsby.js'}/>
        <Layout>
          {'Placeholder'}
        </Layout>
      </>
    )
  }
}

export default AppContainer;