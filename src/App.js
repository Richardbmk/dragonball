import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      caracters: [
        {
          name: "A18",
          jpgname: "a18",
          puntos: 2841,
          id: "a12893"
        },
        {
          name: "Dios Shenron",
          jpgname: "dios-shenron",
          puntos: 2800,
          id: "asleo1"
        },
        {
          name: "Trunks",
          jpgname: "trunks",
          puntos: 2737,
          id: "893der"
        },
        {
          name: "Goku Súper Saiyan Dios 2",
          jpgname: "goku-super-saiyan-dios-2",
          puntos: 4542,
          id: "893desder"
        },
        {
          name: "Vegeta Súper Saiyan",
          jpgname: "vegeta-super-saiyan",
          puntos: 3535,
          id: "8934g3der"
        },
        {
          name: "Gotenks",
          jpgname: "gotenks",
          puntos: 2904,
          id: "893d3frter"
        },
        {
          name: "Bulma",
          jpgname: "bulma",
          puntos: 2742,
          id: "893derrt"
        },
        {
          name: "Piccolo",
          jpgname: "piccolo",
          puntos: 2653,
          id: "893dehytr"
        },
        {
          name: "Pan",
          jpgname: "pan",
          puntos: 2573,
          id: "893d567er"
        },
        {
          name: "Freezer",
          jpgname: "freezer",
          puntos: 2619,
          id: "893deryth32"
        },
        {
          name: "Krilin",
          jpgname: "krilin",
          puntos: 2476,
          id: "erd893der"
        },
        {
          name: "Videl",
          jpgname: "videl",
          puntos: 2414,
          id: "834393desder"
        },
      ],
      searchField: ''
    };
  }

/*   componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ caracters: users }));
  } */

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { caracters, searchField } = this.state;
    const filteredCaracters = caracters.filter(caracters => 
      caracters.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1>Dragon Ball Caracters</h1>
      <SearchBox 
       placeholder="search caracter" 
       handleChange={ this.handleChange } 
       />
      <CardList caracters={ filteredCaracters } />
      </div>
    );
  }
}


export default App;
