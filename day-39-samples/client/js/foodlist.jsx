var React = require('react');

class FoodList extends React.Component {

  constructor() {
    super();

    this.foodPlaces = [
      {id: 1, name: 'Pizza Hut'},
      {id: 2, name: 'Mad Hatter'},
      {id: 3, name: 'Subway'},
      {id: 4, name: 'Jus-Mex'}
    ];
  }

  render(){

    console.log(this.foodPlaces);

    return (
      <ul>
        {this.foodPlaces.map(function(place){
          return <li key={place.id}>{place.name}</li>
        })}
      </ul>
    )
  }

}

module.exports = FoodList;
