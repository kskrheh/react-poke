import { Component } from 'react';
import Input from './components/Input/Input';
import Pokemon from './components/Pokemon/Pokemon';
import './App.scss';

const pokeapi = `https://pokeapi.co/api/v2/pokemon`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTurn: false,
      name: '',
      imgSrc: ''
  };
  }

  onClick = (e) => {
    this.setState(state => ({isTurn: !state.isTurn}));
  }

  handleSearch = (name) => {
    this.setState({name});
  }


  fetchPoke = () => {
    const { name } = this.state;
    fetch(`${pokeapi}/${name}`)
    .then(res => res.json())
    .then(data => {
      this.setState({imgSrc: data.sprites["front_default"]});
    });
  }

  render() {
    const { name, isTurn, imgSrc } = this.state;
    return (
      <div id="fetch" className="App">
        <button onClick={this.onClick}>
          {isTurn ? 'Turn off :(' : 'Turn on!'}
        </button>
        {
        isTurn && 
        <>
          <Input value={name} onType={this.handleSearch} onSubmit={this.fetchPoke} className="input-wrapper" />
          <Pokemon name={name} imgSrc={imgSrc}  />
        </>
        }
        
      </div>
    )  
  }
}

export default App;
