import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokeData: []
    }
  }

  componentDidMount() {
    this.pokeFetch()
  }
  search = (input) => {

    this.setState(prevState =>{
      return{
        pokeData: prevState.pokeData.filter(pokemon => pokemon.name.startsWith(input))
      }
      
    })
    
    if(!input) {this.pokeFetch()}
    
  }

  pokeFetch = () => {
    fetch(`http://localhost:3000/pokemon`)
    .then(response => response.json())
    .then(data => this.setState({pokeData: data}))
  }

  render() {
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokeFetch={this.pokeFetch}/>
        <br />
        <Search searchFunction={this.search}/>
        <br />
        <PokemonCollection pokeData={this.state.pokeData}/>
      </Container>
    )
  }
}

export default PokemonPage
