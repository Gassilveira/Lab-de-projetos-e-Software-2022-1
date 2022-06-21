import axios from 'axios';
const baseUrl = import.meta.env.VUE_APP_API_URL;

const headers = {
  Accept: 'application/json',
};

const headersAutorization = {
  Authorization: 'Bearer ',
  Accept: 'application/json',
};

const instance = axios.create();
const api = {
  async login(payload) {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await axios
      .post(baseUrl + 'login', payload, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async logout(token) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await axios
      .get(baseUrl + 'logout', config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async getUser(token) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(baseUrl + 'user', config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async updateUser(token, payload) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .put(baseUrl + 'user/update', payload, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async updateUserPassword(token, payload) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .put(baseUrl + 'user/update/password', payload, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async getExamsList(token) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(baseUrl + 'exams', config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },
  async getMoreExamsList(token, url) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(url, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async getPublicExam(code) {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(baseUrl + 'exams/history/' + code, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },
  async getMorePublicExam(url) {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(url, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async getClinic(token) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(baseUrl + 'clinic', config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async updateClinic(token, payload) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .put(baseUrl + 'clinic/update', payload, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },
  async sendExam(token, payload) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    };
    const res = await instance
      .post(baseUrl + 'clinic/send/exam', payload, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },

  async shareHistory(token) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(baseUrl + 'exams/share', config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },
  async unshareHistory(token, payload) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .get(baseUrl + 'exams/unshare', config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },
  async allowUserClinic(token, payload) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .post(baseUrl + 'clinic/add/permission', payload, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },
  async deleteUserClinic(token, payload) {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
      },
    };
    const res = await instance
      .post(baseUrl + 'clinic/delete/permission', payload, config)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
    return res;
  },
};

export { api };
