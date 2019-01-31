import React from 'react';
import BodyFront from './body/BodyFront';
import BodyBack from './body/BodyBack';
import { musclesToIdMap, colors } from './constants';
import ReactDOM from 'react-dom';

class Body extends React.Component {
  constructor() {
    super();
    this.bodyRef = React.createRef();
    this.siskaRef = React.createRef();
    this.muscleIdToRef = {};

    for (const muscle in musclesToIdMap.front)
      musclesToIdMap.front[muscle].forEach(muscleId => {
        this.muscleIdToRef[muscleId] = React.createRef();
      });

    console.log(this.muscleIdToRef);
  }

  setColorNameById = (id, color) => {
    const { transitionDuration } = this.props;

    const node = ReactDOM.findDOMNode(this.muscleIdToRef[id].current);
    node.style.transition = `${transitionDuration / 1000}s`;
    node.style.fill = color;
  }

  highlight = highlight => {
    Object.keys(highlight).forEach(color => {
      highlight[color].forEach(muscle => {
        musclesToIdMap.front[muscle].forEach(muscleId => {
          this.setColorNameById(muscleId, color);
        })
      });
    });
  }

  componentDidMount() {
    this.highlight(this.props.highlight);
  }
  
  componentDidUpdate() {
    this.highlight(this.props.highlight);
  }

  render() {
    return (
      <React.Fragment>
        <BodyFront {...this.props} muscleRefs={this.muscleIdToRef} />
      </React.Fragment>
    );
  }
}


export default Body;