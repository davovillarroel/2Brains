<template>
   <div id="card">
       <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-3">
                    <div class="radius">
                        <img :src="picture" class="card-img" :alt="colabName">
                    </div>
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title mb-0">{{colabName}} {{colabLastName}}</h5>
                        <p class="card-text mb-0">{{email}}</p>
                        <p class="card-text mb-0"><small class="text-muted">{{phone}}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<style  scoped>

    .radius{
        width: 100%;
        max-width:80px ;
        height: 100%;
        max-height:80px ;
        border-radius: 100%;
        overflow: hidden;
    }
    .card {
        word-wrap: inherit;
        text-align: left;
        padding: 8px;
    }
    .card-text{
        font-size: 12px;
    }
    .mb-0{
        margin-bottom: 0px;
    }

</style>

<script>
export default {
    props: {
        colabName: String,
        colabLastName: String,
        email: String,
        phone: Number,
        picture: String
    },
    name: 'card'
}
</script>