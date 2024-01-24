import axios from 'axios';

const BASE_URL = 'http://localhost:3200/notes';

export class NoteApi {
  static create = async (note) => {
    return (await axios.post(`${BASE_URL}`, note)).data;
  };

  static fetchAll = async () => {
    return (await axios.get(`${BASE_URL}`)).data;
  };

  static fetchById = async (noteId) => {
    return (await axios.get(`${BASE_URL}/${noteId}`)).data;
  };

  static deleteById = async (noteId) => {
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  };

  static updateById = async (id, values) => {
    return (await axios.patch(`${BASE_URL}/${id}`, values)).data;
  };
}
