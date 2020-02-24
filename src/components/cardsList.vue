<template>
    <div id="cardList">
        <section>
            <div class="container">
                <div class="row">
                    <h1 class="col-12 text-center">Conozca a sus colaboradores</h1>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4" v-for="(data, index) in colaboradores" :key="index">
                        <card :colabName="data.name.first" :colabLastName="data.name.last" :email="data.email" :phone="data.phone" :picture="data.picture"/>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<style scoped>
    #cardList{
        padding:48px 0;
    }
    #cardList h1{
        padding-bottom:48px;
    }
</style>

<script>
import card from '@/components/card.vue'

export default {

    data(){
        return{
            colaboradores:null
        }
    },
    name: 'cardList',
    mounted () {
        this.axios.get('https://next.json-generator.com/api/json/get/N1_hkQ67d').then((response) => {
            
            this.colaboradores = response.data
            console.log(this.colaboradores)
        })
    },
    components: {
        card
    }
}
</script>