var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx');
import List from './js/list.jsx';
import Books from './js/books.jsx';
import IsEven from './js/iseven.jsx';
import Character from './js/character.jsx';
import FluxComponent from './js/samples/flux-component.jsx';
import PropsComponent from './js/propsComponent.jsx';
import characterCreator from './js/character-creator.js';

// console.log('character creator', characterCreator())

var character1 = characterCreator();
var character2 = characterCreator();


require("./scss/style.scss");

class App extends React.Component {

  render () {
    return (
      <div>
        <Header />

        <p>Something else!</p>

        <PropsComponent steak="awesome" bgColor="pink" />
        <PropsComponent text="third" />
        <FluxComponent />
        <IsEven />

        <List />
        <List count="5" />

        <Character dude = {character1} />
        <Character dude = {character2} />

        <Books title="Cibola Burn" author="James S.A. Corey" genre="Sci-Fi" tagline="This is the story of..." image="/Cibola_Burn.jpg"/>

        <Books title="Javascript for Kids" author="Nick Morgan" genre="Education" tagline="Learn Javascript" image="js_for_kids.jpg"/>

        <Books title="Argonauts" author="Kevin Kneupper" genre="Sci-Fi" tagline="This is the story of..." image="argonauts.jpg"/>


      </div>

    );
  }
}

render(<App/>, document.getElementById('app'));
