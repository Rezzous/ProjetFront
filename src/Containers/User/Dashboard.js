import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

import { getAllCoaches , deleteOneCoach } from "../../api/coach";

export default function Dashboard() {
	const [coaches, setCoaches] = useState([]);
	const [msg, setMsg] = useState('');

    const [redirect, setRedirect] = useState(false);

	useEffect(() => {
        getAllCoaches()
        .then((res) => {
            setCoaches(res.results);
		});
	}, []);

	const onClickDelete = (id) => {
        deleteOneCoach(id)
        .then((res) => {
            console.log(res)
			if (res.status === 200) {
				setMsg('coach bien supprimé');
				getAllCoaches()
                .then((res) => {
					setCoaches(res.results);
                    window.location.reload();
				});
            }
		});
        
	};

	return (
		<main id="admin">
			<h2>Panneau d'admin</h2>

            <Link 
                to={'/addForm/'}>
                <button>Ajouter un coach</button>
            </Link>

			{/* {redirect && <Navigate to={`/updateForm/${coach.id}`} />} */}
            
			{coaches.length > 0 && (
				coaches.map((coach) => {
					return (
                        
                            <article key={coach.id} id="articleAdmin">
                                <p>{coach.firstName} {coach.lastName}</p>
                                <p>({coach.pseudo})</p>
                                <Link to={`/updateForm/${coach.id}`}>
                                    <button>Modifier</button>
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onClickDelete(coach.id);
                                    }}
                                >
                                    Supprimer
                                </button>
                            </article>
                        
					);
				})
            )}
           
		</main>
	);

}