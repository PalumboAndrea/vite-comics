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
        height: 150px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        
        ul{
        text-transform: uppercase;
        font-weight: 700;
        padding: 0;
        display: flex;
        flex-direction: row;
        color: rgb(70,70,70);
        margin: 0;

        li{
            padding: 0 10px;
        }
        
        }
       

    }





</style>

<script>
export default {
    
}
</script>