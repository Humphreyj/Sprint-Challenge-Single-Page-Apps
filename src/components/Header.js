import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <Link to='/characters'><button className="characters">Characters</button></Link>
        <Link to='/episodes'><button className="characters">Episodes</button></Link>
        <Link to='/locations'><button className="locations">Locations</button></Link>
      </nav>
    </header>
  );
}
