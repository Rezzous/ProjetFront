import React, {useState} from "react";
import { useEffect } from 'react';
import { Navigate } from "react-router";

import { getAllTestimonies, saveOneTestimony } from "../../api/testimony";

import "./Testimony.Module.css";
 
export default function Testimony() {

    const [testimonies, setTestimonies] = useState([])
	
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    

    const [redirect, setRedirect] = useState(false);

    useEffect( ()=>{
        getAllTestimonies()
        .then(res => {
            setTestimonies(res.results);
            
        })
    },[])

    const onSubmitForm = () =>{
        
        let data = {
            lastName: lastName,
            firstName: firstName,
            title: title,
            content: content,
        };

        saveOneTestimony(data).then((res) => {
            if (res.status === 200) {
                setRedirect(true);
            }
        });
    }
    
    return (
        <main id="testimony">
        
            <section id='testimonyList'>

            {testimonies.length >0 && (
                    <section className='ertgrt'>
                        <h2>Témoignages</h2>
                            {testimonies.map((testimony) => {
                                return (
                                <article key={testimony.id}>
                                    <h3>{testimony.title}</h3>
                                    <p>{testimony.content}</p>
                                    <p>{testimony.firstName} {testimony.lastName}</p>
                                    <div id="divider"></div>
                                </article>
                                );
                        })}
                    </section>
                )}
            </section>
            
            {redirect && <Navigate to="/" />}
            <section id="formTestimonySection">
                <form 
                    id="formTestimony" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitForm();
                        
                    }}
                >
                    <label id="writeComment">Ecrire un avis (500 caractères max) :</label>
                    <label htmlFor="lastName">Votre nom</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required
                        onChange={(e)=>{
                            setLastName(e.currentTarget.value);
                        }}
                    />
                    <label htmlFor="firstName">Votre prénom</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        required
                        onChange={(e)=>{
                            setFirstName(e.currentTarget.value);
                        }}
                    />
                    <label htmlFor="title">Titre</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        required
                        onChange={(e)=>{
                            setTitle(e.currentTarget.value);
                        }}
                    />
                    <label htmlFor="textarea">Votre avis</label>
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
        </main>
	);
}
