import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const getDefaultState = () => {
  return {
    isLoggedIN: useStorage("isLoggedIN", false),
    token: useStorage("token", ""),
    expireDate: useStorage("expireDate", ""),
  };
};

export const authStore = defineStore({
  id: "auth",
  state: () => getDefaultState(),
  getters: {
    getLoginState: (state) => state.isLoggedIN,
    getToken: (state) => state.token,
    getExpireDate: (state) => state.expireDate,
    getIsValidToken: (state) => {
      if (state.token != "" && state.expireDate != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {
  },
});
