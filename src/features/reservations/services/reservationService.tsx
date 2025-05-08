import axios from "axios"

// const token = import.meta.env.VITE_TOKEN
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getUnavailableDates = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/reservation/unavailable/hotel`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

export const makeReservation = async (body:any) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/reservation/`,
            body,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        console.log(response)
        return response.data
    }
    catch(error) {
        console.log(error)
    }
}