import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: true
    }
  }
  handleClick = () => {
    this.setState(prevState => {
      return {
        flipped: !prevState.flipped
      }
      
    })
  }
  
  render() {
    console.log(this.state.flipped)
    const {
      name,
      hp,
      id,
      sprites: {front},
      sprites: {back}
    } = this.props.data
    return (
      <Card>
        <div onClick={() => this.handleClick()}>
          <div className="image">
            <img style={{ width: '100px' }} src={this.state.flipped ? front: back} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}
PokemonCard.defaultProps = {
  name: 'Loading..',
  hp: 'Loading...',
  sprites: 'https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/256/ditto.webp'

}
export default PokemonCard
