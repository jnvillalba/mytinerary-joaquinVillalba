import axios from "axios";

const cities = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export const getAllCities = async () => {
    try {
        const {data} = await cities("/cities")
        return data.cities
    } catch (error) {
        console.log(error.message);
        return []
    }

}

export const getCity= async (id) => {
    try {
        const {data} = await cities("/city"+id)
        return data
    } catch (error) {
        console.log(error.message);
        return []
    }

}