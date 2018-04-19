import React, { Component } from 'react';
//import './App.css';
import { Container, Grid, Image } from 'semantic-ui-react';

const Logo = ({src, size = 'tiny'}) => (
  <Image src={src} size={size} inline />
);

class App extends Component {
  render() {
    return (
      <Container>
        <Grid columns='equal'>
          <Grid.Column width={12}>
            <Image src='images/banner.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Logo src='images/logo.png' size='small' />
            <Logo src='images/logotipo labjor tif-600.png' />
            <Logo src='images/novoLogoNudecri.jpg' />
            <Logo src='images/UNICAMP_logo.svg.png' />
            <Logo src='images/unirtv.png' />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
