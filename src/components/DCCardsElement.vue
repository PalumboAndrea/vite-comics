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
export default {
    props: {
        imagePath: String,
        elementPrice: String,
        elSeries: String,
        elType: String,
    }
}
</script>

<style lang="scss" scoped>
    .my-container{
        display: flex;
        flex-direction: column;
        text-align: center;
        width: calc((100% / 6) - 20px);
        margin-right: 20px;

        .img-container{
            position: relative;
            &:hover .comic-info{
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            }

            img{
                width: 100%;
            }
            .comic-info{
                display: none;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                margin: 0;
                background-color: rgba(128, 128, 128, 0.665);
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
            max-width: 100%;
            overflow-wrap: break-word; 
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }
</style>