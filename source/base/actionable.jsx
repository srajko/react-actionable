import React from 'react';

class Actionable extends React.Component {
  render() {
    const { actionable } = this.props;
    const { Root } = this.constructor.stylesheet;
    const { summary } = actionable;

    return <Root {...this.props}>{summary}</Root>;
  }
}

Actionable.propTypes = {
  actionable: React.PropTypes.object.isRequired
};

Actionable.stylesheet = {
  Root: 'div'
};

module.exports = Actionable;
