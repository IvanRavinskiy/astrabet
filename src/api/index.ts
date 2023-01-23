import axios from 'axios';

// TODO env
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const api = {
  getUsers() {
    return instance.get('users');
  },
  getPhotos(data: any) {
    return instance.get('photos', {params: data});
  },
};
