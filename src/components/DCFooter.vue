<template>
    <div id="footer-container" class="container-fluid">
        <div id="upper-footer">
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
        <div id="lower-footer">
            <button>sign-up now!</button>
            <div id="social-container">
                <h3>
                    follow us
                </h3>
                <div class="icons">
                    <font-awesome-icon icon="fa-brands fa-facebook"/>
                    <font-awesome-icon icon="fa-brands fa-twitter"/>
                    <font-awesome-icon icon="fa-brands fa-youtube"/>
                    <font-awesome-icon icon="fa-brands fa-pinterest"/>
                    <font-awesome-icon icon="fa-brands fa-google-drive" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #footer-container{
        height: 40vh;
        width: 100%;
        padding: 0;
        background-image: url(../assets/img/footer-bg.jpg);
       

        #upper-footer{
            height: 80%;
            width: 100%;
            padding: 20px 0;
            display: flex;

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
            }
        }

        #lower-footer{
            height: 20%;
            width: 100%;
            background-color: rgb(48,48,48);
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
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
                }

                .icons{
                    color: grey;
                    font-size: 1.6rem;
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