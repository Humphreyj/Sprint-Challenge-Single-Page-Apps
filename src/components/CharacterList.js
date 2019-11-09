import React, { useState,useEffect  } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SeachForm from '../components/SearchForm';
import styled from 'styled-components';

const Characters = styled.section `
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Section = styled.section `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
width: 80%;
margin: 0 auto;
`

const CharacterList = () => {
  const [characters, updateCharacters] = useState([]);
  const [page, changePage] = useState(1);

  useEffect(() => {
    const getCharacters = () => {
      
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res.data.results);
          updateCharacters(res.data.results)
          
        })
        .catch(err => {
          console.log(err);
        })
        
      
    }
    getCharacters();
  }, []);
  console.log(characters)

  const [searchTerm, searchHandler] = useState('');
  
    const getSearch = (event) => {
      searchHandler(event.target.value)
      console.log(searchTerm)
    }
  let filteredCharacters=characters.filter(character => {
    return character.name.indexOf(searchTerm) != -1;
  });
  console.log(filteredCharacters)

  return (
    <Characters className="character-list">
      <SeachForm
      getSearch={getSearch}
      searchTerm={searchTerm} />
      <Section>
      {
        filteredCharacters.map((character,i) => {
          return (
            <CharacterCard
            key={i}
            name={character.name}
            image={character.image}
            origin={character.origin.name}
            location={character.location.name}
            status={character.status}
            species={character.species}
            />
          )
        })
      }
      </Section>
      
    </Characters>

  )
    }

export default CharacterList;
