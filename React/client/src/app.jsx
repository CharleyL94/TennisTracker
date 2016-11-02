var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./components/container.jsx')
var MapObject = require('./models/map');

window.onload = function(){
  ReactDOM.render(
    <Container url="http://localhost:3001/api"></Container>,
    document.getElementById('app')
  );
}
