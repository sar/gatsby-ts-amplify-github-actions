import * as React from 'react';
import styled from "styled-components"

interface ILayoutProps {
    children: React.ReactNode | React.ReactElement | any,
    style?: {
        container?: React.CSSProperties,
        media?: React.CSSProperties
    }
}

/**
 * Layout
 */
class Layout extends React.Component<ILayoutProps> {
    public render() {
        return (
            <>
                <Container
                    style={{...this.props.style?.container}}
                >
                    {this.props.children}
                </Container>
            </>
        )
    }
}

export default Layout;

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
`

