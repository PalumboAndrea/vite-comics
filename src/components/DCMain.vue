<template>
    <div id="content-container" class="container-fluid remove-padding">
        <div class="container">
        --> Content goes here
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

<style lang="scss">
    #content-container{
        background-color: rgb(28,28,28);
        width: 100%;
        height: 150px;
        color: white;
        display: flex;
        align-items: center;
    }

    #banner{
        height: 160px;
        width: 100%;
        background-color: rgb(1,130,249);
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

<script>
export default {
    data() {
        return {
            bannerElements: [
                {
                    name: 'digital comics',
                    image: 'buy-comics-digital-comics.png'
                },
                {
                    name: 'dc merchandise',
                    image: 'buy-comics-merchandise.png'
                },
                {
                    name: 'subscription',
                    image: 'buy-comics-subscriptions.png'
                },
                {
                    name: 'comic shop locator',
                    image: 'buy-comics-shop-locator.png'
                },
                {
                    name: 'dc power visa',
                    image: 'buy-dc-power-visa.svg'
                },

            ]
        }
    },
    methods: {
        getImagePath: function(imgPath){
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

