import { mapState } from 'pinia';
import ViewExamsCard from '../../components/ViewExamsCard/ViewExamsCard.vue';
import Loading from '../../components/Loading/Loading.vue';
import { authStore } from '@/stores/auth';
export default {
  name: 'ViewExames',
  components: {
    ViewExamsCard,
    Loading,
  },
  metaInfo: {
    title: 'Visualização Exames',
    meta: [
      {
        property: 'og:title',
        content: 'Visualização Exames',
      },
    ],
  },
  computed: {
    ...mapState(authStore, ['token']),
  },
  data() {
    return {
      loading: false,
      exams: [],
      nextLoad: '',
    };
  },
  async beforeMount() {
    await this.getExamsData();
  },
  methods: {
    async getExamsData() {
      this.loading = true;
      const res = await this.$api.getExamsList(this.token);
      if (res.status === 200) {
        this.exams = res.data.data.data;
        this.nextLoad = res.data.data.nex_page_url;
      } else {
        //error
      }
      this.loading = false;
    },
  },
};
