import React, { Component } from "react";
//import './App.css';
import { Container, Grid, Image, Header } from "semantic-ui-react";

const Logo = ({ src, size = "tiny", inline = true, ...props }) => (
  <Image
    src={src}
    size={size}
    inline={inline}
    spaced={inline}
    style={{ paddingBottom: ".5em" }}
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <Container>
        <Grid columns="equal">
          <Grid.Column width={12}>
            <Image src="images/banner.jpg" />
          </Grid.Column>
          <Grid.Column>
            <Logo src="images/logo.png" size="small" inline={false} />
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
      </Container>
    );
  }
}

export default App;
