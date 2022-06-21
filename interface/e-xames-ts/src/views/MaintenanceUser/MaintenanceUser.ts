import { authStore } from "./../../stores/auth";
import { mapState } from "pinia";

import Loading from "../../components/Loading/Loading.vue";

export default {
  name: "MaintenanceUser",
  inject: ['callAlert'],
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
        this.form.userID = res.data.data.id;
        this.form.cpf = res.data.data.cpf;
        this.form.name = res.data.data.name;
        this.form.email = res.data.data.email;
        this.form.birthday = res.data.data.birthday;
      } else {
        //error
      }
      this.loading = false;
    },
    async saveUser(event) {
      event.preventDefault();
      if (
        !this.change.cpf &&
        !this.change.name &&
        !this.change.email &&
        !this.change.birthday
      ) {
        return false;
      }
      this.loading = true;
      if (this.form.userID == "") {
        const code = 500;
        this.callAlert('error', this.MESSAGES[code], code);
      } else {
        const payload = {
          id: this.form.userID,
        };

        this.change.cpf ? (payload.cpf = this.form.cpf) : "";
        this.change.name ? (payload.name = this.form.name) : "";
        this.change.email ? (payload.email = this.form.email) : "";
        this.change.birthday ? (payload.birthday = this.form.birthday) : "";

        const res = await this.$api.updateUser(this.token, payload);
        if (res.status === 200) {
          this.form.cpf = res.data.data.cpf;
          this.form.name = res.data.data.name;
          this.form.email = res.data.data.email;
          this.form.birthday = res.data.data.birthday;
          this.change.birthday = false;
          this.change.cpf = false;
          this.change.email = false;
          this.change.name = false;
        } else {
          const code = (res.data.data.code)? res.data.data.code : 400;
          this.callAlert('error', this.MESSAGES[code], code);
        }
      }
      this.loading = false;
    },
    async saveUserNewPassword(event) {
      event.preventDefault();
      if (
        (this.form.password == "" && this.form.cPassword == "") ||
        this.form.password != this.form.cPassword
      ) {
        return false;
      }
      this.loading = true;
      if (this.form.userID == "") {
        //erro
      } else {
        const payload = {
          id: this.form.userID,
          password: this.form.password,
          c_password: this.form.cPassword,
        };

        const res = await this.$api.updateUserPassword(this.token, payload);
        if (res.status === 200) {
          this.callAlert('success', 'Senha atualizada com sucesso', 200);
        } else {
          const code = (res.data.data.code)? res.data.data.code : 400;
          this.callAlert('error', this.MESSAGES[code], code);
        }
      }
      this.loading = false;
    },
    registerChange(input) {
      this.change[input] = true;
    },
  },
  computed: {
    ...mapState(authStore, ["token"]),
  },
  data() {
    return {
      loading: false,
      form: {
        userID: "",
        cpf: "",
        name: "",
        birthday: "",
        email: "",
        password: "",
        cPassword: "",
      },
      change: {
        userID: false,
        cpf: false,
        name: false,
        birthday: false,
        email: false,
      },
    };
  },
  setup() {
    return {};
  },
};
