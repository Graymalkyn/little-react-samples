var React = require('react');

class Toggle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      onClicked: false
    }
    this.changeColorButton = this.changeColorButton.bind(this);
  }
  changeColorButton(){
    this.setState({
      onClicked: true
    });
  }
  render() {
    var style;
    if (this.state.onClicked){
      style = {
        background: "black",
        color: "white"
      }
    }
    else {
      style = {
        background: "white"
      }
    }
    return (
      <div>
        <button onClick={this.changeColorButton} style={style}>Press Me!</button>
      </div>
    );
  }
}
module.exports = Toggle;
