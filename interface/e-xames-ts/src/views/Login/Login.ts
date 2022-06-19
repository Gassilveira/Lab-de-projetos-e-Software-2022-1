import { userStore } from './../../stores/user';
import { authStore } from './../../stores/auth';
import { useRoute } from 'vue-router'
import Loading from '../../components/Loading/Loading.vue'

export default {
    name: "LoginView",
    el: "#LoginView",
    props:{
    },
    components: {
        Loading
    },
    beforeMount(){
        const redirect = useRoute().redirectedFrom;
        if(redirect != undefined){
            this.redirectTo = redirect;
        }
    },
    mounted(){
    },
    data(){
        return {
            isLoading: false,
            email: "",
            password: "",
            redirectTo: { name:'home' },
        }
    },
    methods:{
        async login(){
            const auth = authStore()
            const user = userStore()
            this.isLoading = true;
            const payload = {
                email: this.email,
                password: this.password
            }
            const res = await this.$api.login(payload);
            if(res.status === 200){
                auth.isLoggedIN = true;
                auth.token = res.data.data.token;
                user.name = res.data.data.name;
                user.hasClinic = res.data.data.has_clinic;
                this.$router.replace({name: 'home'});
            }else{
                //error
            }
            console.log(res);
            this.isLoading = false;
        }
    },
    setup() {
    }    
}
