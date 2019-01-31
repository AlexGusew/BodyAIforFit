import React, { Component } from 'react';
import BodyFront from './Body';
import { colors, bodyMuscles } from './constants';

class App extends Component {
  constructor() {
    super();
    this.variants = [colors.red, colors.white];

    this.state = {
      variant: 0,
    }
  }

  changeColor = () => {
    this.setState({
      variant: (this.state.variant + 1) % 2,
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.changeColor}>Change highlighted muscles</button>
        <BodyFront
          highlight={{
            [this.variants[this.state.variant]]: [...bodyMuscles.front.thighs],
            [this.variants[(this.state.variant + 1) % 2]]: [...bodyMuscles.front.forearmWrist],
          }}
          transitionDuration={1000}
          height={600}
          muscleColor={colors.white}
        />
      </React.Fragment>
    );
  }
}

export default App;
