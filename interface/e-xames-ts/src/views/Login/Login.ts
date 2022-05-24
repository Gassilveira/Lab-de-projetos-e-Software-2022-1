import { useRoute } from 'vue-router'

export default {
    name: "LoginView",
    el: "#LoginView",
    props:{
    },
    components: {

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
            redirectTo: { name:'home' },
        }
    },
    methods:{
        
    },
    setup() {
    }    
}
