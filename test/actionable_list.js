const React = require('react');
const ReactTestUtils = require('react-addons-test-utils');
const assert = require('assert');

const {
  base: { ActionableList },
  bootstrap: { ActionableList: BootstrapActionableList }
} = require('..');

const actionables = [{
  id: 1,
  summary: 'An actionable summary'
}, {
  id: 2,
  summary: 'Another actionable'
}];

describe('ActionableList', () => {
  it('should render actionables', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <ActionableList actionables={actionables} />
    );

    const node = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'div')[0];

    assert.equal(node.childNodes.length, 2);
  });

  it('should render as bootstrap list-group', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <BootstrapActionableList actionables={actionables} />
    );

    const node = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'ul');

    assert.equal(node.childNodes.length, 2);
    assert.equal(node.childNodes[0].tagName, 'LI');
  });
});
