import React, { useState } from "react";
import { Navigate  } from "react-router";
import { Link } from "react-router-dom";

import { loginUser } from "../../api/user";

import "./User.Module.css";

export default function Login() {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

	const [errorMessage, setErrorMessage] = useState('');

	
	const submitHandler = (e) => {
		e.preventDefault();

		const data = {
			email: email,
			password: password,
		};

		loginUser(data).then((res) => {
			if(res.status === 200){
				localStorage.setItem("user_auth", res.token)
                setRedirect(true)
			}
			else {
				setErrorMessage('Vos identifiants ne correspondent pas');
			}
		});
	};

	return (
		<main id="login">
				<section className="formUserPart">
					{redirect && <Navigate to="/coaching" />}
					<h2>Connectez-vous</h2>
						<form onSubmit={submitHandler} className="formUser">
								<label>Votre Email :</label>
								<input
									type="email"
									onChange={(e) => setEmail(e.currentTarget.value)}
								/>
								<label>Votre mot de passe :</label>
								<input
									type="password"
									onChange={(e) => setPassword(e.currentTarget.value)}
								/>
								
								<input type="submit" value="Connectez-vous" />

								<Link to={"/register"}>Inscrivez vous</Link>
						</form>
						<p id="errorMessage">{errorMessage}</p>
				</section>
		</main>
	);
}


