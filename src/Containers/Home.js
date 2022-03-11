import React from "react";
import homeLogo from "../assets/logo/cartes1920.jpg"
import "./Home.Module.css";


export default function Home() {
	return (
		<main id="home">
			<section id="homeSection">
				<img src={homeLogo}/>
					<h2>Bienvenue sur Poker Coaching</h2>
						<div id="homeTexte">
							<p id="home-presentation">Le site qui référence des formateurs de poker partout en France.</p>
							<p>Le poker est un jeu de cartes dont les règles sont assez simples à comprendre. En revanche savoir bien jouer au poker demande énormément de travail. Si vous chercher à vous faire coacher c'est que vous avez déjà commencé une démarche qui nous permet de considérer que vous êtes au courant de l'investissement à donner pour aquerir un bon niveau.</p>
							<p>Ce site vous propose de vous mettre en relation directe avec des joueurs (ou anciens joueurs) qui vous propose des formations tant sur le plan technique que mental. Nous avons donc regroupé en trois principales catégories les séances de coaching. Au niveau de la technique nous proposons principalement des formations orientées soit tournois soit cashGame. Puis nous avons aussi des formateurs qui s'orientent plus sur l'aspect mental du poker (un aspect qui est devenu essentiel pour faire de vous un joueur solide).</p>
						</div>
			</section>
		</main>
	);
}