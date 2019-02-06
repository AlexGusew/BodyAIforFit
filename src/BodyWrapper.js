import React, { Component } from 'react';
import BodyController from './BodyController';
import { colors, bodyMuscles, sides } from './constants';
import { allMusclesToArray } from './utils/muscles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      highlight: { [colors.green]: [...bodyMuscles.forearmWrist] }
    }
  }

  highlight = muscle => {
    this.setState({ highlight: { [colors.red]: [muscle] } });
  }

  render() {
    return (
      <BodyController
        highlight={this.state.highlight}
        onClickMuscles={[{
          muscles: allMusclesToArray(),
          callback: (muscle, e) => this.highlight(muscle)
        }]}
        sides={[sides.back, sides.front]}
        height={800}
      />
    );
  }
}

export default App;