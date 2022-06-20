import { userStore } from './../../stores/user';
import { mapState } from "pinia";
import Loading from "../../components/Loading/Loading.vue";

export default {
  name: "HomeView",
  el: "#HomeView",
  props: {},
  computed: {
    ...mapState(userStore, ["name"]),
  },
  components: {
    Loading,
  },
  methods: {},
  setup() {
    return {};
  },
};
