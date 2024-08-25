import axios from "axios";
import { IPriceSection } from "../types/IPrice";

import { BASE_URL } from "../Сonstants/pathsConsts";
import { REVALIDATE_TIME } from "../Сonstants/Constants";

import type { IGroupPrice } from "../types/IPrice";
import type { IError } from "../types/IError";

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


// Получение прайс-листа на сервере
export async function fetchPrices(): Promise<IGroupPrice[] | IError> {
  try {
    const response = await fetch(`${BASE_URL}/api/prices`, { next: { revalidate: REVALIDATE_TIME } });
    if (!response.ok) {
      // Обработка ошибок HTTP
      const error = await response.json();
      return { error: error.error || "Не удалось получить данные о ценах." };
    }
    // Успешный ответ
    return await response.json();
  } catch (error) {
    // Обработка сетевых ошибок
    return { error: "Не удалось подключиться к серверу." };
  }
}
