var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;

var ChangeText = require('./js/change-text.jsx');

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />

        <p>Re-implementing the change text on click assignment</p>

        <ChangeText />

      </div>;
  }
}

render(<App/>, document.getElementById('app'));
