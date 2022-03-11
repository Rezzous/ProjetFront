import React from "react";

import logo18 from '../../assets/logo/picto18.png';

import "./Prevention.Module.css";

export default function Prevention() {
	  return (
		  <main id="prevention">
        <h2> Jouer comporte des risques</h2>
              <p>Les jeux d'argent peuvent créer endettement, isolement, dépendance.</p>
              <p>Pour être aidé, appelez le 09 74 75 13 13 (appel non surtaxé).</p>
              <img src={logo18} alt="18 logo"/>
      </main>
  );
}

