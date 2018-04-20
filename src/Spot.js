import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Player from './Player';

const Spot = ({ image, title, audio, exportStop, onPlay }) => (
  <Card>
    <Image src={`images/spots/${image}`} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>
        <Player
          src={`audio/${audio}`}
          exportStop={exportStop}
          onPlay={onPlay}
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Spot;
