'use client';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PRICE_DATA } from '../data/priceData';
import { IPriceSection } from '../types/IPrice';

export const SetupMocks = () => {
  const mock = new MockAdapter(axios);

  // Тестовые данные
  const GET_DATA: IPriceSection[] = PRICE_DATA;

  // Настройка заглушек

  // Настройка заглушки для GET-запроса
  mock.onGet('/api/price').reply(200, GET_DATA);

  // Настройка заглушки для GET-запроса по ID
  mock.onGet(/\/api\/price\/(.+)/).reply((config) => {
    const id = config.url?.split('/').pop();
    const item = PRICE_DATA[Number(id)];
    return item ? [200, item] : [404, { message: 'Item not found' }];
  });

  // Настройка заглушки для POST-запроса
  mock.onPost('/api/price').reply((config) => {
    // Получение данных запроса
    const requestData = JSON.parse(config.data);
    // Возврат данных и статус кода
    return [201, requestData];
  });

  // Настройка заглушки для PUT-запроса
  mock.onPut('/api/price').reply((config) => {
    // Получение данных запроса
    const requestData = JSON.parse(config.data);
    // Возврат данных и статус кода
    return [200, requestData];
  });

  // Настройка заглушки для DELETE-запроса
  mock.onDelete(/\/api\/price\/(.+)/).reply((config) => {
    // Получение данных запроса
    const id = config.url?.split('/').pop();
    // Возврат данных и статус кода
    return [200, id];
  });

  return null;
};
