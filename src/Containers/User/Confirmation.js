import React from "react";
import { Link } from "react-router-dom";

import "./User.Module.css";

export default function Confirmation() {

	return (
		<main id="confirmation">
            <section id="confirmationSection">
                <p>Vous avez bien été enregistré sur le site</p>
                <div>
                    <Link to={`/`}>Page d'acceuil</Link>

                    <Link to={`/login`}>Se connecter</Link>
                </div>   
            </section>
        </main>
	);
}
