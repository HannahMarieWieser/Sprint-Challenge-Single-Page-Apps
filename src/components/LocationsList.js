import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from "./LocationCard"

export default function LocationsList() {
  const [location, setlocation] = useState({});

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    Axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setlocation(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });



  }, [])
  console.log("location", location)

  if (!location){
    return <div>Loading location information...</div>
  }

  else{
    return <section className='location-list grid-view'>

      <h2>
        
        {location.map((onelocation) => 
          <LocationCard tileData = {onelocation}/> 
        )}

      </h2>
    </section>

  }
  
}
