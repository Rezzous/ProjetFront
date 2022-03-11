import axios from "axios";
import { config } from "../config";

export const registerUser = (data) => {
	return axios.put(`${config.api_url}/api/v1/user/save`, data)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err;
		});
}

export const loginUser = (data) => {
	return axios.put(`${config.api_url}/api/v1/user/login`, data)
	.then((res) => {
		return res.data;
	})
	.catch((err) => {
		return err;
	});
}

export const checkToken = (token) => {
	return axios.get(`${config.api_url}/api/v1/user/checktoken`, { headers : {"x-access-token": token}})
	.then((res) => {

		return res.data;
	})
	.catch((err) => {
		return err;
	});
}