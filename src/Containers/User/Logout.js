import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { logoutUser } from "../../redux/actions/userAction";


export default function Logout () {
	const [redirect, setRedirect] = useState(false);

	const dispatch = useDispatch()

	useEffect(() => {
		localStorage.removeItem("user_auth")
		dispatch(logoutUser());
		setRedirect(true);
	},[]);

	return <>{redirect && <Navigate to="/" />}</>;
};


