import { AxiosRequestConfig } from 'axios';
import client from './client';

export default async function fetcher(url: string, config: AxiosRequestConfig) {
  const response = await client.get(url, config);

  return response.data;
}
