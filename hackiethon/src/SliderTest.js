import React, { Component } from 'react';
import Slider from './Slider';

export default class SliderTest extends Component {
  state = {
    minutes: 15,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (minutes === 0 && seconds === 0) {
        var audio = new Audio(
          'https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/radiate-25882.mp3'
        );
        audio.play();
      }

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  playsound() {
    var audio = new Audio('./timerFinished.mp3');
    audio.play();
  }

  render() {
    const { minutes, seconds } = this.state;
    let percentage = minutes * 60 + seconds;

    return (
      <div>
        <Slider minutes={minutes} seconds={seconds} percentage={percentage} />
      </div>
    );
  }
}
