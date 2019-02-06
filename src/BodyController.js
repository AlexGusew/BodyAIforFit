import React from 'react';
import Body from './Body';
import { colors } from './constants';
import { allMusclesToArray } from './utils/muscles';

const BodyController = ({
  isAllHighlighted,
  highlight,
  transitionDuration = 600,
  muscleColor = colors.white,
  ...rest
}) => {
  return (
    <Body
      highlight={isAllHighlighted ? allMusclesToArray() : highlight}
      muscleColor={muscleColor}
      transitionDuration={transitionDuration}
      {...rest}
    />
  );
}

export default BodyController;