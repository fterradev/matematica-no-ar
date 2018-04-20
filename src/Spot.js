import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import Player from './Player';

class Spot extends Component {
  state = {
    properties: {}
  };

  exportProperties = properties => {
    this.setState({
      properties
    });
  };

  leftZero(n) {
    return (n < 10 ? '0' : '') + n;
  }

  formatTime(minutes, seconds) {
    return `${this.leftZero(minutes)}:${this.leftZero(seconds)}`;
  }

  render() {
    const { image, title, audio, exportStop, onPlay } = this.props;
    const {
      properties: { duration }
    } = this.state;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.trunc(duration) - minutes * 60;
    return (
      <Card>
        <Image src={`images/spots/${image}`} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            {duration && `Duração: ${this.formatTime(minutes, seconds)}`}
          </Card.Meta>
          <Card.Description>
            <Player
              src={`audio/${audio}`}
              exportStop={exportStop}
              exportProperties={this.exportProperties}
              onPlay={onPlay}
            />
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Spot;
