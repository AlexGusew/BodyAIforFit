import React from 'react';
import BodyFront from './body/BodyFront';
import BodyBack from './body/BodyBack';
import { musclesToIdMap, sides } from './constants';
import ReactDOM from 'react-dom';

class Body extends React.Component {
  constructor() {
    super();
    this.muscleIdToRef = {};
    this.sideToBody = {
      [sides.front]: {
        component: BodyFront,
        ref: React.createRef()
      },
      [sides.back]: {
        component: BodyBack,
        ref: React.createRef()
      },
    };

    for (const side in musclesToIdMap)
      for (const muscle in musclesToIdMap[side])
        musclesToIdMap[side][muscle].forEach(muscleId => {
          this.muscleIdToRef[muscleId] = React.createRef();
        });
  }

  setColorNameById = (id, color) => {
    const { transitionDuration } = this.props;
    const node = ReactDOM.findDOMNode(this.muscleIdToRef[id].current);
    node.style.transition = `${transitionDuration / 1000}s`;
    node.style.fill = color;
  }

  highlight = (highlight = {}) => {
    Object.keys(highlight).forEach(color => {
      highlight[color].forEach(muscle => {
        this.props.sides.forEach(side => {
          musclesToIdMap[side][muscle] && musclesToIdMap[side][muscle].forEach(muscleId => {
            this.setColorNameById(muscleId, color);
          });
        });
      });
    });
  }

  componentDidMount() {
    this.highlight(this.props.highlight);
    this.changeHangler();
  }

  componentDidUpdate() {
    this.highlight(this.props.highlight);
  }

  componentWillUnmount() {
    this.changeHangler(false);
  }

  PassComponent = ({ component: Component, ...rest }) => (
    <Component {...rest} />
  );

  callback = (musclesToClick, muscle) => e => musclesToClick.callback(muscle, e);

  changeHangler = (isAdd = true) => {
    this.props.onClickMuscles.forEach(musclesToClick => {
      musclesToClick.muscles.forEach(muscle => {
        this.props.sides.forEach(side => {
          musclesToIdMap[side][muscle] && musclesToIdMap[side][muscle].forEach(muscleId => {
            isAdd
              ? this.muscleIdToRef[muscleId].current.addEventListener('click', this.callback(musclesToClick, muscle))
              : this.muscleIdToRef[muscleId].current.removeEventListener('click', this.callback(musclesToClick, muscle));
          });
        });
      });
    });
  }

  render() {
    const { transitionDuration, sides, onClickMuscles, ...rest } = this.props;
    console.log(this.props.highlight)
    return (
      <React.Fragment>
        {sides.map(side => (
          <this.PassComponent
            key={side}
            component={this.sideToBody[side].component}
            bodyRef={this.sideToBody[side].ref}
            muscleRefs={this.muscleIdToRef}
            {...rest} />
        ))}
      </React.Fragment>
    );
  }
}

export default Body;