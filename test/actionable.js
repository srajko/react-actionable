const React = require('react');
const ReactTestUtils = require('react-addons-test-utils');
const assert = require('assert');

const {
  base: { Actionable },
  bootstrap: { Actionable: BootstrapActionable }
} = require('..');

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

  it('should render as bootstrap list-group-item', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <BootstrapActionable actionable={actionable} />
    );

    const node = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'li');

    assert.equal(
      node.textContent,
      'An actionable summary'
    );

    assert(node.classList.contains('list-group-item'));
  });
});
