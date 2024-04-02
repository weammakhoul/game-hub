import axios, { AxiosRequestConfig } from "axios";


export interface FetchResponse<T> {
    count: number;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"16f226a6984c4d4e9988712fd1aa582e"
    }
});

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
    }

}

export default APIClient