import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });



  }, [])
  // console.log("character", character)

  if (!character){
    return <div>Loading character information...</div>
  }

  else{
    return <section className='character-list grid-view'>

      <h2>

        {character.map((oneperson) => 
          <CharacterCard tileData = {oneperson}/> 
        )}

      </h2>
    </section>

  }
  
}
