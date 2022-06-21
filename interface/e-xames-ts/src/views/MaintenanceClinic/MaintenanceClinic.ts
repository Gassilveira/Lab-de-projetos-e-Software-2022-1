import { authStore } from './../../stores/auth';
import { mapState } from 'pinia';

import Loading from '../../components/Loading/Loading.vue';

export default {
  name: 'MaintenanceClinic',
  components: { Loading },
  inject: ['callAlert'],
  metaInfo: {
    title: 'Manutenção de contas clínica',
    meta: [
      {
        property: 'og:title',
        content: 'Manutenção de contas clínica',
      },
    ],
  },
  async beforeMount() {
    await this.getClinicData();
  },
  methods: {
    async allowUser() {
      this.loading = true;
      const payload = {
        id: this.form.clinicID,
        cpf: this.allowForm.cpf,
      };
      const res = await this.$api.allowUserClinic(this.token, payload);
      if (res.status === 200) {
        this.allowForm.cpf = '';
        this.getClinicData();
        this.callAlert('success', 'Atualização executada com sucesso', 200);
      } else {
        const code = (res.data.data.code)? res.data.data.code : 500;
        this.callAlert('error', this.MESSAGES[code], code);
      }
      this.loading = false;
    },
    async deleteUser(event,user) {
      event.preventDefault();
      this.loading = true;
      const payload = {
        id: this.form.clinicID,
        cpf: user.cpf,
      };
      const res = await this.$api.deleteUserClinic(this.token, payload);
      if (res.status === 200) {
        this.getClinicData();
        this.callAlert('success', 'Atualização executada com sucesso', 200);
      } else {
        const code = (res.data.data.code)? res.data.data.code : 500;
        this.callAlert('error', this.MESSAGES[code], code);
      }
      this.loading = false;
    },
    async getClinicData() {
      this.loading = true;
      const res = await this.$api.getClinic(this.token);
      if (res.status === 200) {
        this.form.clinicID = res.data.data.clinic.clinic.id;
        this.form.cnpj = res.data.data.clinic.clinic.cnpj;
        this.form.name = res.data.data.clinic.clinic.name;
        this.allowedUsers = res.data.data.permission;
      } else {
        //error
      }
      this.loading = false;
    },
    async saveClinic(event) {
      event.preventDefault();
      if (!this.change.cnpj && !this.change.name) {
        return false;
      }
      this.loading = true;
      if (this.form.clinicID == '') {
        //erro
      } else {
        let payload = {
          id: this.form.clinicID,
        };

        this.change.cnpj ? (payload.cnpj = this.form.cnpj) : '';
        this.change.name ? (payload.name = this.form.name) : '';

        const res = await this.$api.updateClinic(this.token, payload);
        if (res.status === 200) {
          this.form.cnpj = res.data.data.cnpj;
          this.form.name = res.data.data.name;
          this.change.cpf = false;
          this.change.name = false;
          this.callAlert('success', 'Atualização executada com sucesso', 200);
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
    ...mapState(authStore, ['token']),
  },
  data() {
    return {
      loading: false,
      allowedUsers: [],
      allowForm: {
        cpf: ""
      },
      form: {
        clinicID: '',
        cnpj: '',
        name: '',
      },
      change: {
        cnpj: false,
        name: false,
      },
    };
  },
};
