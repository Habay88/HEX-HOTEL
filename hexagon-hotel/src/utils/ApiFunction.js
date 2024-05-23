import axios from "axios";

export const api = axios.create({

    baseURL: "http://localhost:8084",
})

// adds a new room tho the db
export async function addRoom(photo,roomType,roomPrice) {

    const formData = new FormData();
    formData.append("photo",photo);
    formData.append("roomType",roomType);
    formData.append("roomPrice",roomPrice);

    const response = await axios.post("/rooms/add/new-room",formData)
    if (response.status === 201) {
        return true
    } else{
        return false
    }
}
// gets all room types from the db
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room-types")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}