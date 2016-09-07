var React = require('react');

class Toggle extends React.Component {

  constructor(props){
      super(props);
//original state
      this.state = {
        onClicked: false
      }
      this.changeColorButton = this.changeColorButton.bind(this);
    }
//changes state
    changeColorButton(){
      this.setState({
         onClicked: true
      });
    }
    render() {
      var style;
//clicked button style
      if (this.state.onClicked){
        style = {
          background: "black",
          color: "white"
          }
      }
//default button style
      else{
        style = {
          background: "white",
          }
      }
//button
      return (
          <div>
              <button
                  onClick={this.changeColorButton}
                  style={style}>Press me !</button>
          </div>
      );
    }
  }
module.exports = Toggle;
