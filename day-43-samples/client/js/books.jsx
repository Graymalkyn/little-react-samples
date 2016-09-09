import React from 'react';

class Books extends React.Component{

  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.author}</h2>
        <p>{this.props.genre}</p>
        <p>{this.props.tagline}</p>
        <img src={this.props.image}/>
      </div>
    );
  }

};

module.exports = Books;
