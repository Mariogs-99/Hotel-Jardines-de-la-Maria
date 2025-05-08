import axios from "axios";
import { Room, RoomAvailableRequest } from "../interfaces/roomInterfaces";

const token = import.meta.env.VITE_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAvailableRooms = async ({ initDate, finishDate, maxCapacity }: RoomAvailableRequest): Promise<Room[]> => {
  console.log(initDate)
  console.log(finishDate)
  console.log(maxCapacity)
  try {
    const response = await axios.get(
      `${BASE_URL}/room/available`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          initDate,
          finishDate,
          maxCapacity,
          lang:"es",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
    return []
  }
};

export const getImagesId = async (id: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/room-img/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          roomId: id,
          lang:"es",
        },
      }
    )
    console.log("imageIDs: ",response.data)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}
interface imageInterface {
  imgId: number
}

export const getRoomImage = async ({ imgId }: imageInterface) => {
  console.log(imgId)
  try {
    const response = await axios.get(
      `${BASE_URL}/img/download/${imgId}`,
      {
        responseType:"blob",
      }
    )
    console.log("images: ", response.data)
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl
  }
  catch (error) {
    console.log(error)
  }
}

export const getRoomImages = async (roomId: number) => {
  try {
    // Obtener la lista de imágenes de la habitación
    const images = await getImagesId(roomId);

    if (!images || images.length === 0) {
      console.log("No hay imágenes disponibles.");
      return [];
    }

    // Obtener las imágenes usando sus IDs
    const imagePromises = images.map((img: { imgId: number }) => getRoomImage({ imgId: img.imgId }));

    // Esperar todas las promesas
    const roomImages = await Promise.all(imagePromises);

    console.log(roomImages);
    return roomImages;
  } catch (error) {
    console.log("Error obteniendo imágenes:", error);
    return [];
  }
};
