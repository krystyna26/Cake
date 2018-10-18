import { configure } from '@storybook/react';

// Loading stories dynamically

// syntax:
// require.context(directory, useSubdirectories = false, regExp = /^\.\//);
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// or

// import { configure } from '@storybook/react';
//
// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }
//
// configure(loadStories, module);
