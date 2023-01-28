import axios from 'axios';

// TODO env
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const api = {
  getUsers() {
    const response = instance.get('users');

    return response.then(res => res.data);
  },
  getPhotos(data: number) {
    const response = instance.get('photos', {params: {albumId: data}});

    return response.then(res => res.data);
  },
};
