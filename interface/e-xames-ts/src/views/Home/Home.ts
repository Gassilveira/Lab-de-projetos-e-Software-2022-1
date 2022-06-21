import { authStore } from '@/stores/auth';
import { userStore } from './../../stores/user';
import { mapState } from 'pinia';
import Loading from '../../components/Loading/Loading.vue';

export default {
  name: 'HomeView',
  el: '#HomeView',
  inject: ['callAlert'],
  props: {},
  computed: {
    ...mapState(authStore, ['token']),
    ...mapState(userStore, ['name', 'sharingCode']),
  },
  components: {
    Loading,
  },
  data() {
    return {
      appURL: import.meta.env.VUE_APP_URL,
    };
  },
  methods: {
    async toggleShare(event) {
      const auth = userStore();
      event.preventDefault();
      if (this.sharingCode != '' && this.toggleShare != null) {
        const res = await this.$api.unshareHistory(this.token);
        if (res.status == 200) {
          auth.sharingCode = '';
          this.callAlert(
            'success',
            'Compartilhamento desabilitador com sucesso!',
            200,
          );
        } else {
          const code = res.data.data.code ? res.data.data.code : 500;
          this.callAlert('error', this.MESSAGES[code], code);
        }
      } else {
        const res = await this.$api.shareHistory(this.token);
        if (res.status == 200) {
          auth.sharingCode = res.data.data.code;
          this.callAlert(
            'success',
            'Compartilhamento habilitado com sucesso!',
            200,
          );
        } else {
          const code = res.data.data.code ? res.data.data.code : 500;
          this.callAlert('error', this.MESSAGES[code], code);
        }
      }
    },
  },
  setup() {
    return {};
  },
};
