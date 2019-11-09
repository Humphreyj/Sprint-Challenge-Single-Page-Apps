import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default function App() {
  return (
    <Main>
      <Header />
      <Route path='/' exact
component={WelcomePage}  />   
      <Route path='/characters' component={CharacterList} />
      <Route path='/episodes' component={EpisodeList} />
      <Route path='/locations' component={LocationsList} />
    </Main>
  );
}
