var React = require('react'),

class GroceryList extends React.Component{

  constructor(){
    super();

    this.groceryList = [
      {id: 1, name: 'one'},
      {id: 2, name: 'two'},
      {id: 3, name: 'three'}
    ];
  }

  render(){
    return (
      <ul>
        {this.groceryList.map(function(list){
          return <li key={list.id}>{list.name}</li>
        })}
      </ul>
    )
  }


}

module.exports = GroceryList;
