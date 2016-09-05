var React = require('react');

class ChangeText extends React.Component{

  constructor() {
    super();
    this.state = {
      text: 'Click Me!'
    }
  }

  changeText(){
    console.log('changed');
    this.setState({
      text: 'Clicked on the text'
    });
  }

  render() {
    var self = this;

    function clickParagraph() {
      console.log('clicked.')
      self.changeText();
    }

    return (
      <p className="paragraph" onClick={clickParagraph}>{this.state.text}</p>

    );

  }

}

module.exports = ChangeText;
