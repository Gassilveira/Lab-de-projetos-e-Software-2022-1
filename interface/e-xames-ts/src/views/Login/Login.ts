import { userStore } from "./../../stores/user";
import { authStore } from "./../../stores/auth";
import { useRoute } from "vue-router";
import Loading from "../../components/Loading/Loading.vue";
import { mapState } from "pinia";

export default {
  name: "LoginView",
  el: "#LoginView",
  inject: ['callAlert'],
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
        user.sharingCode = res.data.data.share_code;
        location.reload();
      } else {
        this.callAlert('error', "Falha no login tente novamente", 400);
      }
      this.isLoading = false;
    },
  },
  setup() {
    return{}
  },
};
