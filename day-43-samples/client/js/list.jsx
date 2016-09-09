import React from 'react';

class List extends React.Component{

  render(){
    // console.log('list props', this.props);

    var items = [];


    for (var i=0; i < this.props.count; i++) {
      items.push(<li key={i}>{i + 1}</li>);
    }

    return (
      <ul>
        {items}
      </ul>
    )
  }
}

//if a props value isn't specified, it will use these defaults.
List.defaultProps = {count: 10, cow: 'bovine'};

module.exports = List;
