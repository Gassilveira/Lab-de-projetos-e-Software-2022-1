import { authStore } from "./../../stores/auth";
import { mapState } from "pinia";

import Loading from "../../components/Loading/Loading.vue";

export default {
  name: "MaintenanceUser",
  components: {
    Loading,
  },
  metaInfo: {
    title: "Manutenção de contas usuário",
    meta: [
      {
        property: "og:title",
        content: "Manutenção de contas usuário",
      },
    ],
  },
  async beforeMount() {
    await this.getUserData();
  },
  methods: {
    async getUserData() {
      this.loading = true;
      const res = await this.$api.getUser(this.token);
      if (res.status === 200) {
        this.form.cpf = res.data.data.cpf;
        this.form.name = res.data.data.name;
        this.form.email = res.data.data.email;
        this.form.birthday = res.data.data.birthday;
      } else {
        //error
      }
      this.loading = false;
    },
  },
  computed: {
    ...mapState(authStore, ["token"]),
  },
  data() {
    return {
      loading: false,
      form: {
        cpf: "",
        name: "",
        birthday: "",
        email: "",
        password: "",
        cPassword: "",
      },
    };
  },
  setup() {
    return {
    };
  },
};
