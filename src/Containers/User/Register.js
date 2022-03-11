import React, { useState } from "react";
import { Navigate } from "react-router";

import { registerUser } from "../../api/user";

import "./User.Module.css";

export default function Register() {

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
    const [redirect, setRedirect] = useState(false);

	const onSubmitForm = () => {
		
		const data = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
		};
		
		registerUser(data).then((res) => {
			if (res.status === 200) {
				setRedirect(true);
			}
		});
	};

	return (
		<main id="register">
			{redirect && <Navigate to="/confirmation" />}
			<section role="main" className="formUserPart">
				<h2>Formulaire d'inscription</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						onSubmitForm();
					}}
                    className="formUser"
				>
					<label htmlFor="firstName">Votre prénom</label>
					<input
						type="text"
						name="firstName"
						required
						onChange={(e) => {
							setFirstName(e.currentTarget.value);
						}}
					/>

					<label htmlFor="lastName">Votre nom</label>
					<input
						type="text"
						name="lastName"
						required
						onChange={(e) => {
							setLastName(e.currentTarget.value);
						}}
					/>

					<label htmlFor="email">Email </label>
					<input
						type="email"
						name="email"
						required
						onChange={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
					<label htmlFor="password">Mot de passe</label>
					<input
						type="password"
						name="password"
						required
						onChange={(e) => {
							setPassword(e.currentTarget.value);
						}}
					/>

					<input type="submit" value="Send"/>
				</form>
			</section>
		</main>
	);
}
