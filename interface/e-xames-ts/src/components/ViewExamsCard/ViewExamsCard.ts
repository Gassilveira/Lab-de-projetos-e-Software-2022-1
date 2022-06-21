import { authStore } from './../../stores/auth';
import { mapState } from 'pinia';

export default {
  name: 'ViewExamsCard',
  el: '#ViewExamsCard',
  inject: ['callAlert'],
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(authStore, ['token']),
  },
  data() {
    return {
      baseURL: import.meta.env.VUE_APP_API_URL,
    };
  },
  methods: {
    async openfile(event, url) {
      event.preventDefault();
      const res = null;
      if (this.token) {
        fetch(this.baseURL + 'exams/get/' + url, {
          headers: {
            Authorization: 'Bearer ' + this.token,
            Accept: 'application/json',
          },
        })
          .then(response => response.blob())
          .then(blob => {
            const _url = window.URL.createObjectURL(blob);
            window.open(_url, '_blank').focus(); // window.open + focus
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        fetch(this.baseURL + 'exams/get/' + url, {
          headers: {
            Authorization: 'Bearer ' + this.token,
            Accept: 'application/json',
          },
        })
          .then(response => response.blob())
          .then(blob => {
            if (blob.type != 'application/json') {
              const _url = window.URL.createObjectURL(blob);
              window.open(_url, '_blank').focus(); // window.open + focus
            } else {
              this.callAlert(
                'error',
                'Não foi possivel abrir este arquivo',
                500,
              );
            }
          })
          .catch(err => {
            console.log(err);
          });
      }

      /*
       target="_blank"
      :href="baseURL + 'exams/get/' + url"
      */
    },
  },
};
