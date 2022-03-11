import React, {useState} from "react";

import {useParams} from 'react-router-dom';
import { Navigate } from "react-router";

import { updateOneCoach } from "../../api/coach";


 
export default function UpdateForm() {

	const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [tauxHoraire, setTauxHoraire] = useState("");

    const [redirect, setRedirect] = useState(false);

    let paramUrl = useParams();
    let id = paramUrl.id

    const onSubmitForm = () =>{

        let data = {
            lastName: lastName,
            firstName: firstName,
            pseudo: pseudo,
            description: description,
            type: type,
            tauxHoraire: tauxHoraire,
            id: id
        };
        updateOneCoach(data).then((res) => {
            if (res.status === 200) {
                setRedirect(true);
            }
        });
    }
    
    return (
        <main id="updateCoach">
        
            {redirect && <Navigate to="/dashboard" />}
            <section id="sectionUpdate">
                <form 
                    id="formUpdate" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitForm();
                        
                    }}
                >
                <label htmlFor="lastName">Nom</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    onChange={(e)=>{
                        setLastName(e.currentTarget.value);
                    }}
                />
                <label htmlFor="firstName">Prénom</label>
                <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required
                    onChange={(e)=>{
                        setFirstName(e.currentTarget.value);
                    }}
                />
                <label htmlFor="pseudo">Pseudo</label>
                <input 
                    type="text" 
                    id="pseudo" 
                    name="pseudo"
                    required
                    onChange={(e)=>{
                        setPseudo(e.currentTarget.value);
                    }}
                />
                <label htmlFor="type">Type de jeu</label>
                <input 
                    type="text" 
                    id="type" 
                    name="type"
                    required
                    onChange={(e)=>{
                        setType(e.currentTarget.value);
                    }}
                />
                <label htmlFor="tauxHoraire">Taux Horaire</label>
                <input 
                    type="text" 
                    id="tauxHoraire" 
                    name="tauxHoraire"
                    required
                    onChange={(e)=>{
                        setTauxHoraire(e.currentTarget.value);
                    }}
                />
                <label htmlFor="description">Description</label>
                <textarea 
                    rows="10" 
                    cols="30" 
                    name="description"
                    required
                    onChange={(e)=>{
                        setDescription(e.currentTarget.value);
                    }}
                ></textarea>
                <input type="submit" value="Send"/>
                    
                </form>
            
        
            </section>
        </main>
	);
}
