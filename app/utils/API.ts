import axios from "axios";
import { IPriceSection } from "../types/IPrice";

class PRICE_API_CLASS {
    path = "/api/price";

    async GET() {
        const response = await axios.get(this.path);
        return response.data;
    }

    async GET_BY_ID(id: string) {
        const response = await axios.get(`${this.path}/${id}`);
        const data = response.data
        if (!data) return null
        return data
    }

    async POST(data: IPriceSection) {
        const response = await axios.post(this.path, data);
        return response.data
    }

    async PUT (data: IPriceSection[]) {
        const response = await axios.put(this.path, data);
        return response.data
    }

    async DELETE (id: string) {
        const response = await axios.delete(`${this.path}/${id}`);
        return response.data
    }
}

export const PRICE_API = new PRICE_API_CLASS()