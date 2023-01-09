<template>
    <div id="header-container" class="container">
        
        <img src="../assets/img/dc-logo.png" alt="dc logo">

        <div class="navbar">
            <ul>
                <li>
                    characters
                </li>
                <li>
                    comics
                </li>
                <li>
                    movies
                </li>
                <li>
                    tv
                </li>
                <li>
                    games
                </li>
                <li>
                    collectibles
                </li>
                <li>
                    videos
                </li>
                <li>
                    fans
                </li>
                <li>
                    news
                </li>
                <li>
                    shop
                </li>
            </ul>
            
        </div>
    </div>
</template>

<style lang="scss">
    #header-container{
        height: 120px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            height: 70%;
        }

        .navbar{
            height: 100%;
            padding: 0;

            ul{
                text-transform: uppercase;
                font-weight: 700;
                padding: 0;
                display: flex;
                flex-direction: row;
                color: rgb(70,70,70);
                margin: 0;
                height: 100%;

                li{
                    display: flex;
                    align-items: center;
                    padding: 0 10px;
                    height: 100%;
                    border-bottom: 5px transparent solid;
                    &:hover{
                        color: rgb(1,130,249);
                        transition: 0.3s;
                        cursor: pointer;
                        border-bottom: 5px solid rgb(1,130,249);
                    }
                }
            }
        }
    }
</style>

<script>
export default {
    
}
</script>