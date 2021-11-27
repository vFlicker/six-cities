import { createContext } from 'react';
import { AxiosInstance } from 'axios';
import createApiService from '../../services/api-service';

const ApiServiceContext = createContext<AxiosInstance>(createApiService());

const { Provider: ApiServiceProvider } = ApiServiceContext;

export {
  ApiServiceContext,
  ApiServiceProvider,
};
