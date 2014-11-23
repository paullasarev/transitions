// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');
  var mouse = require('./bespoke-mouse');
  var loop = require('bespoke-loop');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  // bullets('li, .bullet'),
  bullets('.bullet'),
  // backdrop(),
  scale(),
  hash(),
  progress(),
  forms(),
  mouse(),
  loop()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
