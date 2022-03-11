import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import { Navigate  } from "react-router";
import dayjs from "dayjs";

import { getOneCoach } from "../../api/coach";
import { saveOneMessage, getMessagesByIdCoach } from "../../api/messages";

import './DetailCoach.Module.css'

export default function DetailCoach() {
    
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [content, setContent] = useState("");
    const [coach, setCoach] = useState([])
    const [messages, setMessages] = useState([])
    const [redirect, setRedirect] = useState(false);
    
    let paramUrl = useParams();
    let id = paramUrl.id
    
    useEffect( ()=>{
        getOneCoach(id)
        .then(res => {
            setCoach(res.results[0]);
        })
        getMessagesByIdCoach(id)
        .then(res => {
            setMessages(res.results);
        })
    },[])

    const onSubmitForm = () =>{
        
        let data = {
            lastName: lastName,
            firstName: firstName,
            content: content,
            coachId: id
        };

        saveOneMessage(data).then((res) => {
            if (res.status === 200) {
                setRedirect(true);
            }
        });
    }

    return (
    
    <>
        <section id="coachPage">
            <h2>{coach.firstName} {coach.lastName} ({coach.pseudo})</h2>
            <p>{coach.description} </p>
            <p><span>Disciplines de coaching </span>: {coach.type}</p>
        </section>

        <section>
            <h3>Liste des messages :</h3>
                {messages.map((message) => {
                    return (
                        <article id="messageCoach" key={Math.random()}>
                            <p>{message.fN} {message.lN}</p>
                            <p>date : {dayjs(message.creationTimestamp).locale("fr").format("DD-MM-YYYY")} </p>
                            <p>{message.content}</p>
                            <div id="divider"></div>
                        </article>
                    );
                })}
        </section>

        <section id="formCoachSection">
        {redirect && <Navigate to={'/coaching'} />}
            <h2>Formulaire de contact</h2>
                <p>Pensez à laisser vos coordonnées pour être recontacté. Votre message apparaitra seulement pour le coach en question, personne d'autre ne pourra le visualiser</p>
                <form 
                    id="formMessage" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitForm();
                    }}
                >
                <label>Tape ton message écrire à {coach.firstName} {coach.lastName} :</label>
                <label htmlFor="lastName">Votre nom</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    onChange={(e)=>{
                        setLastName(e.currentTarget.value);
                    }}
                />
                <label htmlFor="firstName">Votre prénom</label>
                <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    onChange={(e)=>{
                        setFirstName(e.currentTarget.value);
                    }}
                />
                <label htmlFor="textarea">Votre texte</label>
                <textarea 
                    rows="10"
                    cols="30" 
                    name="textarea"
                    required
                    onChange={(e)=>{
                        setContent(e.currentTarget.value);
                    }}
                ></textarea>
                <input type="submit" value="Send"/>
                </form>
        </section>  
    </>  
    
       
    );


}