import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard (props) {
  // image={image}
  return(

    <Card>
      <Image src={props.tileData.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.tileData.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.tileData.type}</span>
        </Card.Meta>
        <Card.Meta>
          <span className='date'>Type:{props.tileData.type}</span>
        </Card.Meta>
        <Card.Meta>
          <span className='date'>Dimension:{props.tileData.dimension}</span>
        </Card.Meta>  
        <Card.Meta>
          <span className='date'>Residents:{props.tileData.residents.length}</span>
        </Card.Meta>  
      </Card.Content>
    </Card>

  )
}
