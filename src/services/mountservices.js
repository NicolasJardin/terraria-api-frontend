import { http } from './api'

export default {

  findAll: () => {
    return http.get('mounts');
  },

  findById: (mount) => {
    return http.get(`mounts/${mount.id}`, { data: mount });
  },

  save: (mount) => {
    return http.post('mounts', mount);
  },

  delete: (mount) => {
    return http.delete(`mounts/${mount.id}`, { data: mount });
  },

  update: (mount) => {
    return http.put(`mounts`, mount);
  }
}
