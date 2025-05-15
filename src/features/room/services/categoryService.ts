import axios from "axios";
import { CategoryClientViewDTO } from "../interfaces/categoryInterfaces";


const token = import.meta.env.VITE_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getPublicCategories = async (): Promise<CategoryClientViewDTO[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/category-room/public-view`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("🔴 Error al obtener categorías públicas:", error);
    return [];
  }
};
