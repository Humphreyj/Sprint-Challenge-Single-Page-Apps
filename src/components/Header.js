import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;
padding: 2%;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <Link to='/characters'><button className="characters">Characters</button></Link>
        <Link to='/episodes'><button className="characters">Episodes</button></Link>
        <Link to='/locations'><button className="locations">Locations</button></Link>
      </Nav>
    </header>
  );
}
