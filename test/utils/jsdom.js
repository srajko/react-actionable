// adapted from http://jaketrent.com/post/testing-react-with-jsdom/
const jsdom = require('jsdom');

// setup the simplest document possible
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
const win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
  for (const key in window) {
    if (!window.hasOwnProperty(key) || key in global) {
      continue;
    }

    global[key] = window[key];
  }
}

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);