var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;
var Toggle = require('./js/toggle.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />
        <Toggle />
        
      </div>;
  }
}

render(<App/>, document.getElementById('app'));
