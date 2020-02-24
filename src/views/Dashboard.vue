<template>
    <div id="Dashboard">
        <section class="h-100 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 mx-auto">
                        <span class="icon-davos"></span>
                        <h1>Bienvenido a tu intranet</h1>
                        <p>Aquí podrás conocer a tus colaboradores y obtener los datos para poder contactar con ellos</p>
                        <router-link class="btn btn-sm btn-success" to="/colaboradores">Conocer Colaboradores</router-link>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>

</template>

<style scoped>
#Dashboard {
    height: calc(100vh - 63px);
}
.icon-davos{
    font-size:80px;
    color: #17a2b8;
}
</style>

<script>
export default {
    name: 'Dashboard'
}
</script>