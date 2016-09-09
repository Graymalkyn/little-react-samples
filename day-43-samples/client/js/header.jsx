var React = require('react');

import PropsComponent from './propsComponent.jsx';

class Header extends React.Component {

  render () {
    // console.log('rendering');
    return (
      <header>
        <h1>React Header!</h1>

        <PropsComponent text="in the header" bgColor="blue" />
      </header>
    );
  }
}

module.exports = Header;
