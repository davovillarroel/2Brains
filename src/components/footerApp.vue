<template>
    <div id="footer">
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
#footer{
    width: 100%;
    height: 40px;
    position:fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
}
#footer p{
    margin-bottom: 0;
    margin-top: 8px;
}
</style>
<script>
export default {
    name:'footer'
}
</script>