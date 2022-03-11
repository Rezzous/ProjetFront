import axios from "axios";
import { config } from "../config";

export const getAllTestimonies = () => {
	return axios.get(`${config.api_url}/api/v1/testimonies/all`)
    .then(res =>{
        return res.data
    })
    .catch((err) => {
        return err;
    });
}

export const saveOneTestimony = (data) => {
    console.log(data);
	return axios.put(`${config.api_url}/api/v1/testimonies/add`, data)
    .then((res) =>{
        console.log(res)
        console.log(res.data)
        return res.data
    })
    .catch((err) => {
        return err;
    });
}

