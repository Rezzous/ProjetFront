import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { checkToken } from "../api/user";
import { loadUser } from "../redux/actions/userAction";



const RequireDataAuth = (props) => {
	
	const params = useParams();
	const location = useLocation();
	
	const dispatch = useDispatch();

	const Child = props.child;

	const [redirect, setRedirect] = useState(false);

	const { userInfos, isLogged } = useSelector((state) => ({
		...state.userReducer,
	}));

	
	useEffect(() => {
	
        if (isLogged === false) {
			const TOKEN = localStorage.getItem("user_auth");
			if (TOKEN === null && props.auth) {
				setRedirect(true);
				
			} else {
				checkToken(TOKEN).then((res) => {
					if (res.status !== 200) {
						if (props.auth) {
							setRedirect(true);
						}
					} else {
						let user = res.user[0];
						user.token = TOKEN;
						
						dispatch(loadUser(user));
					  }
				});
			}
		}
		
	}, [props]);

	if (redirect) {
		return <Navigate to="/login" />;
	}

	return (
		<Child
			{...props}
			userInfos={userInfos}
			isLogged={isLogged}

			params={params}
			location={location}
		/>
	);
};


export default RequireDataAuth;