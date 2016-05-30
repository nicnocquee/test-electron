const ReactDOM = require('react-dom')
const React = require('react')
const Immutable = require('immutable')
const fs = require('fs')
const fse = window.require('fs-extra')

window.React = React

let Index = require('./components/index.js')

ReactDOM.render(
  <Index />,
  document.getElementById('content')
)
