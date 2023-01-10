<template>

    <div id="footer-container" class="container-fluid remove-padding">

        <div id="upper-footer" class="container">
            <nav>
                <h3>dc comics</h3>
                <ul>
                    <li>
                        Characters
                    </li>
                    <li>
                        Comics
                    </li>
                    <li>
                        Movies
                    </li>
                    <li>
                        TV
                    </li>
                    <li>
                        Games
                    </li>
                    <li>
                        Videos
                    </li>
                    <li>
                        News
                    </li>
                </ul>
            </nav>
            <nav>
                <h3>shop</h3>
                <ul>
                    <li>
                        Shop DC
                    </li>
                    <li>
                        Shop DC Collectibles
                    </li>
                </ul>
            </nav>
            <nav>
                <h3>dc</h3>
                <ul>
                    <li>
                        Terms Of Use
                    </li>
                    <li>
                        Privacy policy (New)
                    </li>
                    <li>
                        Ad Choices
                    </li>
                    <li>
                        Advertising
                    </li>
                    <li>
                        Jobs
                    </li>
                    <li>
                        Subscriptions
                    </li>
                    <li>
                        Talent Workshops
                    </li>
                    <li>
                        CPSC Certificates
                    </li>
                    <li>
                        Ratings
                    </li>
                    <li>
                        Shop Help
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </nav>
            <nav>
                <h3>sites</h3>
                <ul>
                    <li>
                        DC
                    </li>
                    <li>
                        MAD Magazine
                    </li>
                    <li>
                        DC Kids
                    </li>
                    <li>
                        DC Universe
                    </li>
                    <li>
                        DC Power Visa
                    </li>
                </ul>
            </nav>
        </div>

        <div id="lower-footer" class="container-fluid remove-padding">
            <div class="container">
                <button href="#">sign-up now!</button>
                <div id="social-container">
                    <h3>
                        follow us
                    </h3>
                    <div class="icons">
                        <font-awesome-icon icon="fa-brands fa-facebook" class="px-2" role="button"/>
                        <font-awesome-icon icon="fa-brands fa-twitter" class="px-2" role="button"/>
                        <font-awesome-icon icon="fa-brands fa-youtube" class="px-2" role="button"/>
                        <font-awesome-icon icon="fa-brands fa-pinterest" class="px-2" role="button"/>
                        <font-awesome-icon icon="fa-brands fa-periscope" class="px-2" role="button"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
   
</template>

<style lang="scss" scoped>
    #footer-container{
        height: 50vh;
        width: 100%;
        padding: 0;
        background-image: url(../assets/img/footer-bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        #upper-footer{
            height: 80%;
            width: 100%;
            padding: 20px 0;
            display: flex;
            background-image: url(../assets/img/dc-logo-bg.png);
            background-repeat: no-repeat;
            background-position: right;

            nav{
                padding: 0 20px;
            }
            
            h3{
                color: white;
                margin-bottom: 20px;
                text-transform: uppercase;
                font-size: 1.2rem;
            }

            ul{
                padding: 0;
            }

            li{
                color: grey;
                font-size: 0.8rem;
                &:hover{
                    cursor: pointer;
                }
            }
        }

        #lower-footer{
            height: 20%;
            background-color: rgb(48,48,48);
            padding: 0 20px;
            position: absolute;
            bottom: 0;
            

            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;

                button{
                color: white;
                text-transform: uppercase;
                border: 2px solid rgb(1,130,249);
                background-color: rgb(48,48,48);
                padding: 10px;
                }

                #social-container{
                    display: flex;
                    align-items: center;

                    h3{
                    font-size: 1.2rem;
                    color: rgb(1,130,249);
                    text-transform: uppercase;
                    margin: 0 20px 0 0;
                    font-weight: 900;
                    }

                    .icons{
                        color: grey;
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
</style>

<script>
export default {
    name: 'App'
}
</script>