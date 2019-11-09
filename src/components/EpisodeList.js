import React, { useState,useEffect  } from "react";
import axios from 'axios';
import EpisodeCard from './LocationCard';
import SeachForm from '../components/SearchForm';

const EpisodeList = () => {
  const [episodes, updateEpisodes] = useState([]);
  const [page, changePage] = useState(1);

  



  useEffect(() => {
    const getEpisodes = () => {
      
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          console.log(res.data.results);
          updateEpisodes(res.data.results)
          
        })
        .catch(err => {
          console.log(err);
        })
        
      
    }
    getEpisodes();
  }, []);
  console.log(episodes)

  const [searchTerm, searchHandler] = useState('');
  
    const getSearch = (event) => {
      searchHandler(event.target.value)
      console.log(searchTerm)
    }
  let filteredEpisodes=episodes.filter(episode => {
    return episode.name.indexOf(searchTerm) != -1;
  });
  console.log(filteredEpisodes)

  return (
    <section className="location-list">
      <SeachForm
      getSearch={getSearch}
      searchTerm={searchTerm} />
      {
        filteredEpisodes.map((episode,i) => {
          return (
            <EpisodeCard
            key={i}
            name={episode.name}
            episode={episode.episode}
            />
          )
        })
      }
    </section>

  )
    }

export default EpisodeList;
