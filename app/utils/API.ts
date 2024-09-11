import { BASE_URL } from '../Сonstants/pathsConsts';
import { REVALIDATE_TIME } from '../Сonstants/Constants';
import type { IGroupPrice } from '../types/IPrice';
import type { IError } from '../types/IError';

// Получение прайс-листа на сервере
export async function fetchPrices(): Promise<IGroupPrice[] | IError> {
  try {
    const response = await fetch(`${BASE_URL}/api/prices`, {
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!response.ok) {
      // Обработка ошибок HTTP
      const error = await response.json();
      return { error: error.error || 'Не удалось получить данные о ценах.' };
    }
    // Успешный ответ
    return await response.json();
  } catch {
    // Обработка сетевых ошибок
    return { error: 'Не удалось подключиться к серверу.' };
  }
}

export async function fetchPriceById(
  id: string
): Promise<IGroupPrice | IError> {
  try {
    const response = await fetch(`${BASE_URL}/api/prices/${id}`, {
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!response.ok) {
      // Обработка ошибок HTTP
      const error = await response.json();
      return { error: error.error || 'Не удалось получить данные о ценe.' };
    }
    // Успешный ответ
    return await response.json();
  } catch {
    // Обработка сетевых ошибок
    return { error: 'Не удалось подключиться к серверу.' };
  }
}

export async function fetchCreatePrice(data: IGroupPrice) {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/prices`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!response.ok) {
      // Обработка ошибок HTTP
      const error = await response.json();
      return { error: error.error || 'Не удалось получить данные о ценах.' };
    }
    // Успешный ответ
    return await response.json();
  } catch {
    // Обработка сетевых ошибок
    return { error: 'Не удалось подключиться к серверу.' };
  }
}

export async function fetchUpdatePrice(id: string, data: IGroupPrice) {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/prices/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!response.ok) {
      // Обработка ошибок HTTP
      const error = await response.json();
      return { error: error.error || 'Не удалось получить данные о ценах.' };
    }
    // Успешный ответ
    return await response.json();
  } catch {
    // Обработка сетевых ошибок
    return { error: 'Не удалось подключиться к серверу.' };
  }
}

export async function fetchDeletePrice(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/prices/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!response.ok) {
      // Обработка ошибок HTTP
      const error = await response.json();
      return { error: error.error || 'Не удалось получить данные о ценах.' };
    }
    // Успешный ответ
    return await response.json();
  } catch {
    // Обработка сетевых ошибок
    return { error: 'Не удалось подключиться к серверу.' };
  }
}
