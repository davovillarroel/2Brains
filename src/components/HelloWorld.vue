<template>
  <div class="hello">
     <section class="h-100 d-flex align-items-center">
          <div class="container">
              <div class="row">
                  <div class="col-12 col-md-6 mx-auto">
                      <span class="icon-davos"></span>
                      <h1>David Alfredo Villarroel Contreras</h1>
                      <p>Diseñador Gráfico/web</p>
                  </div>
                  
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    height: calc(100vh - 63px);
}
.hello h1{
    font-size: 28px;
    margin-top:16px;
}
.icon-davos{
    font-size:80px;
    color: #17a2b8;
}
</style>
