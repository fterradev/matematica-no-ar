import React, { Component } from 'react';
//import './App.css';
import {
  Container,
  Grid,
  Image,
  Header,
  Card,
  Segment
} from 'semantic-ui-react';
import Spot from './Spot';

const Logo = ({
  src,
  size = 'tiny',
  inline = true,
  containerStyle = null,
  ...props
}) => (
  <div style={{ textAlign: 'center', ...containerStyle }}>
    <Image
      src={src}
      size={size}
      inline={inline}
      spaced={inline}
      style={{ paddingBottom: '.5em' }}
      {...props}
    />
  </div>
);

class App extends Component {
  spots = [
    {
      title: 'O sinal de igual sempre existiu?',
      image: 'Spot - Sinal de igual.jpg',
      audio: 'Spot-Igual-a-completo-vinheta-2.mp3'
    },
    {
      title: 'De onde vem o zero?',
      image: 'Spot - Zero.jpg',
      audio: 'Spot-Zero-completo-vinheta-2.mp3'
    },
    {
      title: 'Jacob Palis, um grande matemático brasileiro',
      image: 'Spot - Jacob Palis.jpg',
      audio: 'Spot-Jacob-Palis-completo-vinheta-2-1.mp3'
    },
    {
      title: 'Qual a Lógica disso?',
      image: 'Spot - Lógica.jpg',
      audio: 'Spot-Lógica-completo-vinheta-2.mp3'
    },
    {
      title: 'Loteria, haja fé!',
      image: 'Spot - Loteria.jpg',
      audio: 'Spot-Loteria-completo-vinheta-2.mp3'
    },
    {
      title: 'A revolta…',
      image: 'Spot - Revolta do Quebra-Quilos.jpg',
      audio: 'Spot-Quebra-quilos-completo-vinheta-2.mp3'
    }
  ];

  onPlayAny = current => {
    this.spots.forEach(spot => {
      if (spot !== current) {
        spot.stop();
      }
    });
  };

  render() {
    return (
      <Container>
        <Grid columns="equal">
          <Grid.Column width={12}>
            <Image src="images/banner.jpg" />
          </Grid.Column>
          <Grid.Column
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <Logo
              src="images/logo.png"
              size="small"
              containerStyle={{ width: '100%' }}
            />
            <Logo src="images/logotipo labjor tif-600.png" />
            <Logo src="images/novoLogoNudecri.jpg" />
            <Logo src="images/UNICAMP_logo.svg.png" />
            <Logo src="images/unirtv.png" />
          </Grid.Column>
        </Grid>
        <Grid columns="equal">
          <Grid.Column width={12}>
            <Container text>
              <Header as="h2">Projeto Matemática no Ar</Header>
              <p>
                Matemática no ar tem o objetivo de mostrar para o grande público
                (especialistas e não especialistas) que a Matemática está
                presente em situações do cotidiano que nem sempre são
                percebidas. Para atingir o público foram criados conteúdos
                jornalísticos por meio de entrevistas e spots. As entrevistas
                foram transmitidas ao vivo pela Rádio Unicamp entre os dias 23 e
                27 de outubro de 2017, como parte da programação da Semana
                Nacional de Ciência e Tecnologia, cujo tema foi A matemática
                está em tudo. Nos intervalos das entrevistas, e ao longo de toda
                a semana, os spots foram transmitidos pela rádio Unicamp.
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Image src="images/qr-code.png" />
          </Grid.Column>
        </Grid>
        <Card.Group>
          {this.spots.map(spot => (
            <Spot
              key={spot.title}
              title={spot.title}
              image={spot.image}
              audio={spot.audio}
              exportStop={stop => (spot.stop = stop)}
              onPlay={() => this.onPlayAny(spot)}
            />
          ))}
        </Card.Group>
        <Segment>
          Saiba mais sobre o projeto em{' '}
          <a href="http://oxigenio.comciencia.br" target="oxigenio">
            oxigenio.comciencia.br
          </a>
        </Segment>
      </Container>
    );
  }
}

export default App;
