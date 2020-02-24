<template>
    <div id="navIndex">
        <section>
            <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
                <a href="" class="navbar-brand">
                    <img src="../assets/logo.png" width="30" height="30" alt="My-app">
                </a>

                <template v-if="user">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarNav" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about">{{user.email}}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about">Colaboradores</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="btn btn-sm btn-success" to="/dashboard">Dashboard</router-link>
                            </li>
                            <li class="nav-item">
                                <a href="" class="btn btn-sm btn-outline-danger" @click.prevent="logout">Cerrar Sesión</a>
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
                                <router-link class="nav-link" to="/about">About</router-link>
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