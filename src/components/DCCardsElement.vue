<template>
    <div class="my-container">
        <img :src="imagePath" alt="">
        <p id="title">
           {{ elSeries }} 
        </p>
    </div>
</template>

<script>
import { stringifyExpression } from '@vue/compiler-core';

export default {
    props: {
        imagePath: String,
        elementPrice: String,
        elSeries: String,
        elType: String,
    }
}
</script>

<style lang="scss">
    .my-container{
        display: flex;
        flex-direction: column;
        align-items: center;

        #title{
            margin: 10px 0;
        }
    }
</style>