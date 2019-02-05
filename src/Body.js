import React from 'react';
import BodyFront from './body/BodyFront';
import BodyBack from './body/BodyBack';
import { musclesToIdMap, colors, sides } from './constants';
import ReactDOM from 'react-dom';

class Body extends React.Component {
  constructor() {
    super();
    this.bodyRef = React.createRef();
    this.muscleIdToRef = {};
    this.sideToBody = {
      [sides.front]: BodyFront,
      [sides.back]: BodyBack,
    };

    this.state = {
      side: null,
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
  }

  componentDidUpdate() {
    this.highlight(this.props.highlight);
  }

  PassComponent = ({ component: Component, ...rest }) => (
    <Component {...rest} />
  );

  render() {
    const { transitionDuration, sides, ...rest } = this.props;

    return (
      <React.Fragment>
        {sides.map(side => (
          <this.PassComponent
            id={side}
            component={this.sideToBody[side]}
            muscleRefs={this.muscleIdToRef}
            {...rest} />
        ))}
      </React.Fragment>
    );
  }
}


export default Body;