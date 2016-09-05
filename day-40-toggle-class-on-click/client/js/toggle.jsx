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
      var _style;
      if (this.state.onClicked){ // clicked button style
        _style = {
          background: "black",
          color: "white"
          }
      }
      else{                     // default button style
        _style = {
          background: "white",
          }
      }
      return (
          <div>
              <button
                  onClick={this.changeColorButton}
                  style={_style}>Press me !</button>
          </div>
      );
    }
  }
module.exports = Toggle;
