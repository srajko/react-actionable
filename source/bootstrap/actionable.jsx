import React from 'react';
import { style } from 'react-stylesheet';

import { Actionable } from '../base';

module.exports = style(Actionable, {
  Root: (props) => <li {...props} className="list-group-item" />
});
