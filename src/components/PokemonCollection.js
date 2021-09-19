import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    
  }
  render() {

    
    
    return (
      <div>
      <Card.Group itemsPerRow={6}>
  
        {this.props.pokeData.map(pokemon => <PokemonCard data={pokemon}/>)}
      </Card.Group>
      
      
      </div>
    )
  }
}


export default PokemonCollection
