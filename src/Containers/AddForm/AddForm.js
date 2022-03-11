import React, {useState} from "react";

import { Navigate } from "react-router";

import { addOneCoach } from "../../api/coach";


 
export default function AddForm() {

	const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [tauxHoraire, setTauxHoraire] = useState("");

    const [redirect, setRedirect] = useState(false);

    const onSubmitForm = () =>{

        let data = {
            lastName: lastName,
            firstName: firstName,
            pseudo: pseudo,
            description: description,
            type: type,
            tauxHoraire: tauxHoraire
            
        };
        addOneCoach(data).then((res) => {
            console.log(res)
            if (res.status === 200) {
                setRedirect(true);
            }
        });
    }
    
    return (
        <main id="addCoach">
        
            {redirect && <Navigate to="/dashboard" />}
            <section id="sectionAdd">
                <form 
                    id="formAdd" 
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
