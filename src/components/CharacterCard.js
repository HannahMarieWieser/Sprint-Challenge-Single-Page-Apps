import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

//if problem return braces around props

function CharacterCard (props) {
  console.log("charactercard props", props)

  return(

    <Card>
      <Image src={props.tileData.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.tileData.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.tileData.species}-{props.tileData.status}</span>
        </Card.Meta>
        <Card.Meta>
          <span className='date'>Type:{props.tileData.type}</span>
        </Card.Meta>
        <Card.Meta>
          <span className='date'>Origin:{props.tileData.origin.name}</span>
        </Card.Meta>  
        <Card.Meta>
          <span className='date'>Location:{props.tileData.location.name}</span>
        </Card.Meta>  
      </Card.Content>
    </Card>

  )
}

export default CharacterCard;




// const CardExampleCard = () => (
// )
// export default CardExampleCard