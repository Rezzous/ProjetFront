import axios from "axios";
import { config } from "../config";

export const saveOneMessage = (data) => {
	return axios.put(`${config.api_url}/api/v1/messages/save`, data)
	.then((res) => {
		return res.data;
	})
	.catch((err) => {
		return err;
	});
}

export const getMessagesByIdCoach = (id) => {
	return axios.get(`${config.api_url}/api/v1/messages/all/${id}`)
	.then((res) => {
		return res.data;
	})
	.catch((err) => {
		return err;
	});
}
