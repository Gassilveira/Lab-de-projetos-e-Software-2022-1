import Loading from '../../components/Loading/Loading.vue';
import { authStore } from './../../stores/auth';
import { mapState } from 'pinia';

export default {
  name: 'Uploadexames',
  metaInfo: {
    title: 'Upload exames',
    meta: [
      {
        property: 'og:title',
        content: 'Upload exames',
      },
    ],
  },
  components: {
    Loading,
  },
  computed: {
    ...mapState(authStore, ['token']),
  },
  async beforeMount() {
    await this.getClinicData();
  },
  data() {
    return {
      loading: false,
      form: {
        clinicID: '',
        patientCPF: '',
        date: '',
        specialty: '',
        desc: '',
        file: '',
      },
    };
  },
  methods: {
    async getClinicData() {
      this.loading = true;
      const res = await this.$api.getClinic(this.token);
      if (res.status === 200) {
        this.form.clinicID = res.data.data.clinic.id;
      } else {
        //error
      }
      this.loading = false;
    },
    async sendExam(event) {
      event.preventDefault();
      let payload = new FormData();
      payload.append('exam', this.form.file, this.form.file.name);
      payload.append('id', this.form.clinicID);
      payload.append('cpf', this.form.patientCPF);
      payload.append('specialty', this.form.specialty);
      payload.append('exam_desc', this.form.desc);
      payload.append('exam_date', this.dateConversion(this.form.date));
      this.loading = true;
      const res = await this.$api.sendExam(this.token, payload);
      if (res.status === 200) {
        this.form = {
          clinicID: '',
          patientCPF: '',
          date: '',
          specialty: '',
          desc: '',
          file: '',
        }
      } else {
        //error
      }
      this.loading = false;
    },
    saveFile(event){
      event.preventDefault();
      this.form.file = event.target.files[0];
    },
  },
};
