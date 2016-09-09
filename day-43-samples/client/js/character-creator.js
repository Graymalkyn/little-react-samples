var names = ['Bob', 'John', 'Hank', 'Jill', 'Fred'];

function characterCreator(){

  var nameNumber = Math.floor(Math.random() * names.length);
  var hitPoints = Math.ceil(Math.random() * 10);

  return {
    name: names[nameNumber],
    hitPoints: hitPoints
  };
}

module.exports = characterCreator;
