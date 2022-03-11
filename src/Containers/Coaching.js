import React, {useState} from "react";
import { useEffect } from 'react';

import { Link } from "react-router-dom";
import { send } from 'emailjs-com';

import { getAllCoaches } from "../api/coach";

import './Coaching.Module.css';


export default function Coaching() {
	
    const [coaches, setCoaches] = useState([])
    
    useEffect( ()=>{
        getAllCoaches()
        .then(res => {
            setCoaches(res.results);
        })
    },[])

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_55dmt49',
            'template_845dvbq',
            toSend,
            'user_AbOq6MACcxsQAJVRqd9oF'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
		
        <main>
			<h2>Coachings</h2>
                <section id="coaching">
                    <h3>Déroulement d'une séance de coaching</h3>
                        <article id="presentationCoaching">
                            <p>La plupart des coachs utilisent Discord ou Zoom pour les séances. Ces logiciel permettent de pouvoir partager votre écran à distance.
                            </p>

                            <p>La séance peut s'articuler de plusieurs manières. dans le cas où l'élève dispose d'un tracker, il peut être interessant de review plusisieurs mains ou un tournoi afin d'évaluer les éventuels leaks dans votre jeu.
                            </p>

                            <p>Du travail purement théorique peut s'avérer nécessaire et là le travail est vaste : 
                            </p>
                        </article>
                        <article id="workElements">
                            <ul>
                                <li>Travail sur les ranges preflop (open/ call / 3bet)</li>
                                <li>Travail sur les sizing preflop et postflop</li>
                                <li>Travail sur l'étude des ranges adverses</li>
                                <li>Travail sur les spots de bluffs et semi-bluff</li>
                                <li>Amélioration et optimisation de l'utilisation d'un tracker</li>
                                <li>Travail sur le mental</li>
                            </ul>
                        </article>
                </section>

			{coaches.length >0 && (
                <section id="card">
                    <p>
                        Si dessous vous trouverez la liste de nos coachs qui sont actuellement en exercice. Vous trouverez des précisions sur leur domaine de coaching de prédilection. 
                    </p>
                        {coaches.map((coach) => {
                            return (
                            <Link to={`/detailCoachPage/${coach.id}`} key={coach.id}>
                                <div id="coachCard" >
                                    <div id="infoCard" >
                                        <p id="name">{coach.firstName} {coach.lastName}</p>
                                        <p id="nickName">{coach.pseudo}</p>
                                        <p id="coachingType">{coach.type}</p>
                                        <p id="hourlyRate">{coach.tauxHoraire} € de l'heure</p>
                                        
                                    </div>
                                </div>
                            </Link>
                            )
                        })}
                </section>
            )}
            <section id="formCoachingSection">
                <p>Formualire de contact pour ceux qui souhaitent s'inscrire en tant que coach : </p>
                <form 
                    onSubmit={onSubmit} 
                    id="formCoaching"
                
                >
                    
                    <label htmlFor="name">Votre Nom </label>
                    <input
                        type='text'
                        name='from_name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <label htmlFor="name">Votre email</label>
                    <input
                        type='text'
                        name='reply_to'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <label htmlFor="name">Votre message</label>
                    <textarea
                        type='text'
                        name='message'
                        rows="10" 
                        cols="30"
                        value={toSend.message}
                        onChange={handleChange}
                    >
                    </textarea>
                    <button type='submit'>Envoyer</button>
                </form>
                
            </section>
            </main>
		
	);
}

