import axios from 'axios';

import { backendBaseUrl } from '../config';

export const apiClient = axios.create({
  baseURL: backendBaseUrl,
});
