import axios from "axios";
import { config } from "../config";

export const getAllCoaches = () => {
	return axios.get(`${config.api_url}/api/v1/coaches/all`)
	.then((res) => {
		return res.data;
	})
	.catch((err) => {
		return err;
	});
}

export const getOneCoach = (id) => {
	return axios.get(`${config.api_url}/api/v1/coaches/one/${id}`)
	.then((res) => {
		return res.data;
	})
	.catch((err) => {
		return err;
	});
}

export const addOneCoach = (data) => {
	return axios.put(`${config.api_url}/api/v1/coaches/add`, data)
	.then((res) => {
		return res.data;
	})
	.catch((err) => {
		return err;
	});
}

export const deleteOneCoach = (id) => {
	return axios.delete(`${config.api_url}/api/v1/coaches/delete/${id}`)
	.then((res) => {
		return res.data;
	})
	.catch((err) => {
		return err;
	});
}

export const updateOneCoach = (data) => {
	console.log(data)
		return axios.patch(`${config.api_url}/api/v1/coaches/update/${data.id}`, data)
		.then((res) => {
			console.log(res)
			return res.data;
		})
		.catch((err) => {
			return err;
		});
	}