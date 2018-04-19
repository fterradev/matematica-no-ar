import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class Player extends Component {
  state = {
    isPlaying: false
  };

  stop = () => {
    this.audioRef.load();
    this.setState({
      isPlaying: false
    });
  };

  play = () => {
    this.audioRef.play();
    this.setState({
      isPlaying: true
    });
    const { onPlay } = this.props;
    if (onPlay) {
      onPlay();
    }
  };

  componentDidMount() {
    const { exportStop } = this.props;
    if (exportStop) {
      exportStop(this.stop);
    }
  }

  render() {
    const { isPlaying } = this.state;
    const { src } = this.props;
    return (
      <div>
        <audio
          ref={element => (this.audioRef = element)}
          onEnded={() =>
            this.setState({
              isPlaying: false
            })
          }
        >
          <source src={src} type="audio/wav" />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <Button
          icon
          labelPosition="left"
          onClick={() => (isPlaying ? this.stop() : this.play())}
        >
          <Icon name={isPlaying ? "stop" : "play"} />
          {isPlaying ? "Stop" : "Play"}
        </Button>
      </div>
    );
  }
}

export default Player;
