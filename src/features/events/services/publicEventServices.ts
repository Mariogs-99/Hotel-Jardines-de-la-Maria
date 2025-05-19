import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TOKEN; // asegúrate de tener esto en tu `.env`
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export interface PublicEventDTO {
  id: number;
  title: string;
  description: string;
  eventDate: number[];
  capacity: number;
  price: number;
  imageUrl: string;
  active: boolean;
}

// Obtener eventos públicos (activos)
export const getPublicEvents = async (): Promise<PublicEventDTO[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/events`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener eventos públicos:", error);
    return [];
  }
};
