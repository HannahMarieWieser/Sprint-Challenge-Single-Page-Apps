import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from "./EpisodeCard"

export default function EpisodeList() {
  const [episode, setEpisode] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    Axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setEpisode(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });



  }, [])
//   console.log("episode", episode)

  if (!episode){
    return <div>Loading episode information...</div>
  }

  else{
    return <section className='episode-list grid-view'>

      <h2>
        
        {episode.map((oneepisode) => 
          <EpisodeCard tileData = {oneepisode}/> 
        )}

      </h2>
    </section>

  }
  
}
