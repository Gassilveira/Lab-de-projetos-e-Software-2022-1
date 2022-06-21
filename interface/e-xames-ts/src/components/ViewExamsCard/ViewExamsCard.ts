export default {
  name: 'ViewExamsCard',
  el: '#ViewExamsCard',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      baseURL: import.meta.env.VUE_APP_API_URL,
    }
  }
};
