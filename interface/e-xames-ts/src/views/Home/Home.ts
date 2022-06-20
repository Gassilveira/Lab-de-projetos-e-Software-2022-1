import { userStore } from './../../stores/user';
import { mapState } from "pinia";
import Loading from "../../components/Loading/Loading.vue";

export default {
  name: "HomeView",
  el: "#HomeView",
  props: {},
  computed: {
    ...mapState(userStore, ["name", "sharingCode"]),
  },
  components: {
    Loading,
  },
  data(){
    return {
      appURL:  import.meta.env.VUE_APP_URL
    }
  },
  methods: {},
  setup() {
    return {
    };
  },
};
