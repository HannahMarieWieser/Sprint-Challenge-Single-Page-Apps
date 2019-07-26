import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

//if problem return braces around props

function EpisodeCard (props) {
  console.log("episodecard props", props)

  return(

    <Card>
      <Card.Content>
        <Card.Header>{props.tileData.name} - {props.tileData.episode}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.tileData.species}-{props.tileData.status}</span>
        </Card.Meta>
        {/* Also need length of the character array!!! */}
        <Card.Meta>
          <span className='date'>Characters:{props.tileData.characters.length}</span>
        </Card.Meta>
       
      </Card.Content>
    </Card>

  )
}

export default EpisodeCard;
