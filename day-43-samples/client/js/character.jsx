import React from 'react';

class Character extends React.Component{
  render(){
    // console.log('char props', this.props);

    return(
      <div>
        <div>Name: {this.props.dude.name}</div>
        <div>Hit Points: {this.props.dude.hitPoints}</div>
      </div>
    );
  }
}

module.exports = Character;
