import { mapState } from 'pinia';
import ViewExamsCard from '../../components/ViewExamsCard/ViewExamsCard.vue';
import Loading from '../../components/Loading/Loading.vue';
import { authStore } from '@/stores/auth';
export default {
  inject: ['callAlert'],
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
  mounted(){
    //this.callAlert('success','Success 200','This is the information of something you may know Success.');
  },
  methods: {
    async getExamsData() {
      this.loading = true;
      const res = await this.$api.getExamsList(this.token);
      if (res.status === 200) {
        this.exams = res.data.data.data;
        this.nextLoad = res.data.data.next_page_url;
      } else {
        const code = (res.data.data.code)? res.data.data.code : 500;
        this.callAlert('error', this.MESSAGES[code], code);
      }
      this.loading = false;
    },
    async loadMore(event) {
      event.preventDefault();
      const res = await this.$api.getMoreExamsList(this.token, this.nextLoad);
      if (res.status === 200) {
        this.exams.push(...res.data.data.data);
        this.nextLoad = res.data.data.next_page_url
          ? res.data.data.next_page_url
          : '';
      } else {
        const code = (res.data.data.code)? res.data.data.code : 500;
        this.callAlert('error', this.MESSAGES[code], code);
      }
    },
  },
};
