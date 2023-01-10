<template>
    <div class="my-container">
        <div class="img-container">
            <img :src="imagePath" alt="">
            <div class="comic-info">
                <p>
                    {{ elType.toUpperCase() }}
                </p>
                <p>
                    {{ elementPrice }}
                </p>
            </div>
        </div>
        
        <p class="title">
           {{ elSeries.toUpperCase() }} 
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
        width: calc((100% / 6) - 4px);
        margin: 2px;
        &:hover .comic-info{
            display: flex;
            cursor: pointer;
        }

        .img-container{
            position: relative;

            .comic-info{
                display: none;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                margin: 0;
                background-color: rgba(128, 128, 128, 0.665);
                flex-direction: column;
                align-items: center;
                width: 80%;
                border-radius: 5px;
                
                p{
                    margin: 0;
                    font-size: 1.2rem;
                }
            }
        }

        .title{
            margin: 10px 0 20px;
        }

    }
</style>