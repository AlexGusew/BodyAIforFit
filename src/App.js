import React, { Component } from 'react';
import BodyFront from './Body';
import { colors, bodyMuscles } from './constants';

class App extends Component {
  render() {
    return (
      <BodyFront 
        highlight={{
          [colors.red]: [...bodyMuscles.front.thighs],
          [colors.green]: [...bodyMuscles.front.forearmWrist],
        }}
        transitionDuration={1000} 
      />
    );
  }
}

export default App;
