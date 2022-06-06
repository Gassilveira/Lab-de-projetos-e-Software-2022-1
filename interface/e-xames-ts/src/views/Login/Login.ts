import { useRoute } from 'vue-router'
import { inject } from 'vue'
import { Google } from 'universal-social-auth'
import { Providers } from 'universal-social-auth'

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
        function useAuthProvider (provider:string, proData:Record<string, unknown>| null) {
            const pro = <ProderT>proData

            const ProData = pro || <ProderT>Providers[provider]
            box.$Oauth.authenticate(provider, ProData).then((response) => {
                const rsp:{code:string} = <{code:string}>response
                if (rsp.code) {
                responseData.value.code = rsp.code
                responseData.value.provider = provider
                useSocialLogin()
                }
            }).catch((err:unknown) => {
                console.log(err)
            })
        }
      
      
      async function useLoginFirst (e: User) {
          // this sample of how to pust user data to my store
            const firstlogin: boolean = await box.$auth.firstlogin(e)
            if (firstlogin) {
              const apm: string = box.$appName
              $q.notify({
                color: 'positive',
                textColor: 'white',
                message: `Welcome To ${apm}`,
                icon: 'mdi-alarm'
              })
              await box.$router.push({ name: 'dashboard' })
              return
            }
          }
      
        function useSocialLogin () {
            // otp from input Otp form
            // hash user data in your backend with Cache or save to database
            const pdata = { code: responseData.value.code, otp: data.value.tok, hash: hash.value }
            box.$axios.post('/social-login/' + responseData.value.provider, pdata).then(async (response) => {
                // `response` data base on your backend config
              if (response.data.status === 444) {
                hash.value = response.data.hash
                fauth.value = true // Option show Otp form incase you using 2fa or any addition security apply to your app you can handle all that from here
      
              }else if (response.data.status === 445) {
                //do something Optional
      
              }else {
      
                await useLoginFirst(response.data.u)
              }
            }).catch((err:unknown) => {
      
              console.log(err)
            })
          }
      // Optional for Native App listen to the event `OauthCall` from your page component main.[js|ts] or app.[js|ts]
      /*
          emitter.on('OauthCall',  (e) => {
            if(e){
              responseData.value.code = e
              useSocialLogin()
            }
      
      
          })*/
          return {
            useAuthProvider
          }
    }    
}
