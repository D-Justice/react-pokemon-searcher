import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  postPokemon = () => {
    const { name, hp, frontUrl, backUrl } = this.state

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })

    })
      .then(response => response.json())
      .then(data => {
        this.setState({})
        this.props.pokeFetch()
        
      })
      .catch(error => console.log(error))
  }
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => { console.log(this.state) })
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {
          this.postPokemon()
          e.target.reset()
        }}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={(e) => { this.updateInput(e) }} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={(e) => { this.updateInput(e) }} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={(e) => { this.updateInput(e) }} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={(e) => { this.updateInput(e) }} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
