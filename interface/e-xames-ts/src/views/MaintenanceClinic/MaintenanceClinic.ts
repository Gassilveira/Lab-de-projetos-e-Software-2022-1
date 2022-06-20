import { authStore } from './../../stores/auth';
import { mapState } from 'pinia';

import Loading from '../../components/Loading/Loading.vue';

export default {
  name: 'MaintenanceClinic',
  components: { Loading },
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
    async getClinicData() {
      this.loading = true;
      const res = await this.$api.getClinic(this.token);
      if (res.status === 200) {
        this.form.clinicID = res.data.data.clinic.id;
        this.form.cnpj = res.data.data.clinic.cnpj;
        this.form.name = res.data.data.clinic.name;
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
        } else {
          //error
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
