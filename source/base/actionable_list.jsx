import React from 'react';
import Actionable from './actionable.js';
import _ from 'lodash';

class ActionableList extends React.Component {
  render() {
    const { actionables, onActionableDoubleClick } = this.props;
    const { Root, Actionable: ActionableToRender } = this.constructor.stylesheet;

    const children = _.map(
      actionables,
      (actionable) =>
        <ActionableToRender
          actionable={actionable}
          key={actionable.id}
          onDoubleClick={onActionableDoubleClick &&
            onActionableDoubleClick.bind(undefined, actionable)}
        />
    );
    return <Root {...this.props}>{children}</Root>;
  }
}

ActionableList.propTypes = {
  actionables: React.PropTypes.array.isRequired,
  onActionableDoubleClick: React.PropTypes.func
};

ActionableList.stylesheet = {
  Root: 'div',
  Actionable
};

module.exports = ActionableList;
