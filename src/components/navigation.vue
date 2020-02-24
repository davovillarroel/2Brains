<template>
    <div id="navIndex">
        <section>
            <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
                <template v-if="user">
                    <router-link class="navbar-brand" to="/dashboard">
                        <i class="icon-davos"></i>
                    </router-link>
                </template>
                <template v-else>
                    <router-link class="navbar-brand" to="/">
                        <i class="icon-davos"></i>
                    </router-link>
                </template>
                

                <template v-if="user">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNav" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/dashboard"><span class="icon-user"></span> {{user.email}}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/colaboradores">Colaboradores</router-link>
                            </li>
                            <li class="nav-item">
                                <a href="" class="btn btn-sm btn-danger" @click.prevent="logout"> <span class="icon-power"></span> Cerrar Sesión</a>
                            </li>
                        </ul>
                    </div>
                </template>
                <template v-else>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNav" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="btn btn-sm btn-success" to="/login">Iniciar Sesión</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="btn btn-sm btn-outline-success" to="/register">Registrarse</router-link>
                            </li>
                        </ul>
                    </div>
                </template>
                
            </nav>
        </section>
        
    </div>
</template>

<style scoped>

.nav-item{
    padding: .5rem 1rem;
}
.nav-link { 
    display: inline;
    padding: 0;
    vertical-align: middle;
}
.btn{
    min-width: 10rem;
}
.navbar-brand {
    margin-left: 1rem;
}

.navbar-brand .icon-davos{
    font-size: 40px;
    transform: all 4ms ease;
}
.navbar-brand:hover .icon-davos{
   transform: rotate(45deg);
   -webkit-transform: rotate(45deg);
   -moz-transform: rotate(45deg);
   -o-transform: rotate(45deg);
}

</style>

<script>
    import '@/firebase/init.js'
    import firebase from 'firebase'
    

    export default {
        name: 'navIndex',
        data(){
            return{
                user: null
            }
        },
        methods: {
            logout(){
                firebase.auth().signOut().then(() =>{
                    this.$router.push({path: '/login'})
                })
            },
        },
        created(){
            firebase.auth().onAuthStateChanged(user => {
                if (user) { 
                    this.user = user  
                }else{
                    this.user = null
                }
            })
        }
        
    }
</script>