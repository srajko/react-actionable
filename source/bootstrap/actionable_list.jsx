import React from 'react';
import { style } from 'react-stylesheet';

import Actionable from './actionable.js';
import { ActionableList } from '../base';

module.exports = style(ActionableList, {
  Root: (props) => <ul {...props} className="list-group" />,
  Actionable
});
