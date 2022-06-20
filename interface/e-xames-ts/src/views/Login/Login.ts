import { userStore } from "./../../stores/user";
import { authStore } from "./../../stores/auth";
import { useRoute } from "vue-router";
import Loading from "../../components/Loading/Loading.vue";
import { mapState } from "pinia";

export default {
  name: "LoginView",
  el: "#LoginView",
  props: {},
  computed: {
    ...mapState(authStore, ["isLoggedIN", "token", "expireDate"]),
    ...mapState(userStore, ["name", "hasClinic"]),
  },
  components: {
    Loading,
  },
  beforeMount() {
    const redirect = useRoute().redirectedFrom;
    if (redirect != undefined) {
      this.redirectTo = redirect;
    }
  },
  mounted() {
    if (this.isLoggedIN) {
      this.$router.replace({ name: "home" });
    }
  },
  data() {
    return {
      isLoading: false,
      email: "",
      password: "",
      redirectTo: { name: "home" },
    };
  },
  methods: {
    async login() {
      const auth = authStore();
      const user = userStore();
      this.isLoading = true;
      const payload = {
        email: this.email,
        password: this.password,
      };
      const res = await this.$api.login(payload);
      if (res.status === 200) {
        auth.isLoggedIN = true;
        auth.token = res.data.data.token;
        user.name = res.data.data.name;
        user.hasClinic = res.data.data.has_clinic;
      } else {
        //error
      }
      console.log(res);
      this.isLoading = false;
      location.reload();
    },
  },
  setup() {
    return{}
  },
};
