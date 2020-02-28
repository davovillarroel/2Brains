<template>
    <div id="footerApp">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p>Proyecto creado con fines de postulación, febrero 2020</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style  scoped>
#footerApp{
    width: 100%;
    height: auto;
    position:fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
}
#footerApp p{
    margin-bottom: 8px;
    margin-top: 8px;
}
</style>
<script>
export default {
    name:'footerApp'
}
</script>