/* eslint-disable prettier/prettier */
import { authStore } from "./stores/auth";
import { userStore } from "./stores/user";
import { useColorMode, useCycleList } from "@vueuse/core";
import ToggleSwitch from "./components/ToggleSwitch.vue";
import { mapState } from "pinia";

export default {
  name: "App",
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
  computed: {
    ...mapState(authStore, ["isLoggedIN", "token", "expireDate"]),
    ...mapState(userStore, ["name", "hasClinic"]),
  },
  data() {
    return {
      menu: [
        /*{
            href: "",
            title: "Mode",
            icon: "fa fa-solid fa-toggle-off"
            
          },*/
        {
          component: ToggleSwitch,
          // props: componentProps
          hidden: true,
          // hiddenOnCollapse: true
        },
        {
          href: "/",
          title: "Home",
          icon: "fa fa-solid fa-house-chimney-user",
        },
        {
          href: "",
          title: "Usuário",
          icon: "fa-solid fa-circle-user",
          hidden: this.getLoginState ? false : true,
          child: [
            {
              href: "/manutencao/usuario",
              title: "Meu usuário",
              icon: "fa fa-solid fa-address-card",
            },
            {
              href: "/exames",
              title: "Visualizar Exames",
              icon: "fa fa-solid fa-file-waveform",
            },
          ],
        },
        {
          href: "",
          title: "Clinica",
          icon: "fa-solid fa-circle-h",
          hidden:
            this.gethasClinic && this.getLoginState ? false : true,
          child: [
            {
              href: "/manutencao/clinica",
              title: "Minha Clinica",
              icon: "fa fa-solid fa-house-chimney-medical",
            },
            {
              href: "/exames/enviar",
              title: "Enviar exames",
              icon: "fa fa-solid fa-file-arrow-down",
            },
          ],
        },
      ],
      collapsed: true,
      userTheme: "light-theme",
    };
  },
  methods: {
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
    toggleTheme() {
      const activeTheme = "light-theme"; //localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getTheme() {
      return "light-theme"; //localStorage.getItem("user-theme");
    },
    setTheme(theme) {
      //localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    onItemClick(e, i) {
      if (i.title === "Mode") {
        const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: light)"
        ).matches;

        document.documentElement.className = "dark-theme";
        this.next();
      }
    },
    onCollapse(c) {
      this.collapsed = c;
    },
  },
  setup() {
    const mode = useColorMode({
      attribute: "class",
      modes: {
        dark: "dark-theme",
        light: "light-theme",
      },
    });
    const user = userStore();
    const auth = authStore();
    const { next } = useCycleList(["dark", "light"], { initialValue: mode });

    return {
      mode,
      next,
      getLoginState: auth.getLoginState,
      gethasClinic: user.gethasClinic

    };
  },
};
