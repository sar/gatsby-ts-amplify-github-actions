import React from "react";
import AppContainer from "../components/Layout/AppContainer";
import './index.css';

/**
 * Declare default resource path adapter for {AppContainer} passthrough
 * @returns {JSX.Element}
 * @constructor
 */
class Index extends React.Component {
  public render() {
    return <AppContainer />
  }
}

export default Index;