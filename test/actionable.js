const React = require('react');
const ReactTestUtils = require('react-addons-test-utils');
const assert = require('assert');
import { style } from 'react-stylesheet';

const { Actionable } = require('..');

const actionable = {
  summary: 'An actionable summary'
};

describe('Actionable', () => {
  it('should render summary', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <Actionable actionable={actionable} />
    );

    const div = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'div');

    assert.equal(
      div.textContent,
      'An actionable summary'
    );
  });

  it('should use stylesheet', () => {
    const classedDiv = (props) => <div {...props} className="actionable"></div>;

    const ClassedActionable = style(Actionable, {
      Root: classedDiv
    });

    const component = ReactTestUtils.renderIntoDocument(
      <ClassedActionable actionable={actionable} />
    );

    const div = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'div');

    assert.equal(
      div.textContent,
      'An actionable summary'
    );

    assert(div.classList.contains('actionable'));
  });
});
