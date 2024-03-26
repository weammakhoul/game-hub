import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"16f226a6984c4d4e9988712fd1aa582e"
    }
});