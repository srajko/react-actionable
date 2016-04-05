import React from 'react';
import Actionable from './actionable.js';
import _ from 'lodash';

class ActionableList extends React.Component {
  render() {
    const { actionables } = this.props;
    const { Root, Actionable: ActionableToRender } = this.constructor.stylesheet;

    const children = _.map(
      actionables,
      (actionable) => <ActionableToRender actionable={actionable} />
    );
    return <Root {...this.props}>{children}</Root>;
  }
}

ActionableList.propTypes = {
  actionables: React.PropTypes.array.isRequired
};

ActionableList.stylesheet = {
  Root: 'div',
  Actionable
};

module.exports = ActionableList;
