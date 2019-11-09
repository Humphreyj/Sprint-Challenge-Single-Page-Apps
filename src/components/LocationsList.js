import React, { useState,useEffect  } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
import SeachForm from '../components/SearchForm';

const LocationsList = () => {
  const [locations, updateLocations] = useState([]);
  const [page, changePage] = useState(1);

  



  useEffect(() => {
    const getLocations = () => {
      
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          console.log(res.data.results);
          updateLocations(res.data.results)
          
        })
        .catch(err => {
          console.log(err);
        })
        
      
    }
    getLocations();
  }, []);
  console.log(locations)

  const [searchTerm, searchHandler] = useState('');
  
    const getSearch = (event) => {
      searchHandler(event.target.value)
      console.log(searchTerm)
    }
  let filteredLocations=locations.filter(location => {
    return location.name.indexOf(searchTerm) != -1;
  });
  console.log(filteredLocations)

  return (
    <section className="location-list">
      <SeachForm
      getSearch={getSearch}
      searchTerm={searchTerm} />
      {
        filteredLocations.map((location,i) => {
          return (
            <LocationCard
            key={i}
            name={location.name}
            type={location.type}
            
            />
          )
        })
      }
    </section>

  )
    }

export default LocationsList;
