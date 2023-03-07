import axios from "axios"
import { HOST } from "./constants"

const getPublicDataAPI = async (data) => {
    let url = HOST + data
    return await axios.get(url)
}

export { getPublicDataAPI}