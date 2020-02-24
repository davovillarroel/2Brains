<template>
    <div id="Register">
        <section class="h-100 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12"><h1>Crea una cuenta</h1></div>
                    <form action="#" @submit.prevent="register" class="col-12 col-sm-6 mx-auto">
                        
                        <div class="form-group d-flex justify-content-left flex-wrap">
                            <label for="user-email">Correo Electronico</label>
                            <input type="email" class="form-control form-control-sm" id="user-email" aria-describedby="emailHelp" placeholder="example@example.cl" v-model="email">
                            <small id="emailHelp" class="fomr-text text-muted">Nunca revelaremos tu correo electronico o tus datos personales con nadie.</small>
                        </div>
                        <div class="form-group d-flex justify-content-left flex-wrap">
                            <label for="user-password">Contraseña</label>
                            <input type="password" class="form-control form-control-sm" id="user-password" v-model="password">
                        </div>

                        <div class="alert alert-danger" v-if="warning"><small>{{warning}}</small></div>
                        
                        <button type="submit" class="btn btn-success">Registrarme</button>
                    </form>
                    
                </div>
            </div>
        </section>
    </div> 
</template>

<style scoped>

#Register {
    height: calc(100vh - 63px);
}

</style>

<script>
import '@/firebase/init.js'
import firebase from 'firebase'
export default {    
    data () {
        return{
            email:'',
            password:'',
            warning:''
        } 
    },
    name:'Register',
    methods:{
        register(){
            this.warning = ''
            if (this.email && this.password){
                //enviamos formulario
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(user =>{
                        this.email = ''
                        this.password = ''
                        this.$router.push({path: '/dashboard'})
                        console.log(user);
                    }).catch(err => {
                        this.warning = err.message
                    })
            }else{
                //Mostramos warning
                this.warning = 'Todos los campos son requeridos'
            }
        }
    }
}
</script>