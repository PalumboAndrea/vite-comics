<script>
import json from '../../json/dc-comics.json'
import DCCardsElement from './DCCardsElement.vue';

export default {
    data() {
        return {
            bannerElements: [
                {
                    name: "digital comics",
                    image: "buy-comics-digital-comics.png"
                },
                {
                    name: "dc merchandise",
                    image: "buy-comics-merchandise.png"
                },
                {
                    name: "subscription",
                    image: "buy-comics-subscriptions.png"
                },
                {
                    name: "comic shop locator",
                    image: "buy-comics-shop-locator.png"
                },
                {
                    name: "dc power visa",
                    image: "buy-dc-power-visa.svg"
                },
            ],
            myJson: json,
        };
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
    components: { DCCardsElement }
}
</script>


<template>
    <div id="content-container" class="container-fluid remove-padding">

        <div id="jumbo">
            <div id="current-series" href="#">
                current series
            </div>
        </div>

        <div class="container d-flex justify-content-center flex-wrap px-0 pt-5 pb-4">
            <DCCardsElement v-for="element in myJson"
            :imagePath="element.thumb"
            :elementPrice="element.price"
            :elSeries="element.series"
            :elType="element.type"/>
            
            <button class="load-more" href="#">
                load more
            </button>
        </div>
        
    </div>

    <div id="banner" class="container-fluid">
        <div class="container remove-padding">
            <ul>
                <li v-for="item in bannerElements">
                    <img :src="getImagePath(`../assets/img/${item.image}`)" alt="">
                    {{ item.name.toUpperCase() }}
                </li>
            </ul>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variable' as *;

    #content-container{
        background-color: rgb(28,28,28);
        width: 100%;
        color: white;
        
        #jumbo{
            height: 400px;
            width: 100%;
            background-image: url(../assets/img/jumbo.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;

            #current-series{
                background-color: rgb(1,130,249);
                color: white;
                border: 0;
                text-transform: uppercase;
                padding: 8px 30px;
                font-weight: 700;
                font-size: 1.8rem;
                position: absolute;
                height: 3.6rem;
                left: 10%;
                bottom: -1.8rem;
            }
        }

        .load-more{
            background-color: rgb(1,130,249);
            color: white;
            border: 0;
            text-transform: uppercase;
            padding: 8px 70px;
            font-weight: 700;
        }
        
    }

    #banner{
        height: 160px;
        width: 100%;
        background-color: $banner-color;
        display: flex;
        align-items: center;
        justify-content: center;

        ul{
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin: 0;

            li{
                color: white;
                display: flex;
                align-items: center;
                
                img{
                    height: 50px;
                    margin: 0 10px;
                }
            }
        }
    }
</style>



