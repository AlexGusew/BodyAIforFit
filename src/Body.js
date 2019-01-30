import React from 'react';
import body from './Spider-man.svg';
import { musclesToIdMap } from './constants';
import ReactSVG from 'react-svg'

class BodyFront extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate() {
    const { highlight } = this.props;

    this.highlight(highlight);
  }

  setColorNameById = (id, color) => {
    const { transitionDuration } = this.props;

    const node = document.getElementById(id);
    console.log(id, color);
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

  render() {

    console.log(this.bodyRef);


    return (
      <ReactSVG src={body} />
    );
  }
}


export default BodyFront;