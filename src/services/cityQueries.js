import axios from "axios";

const cities = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export const getAllCities = async () => {
    try {
        const {data} = await cities("/cities")
        console.log(data)
        return data.cities
    } catch (error) {
        return []
    }

}

export const getCity= async (id) => {
    try {
        const {data} = await cities("/city/"+id)
        return data.city
    } catch (error) {
        return []
    }

}