import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class Player extends Component {
  state = {
    isPlaying: false,
    duration: 0
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

  leftZero(n) {
    return (n < 10 ? '0' : '') + n;
  }

  formatTime(minutes, seconds) {
    return `${this.leftZero(minutes)}:${this.leftZero(seconds)}`;
  }

  render() {
    const { isPlaying, duration } = this.state;
    const { src } = this.props;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.trunc(duration) - minutes * 60;
    return (
      <div>
        <audio
          ref={element => (this.audioRef = element)}
          onEnded={() =>
            this.setState({
              isPlaying: false
            })
          }
          onLoadedMetadata={() =>
            this.setState({
              duration: this.audioRef.duration
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
          <Icon name={isPlaying ? 'stop' : 'play'} />
          {isPlaying ? 'Stop' : 'Play'}
        </Button>{' '}
        Duração: {this.formatTime(minutes, seconds)}
      </div>
    );
  }
}

export default Player;
