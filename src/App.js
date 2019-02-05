import React, { Component } from 'react';
import BodyFront from './Body';
import { colors, bodyMuscles, sides } from './constants';

class App extends Component {
  allMusclesToArray = () => (
    Object.keys(Object.keys(bodyMuscles).reduce((muscles, muscleGroup) => {
      bodyMuscles[muscleGroup].forEach(muscle => { muscles[muscle] = null });
      return muscles;
    }, {}))
  );

  render() {
    return (
      <React.Fragment>
        <BodyFront
          highlight={{
            [colors.green]:
              // this.allMusclesToArray()
            [...bodyMuscles.common]
          }}
          sides={[sides.back, sides.front]}
          transitionDuration={2000}
          height={800}
          muscleColor={colors.white}
        />
      </React.Fragment>
    );
  }
}

export default App;
