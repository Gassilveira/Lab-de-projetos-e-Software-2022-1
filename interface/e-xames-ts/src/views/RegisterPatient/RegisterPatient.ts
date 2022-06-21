import { authStore } from './../../stores/auth';
import { mapState } from 'pinia';

import Loading from '../../components/Loading/Loading.vue';

export default {
  name: 'MaintenanceUser',
  inject: ['callAlert'],
  components: {
    Loading,
  },
  metaInfo: {
    title: 'Registro de contas usuário',
    meta: [
      {
        property: 'og:title',
        content: 'Registro de contas usuário',
      },
    ],
  },
  methods: {
    async register(event) {
      event.preventDefault();
      this.loading = true;
      const payload = {
        name: this.form.name,
        cpf: this.form.cpf,
        email: this.form.email,
      };
      const res = await this.$api.registerPatient(this.token, payload);
      if (res.status === 200) {
        this.callAlert('success', 'Paciente cadastrado com sucesso', 200);
      } else {
        const code = res.data.data.code ? res.data.data.code : 400;
        this.callAlert('error', this.MESSAGES[code], code);
      }
      this.loading = false;
    },
  },
  computed: {
    ...mapState(authStore, ['token']),
  },
  data() {
    return {
      loading: false,
      form: {
        cpf: '',
        name: '',
        email: '',
      },
    };
  },
  setup() {
    return {};
  },
};
