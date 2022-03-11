import React from "react";

import logoHm3 from '../../assets/software/hm3v2.jpg';
import logoPt from '../../assets/software/pokertracker.png';
import logoXeester from '../../assets/software/xeester.png';
import logoPS from '../../assets/software/PokerSnowie.png';
import logoPio from '../../assets/software/Piosolver.jpg';
import logoEquilab from '../../assets/software/equilab.jpg';
import logoSS from '../../assets/software/snapshove.png';


import './Software.Module.css'

export default function SoftWare () {

    return (
        <main>
        <section id="software">
            <h2>Logiciels pour travailler son poker</h2>
            <article id="trackers">
                <div className="softwareTitle"><h3>Les trackers</h3></div>
                    <p>Un tracker est un logiciel qui permet de stocker des comptes-rendus de vos parties en ligne sous forme de base de données, et de compiler ainsi l’intégralité de vos mains et résultats.
                    </p>
                    <p>Mais le plus grand intérêt est d'analyser votre jeu et celui de vos adversaires grâce aux données variées qu'il fournit. Le tout durant la partie ! De quelle manière ? Tout d'abord par l'intermédiaire du HUD (pour heads-up display) qui affiche de nombreuses statistiques directement sur nos adversaires à la table et qui nous permet de nous adapter plus rapidement à leur jeu. On peut totalement configurer le HUD pour l’adapter au format de jeu (par exemple, on aura besoin de statistiques différentes selon que l'on soit sur une table de cash-game ou en tournoi).
                    </p>
                        <h4>Quelques exemples des trackers les plus couramment utilisés</h4>
                            <div id="trackersCard">
                                <div>
                                    <a href="https://www.holdemmanager.com/hm3/"><img src={logoHm3} alt="hm3 logo"/></a>
                                    <p>Holdem Manager</p>
                                </div>
                                <div>
                                    <a href="https://www.pokertracker.com/"><img src={logoPt} alt="Poker tracker logo"/></a>
                                    <p>Poker Tracker</p>
                                </div>
                                <div>
                                    <a href="https://www.xeester.com/fr/"><img src={logoXeester} alt="Xeester logo"/></a>
                                    <p>Xeester</p>
                                </div>
                            </div>
                            
            </article>
            <article id="solvers">
                <div className="softwareTitle"><h3>Les solveurs</h3></div>
                    <p>Les solvers sont des logiciels de résolution ce qui signifient qu'ils permettent de visualiser et parcourir des arbres de jeu créés selon plusieurs paramètres que l'on a prédéfinis. Le logiciel va utiliser l'équilibre de Nash pour résoudre cet arbre et nous donner une approximation très proche de la stratégie de jeu optimale. On peut y paramétrer des ranges, des tailles de tapis et des montants possibles de betsizing flop, turn et river. On obtient ensuite des données sur l'EV de chaque décision, les ranges sur chaque street et l'exploitabilité de la solution exprimée en pourcentage du pot ! (Attention un ordinateur puissant est nécessaire. Se renseigner avant l'achat)
                    </p>
                        <h4>Quelques exemples de solvers utilisés</h4>
                            <div id="solversCard">
                                <div>
                                    <a href="https://www.pokersnowie.com/"><img src={logoPS} alt="Poker Snowie logo"/></a>
                                    <p>PokerSnowie</p>
                                </div>
                                <div>
                                    <a href="https://www.piosolver.com/"><img src={logoPio} alt="PioSolver logo"/></a>
                                    <p>PioSolver</p>
                                </div>
                            </div>
                    
                    
            </article>
            <article id="others">
                <div className="softwareTitle"><h3>Autre</h3></div>
                    <p>D'autres logiciel sont très importants au poker notamment ceux permettant des calculs d'equité (beaucoup sont interdit quand des tables sont lancées mais c'est essentiellement pour un travail hors des tables). Equilab par exemple permet de calculer notre equité contre une range définie de l'adversaire. SnapShove nous aide a prendre des decisions short stack. Que ce soit savoir s'il il faut push dans une position donnée avec un certain nombre de blindes ou bien call versus push. 
                    </p>
                    <h4>Quelques exemples d'autres logiciels utilisés</h4>
                        <div id="otherCard">
                            <div>
                                <a href="https://fr.pokerstrategy.com/poker-software-tools/equilab-holdem/"><img src={logoEquilab} alt="Equilab logo"/></a>
                                <p>Equilab</p>
                            </div>
                            <div>
                                <a href="https://www.snapshove.com/"><img src={logoSS} alt="SnapShove logo"/></a>
                                <p>SnapShove</p>
                            </div>
                        </div>
            </article>
        </section>
        </main>
    );
}