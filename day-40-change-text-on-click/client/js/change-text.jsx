var React = require('react');

class ChangeText extends React.Component{

  constructor(){
    super();

    this.state = {
      text: 'Click Me!'
    }
  }

  clickParagraph(){
    this.setState({
      text: 'El Clickola'
    });
  }

  render(){
    var self = this;
  }

  function paraClick() {
    self.clickParagraph();
  }

  return (
    <p className="paragraph" onClick={paraClick}>{this.state.text}</p>

  );
}

module.exports = ChangeText;
