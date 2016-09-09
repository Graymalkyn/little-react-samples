import React from 'react';


class PropsComponent extends React.Component{
  render(){
    // console.log(this.props);

    var styles = {};

    
    return (
      <div className="props-component" style={ {backgroundColor: this.props.bgColor, color: 'red' } }>{this.props.text}</div>
    );
  }
}

module.exports = PropsComponent;
