import { createContext } from 'react';
import ApiService from '../../services/api-service';
import { BACKEND_URL } from '../../const';

const ApiServiceContext = createContext<ApiService>(new ApiService(BACKEND_URL));

const { Provider: ApiServiceProvider } = ApiServiceContext;

export {
  ApiServiceContext,
  ApiServiceProvider
};
