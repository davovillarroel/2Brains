<template>
    <div id="colab">
        <cardList/>
    </div>
</template>

<script>

import cardList from '@/components/cardsList.vue'

export default {
    name: 'colab',
    components:{
        cardList
    }
}
</script>