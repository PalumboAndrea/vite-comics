<template>
    <div id="header-container" class="container-fluid">
        <div class="logo">

        </div>

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

        .logo{
            width: 100px;
            height: 100%;
            background-color: green;
        }

        ul{
            padding: 0;
            display: flex;
            flex-direction: row;
            color: rgb(70,70,70);

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