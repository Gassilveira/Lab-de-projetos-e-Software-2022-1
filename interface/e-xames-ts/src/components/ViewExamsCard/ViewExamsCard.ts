export default {
  name: 'ViewExamsCard',
  el: '#ViewExamsCard',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.url)
  },
};
