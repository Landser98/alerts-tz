import { defineStore } from "pinia";

interface MainState {
  activeMenu: boolean;
}

export const useMainStore = defineStore("main", {
  state: (): MainState => ({
    activeMenu: false,
  }),
  actions: {
    menuToggle() {
      this.activeMenu = !this.activeMenu;
    },
  },
});
