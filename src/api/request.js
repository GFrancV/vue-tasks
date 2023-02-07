import axios from "axios";
import config from "../../app.config";

const baseURL = config.backend.url;

const request = axios.create({
	baseURL,
	withCredentials: true,
});

export default request;
