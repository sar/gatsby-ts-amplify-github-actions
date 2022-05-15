import * as React from 'react';
import Metadata from '../SEO/Metadata';
import SEO from '../SEO/SEO';
import Layout from "./Layout";

/**
 * @class AppContainer default wrapper for nested page components
 */
class AppContainer extends React.Component<{}> {
  public render() {
    return (
      <>
        <SEO title={Metadata.title} description={Metadata.description} lang={Metadata.lang} />
        <Layout>
          {Metadata.description}
        </Layout>
      </>
    )
  }
}

export default AppContainer;
