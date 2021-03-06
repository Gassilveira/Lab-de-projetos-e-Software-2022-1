import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const getDefaultState = () => {
  return {
    name: useStorage("name", ""),
    sharingCode: useStorage("sharingCode", ""),
    hasClinic: useStorage("hasClinic", false),
  };
};

export const userStore = defineStore({
  id: "user",
  state: () => getDefaultState(),
  getters: {
    gethasClinic: (state) => state.hasClinic,
    getName: (state) => state.name,
    getSharingCode: (state) => state.sharingCode,
  },
  actions: {},
});
