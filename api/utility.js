import { API_URLS } from '../constants';

const getBaseApiUrl = () => {
  let apiUrl = '';
  if (process.env.NODE_ENV === 'production') {
    apiUrl = API_URLS.production;
  } else {
    apiUrl = API_URLS.development;
  }
  return apiUrl;
};

export const baseApiUrl = getBaseApiUrl();
