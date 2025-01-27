<template>
    <div class="footer">
        <div class="footer__logo">
            <img src="@/assets/img/logo-footer.svg" alt="logo" @click="goToTop">
            <span>{{ $t('bannerTitle') }}</span>
            <span>©2024</span>
        </div>
        <div class="footer__socials-mb">
            <img src="@/assets/img/w2.svg" alt="social" @click="openWhatsApp">
            <img src="@/assets/img/i2.svg" alt="social" @click="openInstagram">
            <a href="tel:+77273905828" @click="counterTelephone"><img src="@/assets/img/t2.svg" alt="social"></a>
            <img src="@/assets/img/2g.svg" alt="social" @click="open2GIS">
        </div>
        <div class="footer__contacts">
            <p>{{ $t('contacts') }}</p>
            <a href="tel:+77273905828">+7 (727) 390 58 28</a>
            <a href="tel:+77775852525">+7 777 585 25 25</a>
        </div>
        <div class="footer__address">
            <p>{{ $t('address') }}</p>
            <span>{{ $t('addressText') }}</span>
        </div>
        <div class="footer__policy-mb">
            <span>{{ $t('privacyPolicy') }}</span>
            <span>{{ $t('userAgreement') }}</span>
            <span>©2024</span>
        </div>
        <div class="footer__socials">
            <div>
                <img src="@/assets/img/w2.svg" alt="social" @click="openWhatsApp">
                <img src="@/assets/img/i2.svg" alt="social" @click="openInstagram">
                <a href="tel:+77273905828" @click="counterTelephone"><img src="@/assets/img/t2.svg" alt="social"></a>
                <img src="@/assets/img/2g.svg" alt="social" @click="open2GIS">
            </div>
            <span>{{ $t('privacyPolicy') }}</span>
            <span>{{ $t('userAgreement') }}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    // Проверяем, начинается ли куки с указанного имени
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        openInstagram() {
            window.open("https://www.instagram.com/mebel_invest", "_blank");

            let source = "Instagram";
            let url = `https://mebelinvest.kz/api/click/${source}/`;
            const csrfToken = this.getCookie('csrftoken');
            axios
                .post(url, {}, {
                    headers: {
                        'X-CSRFToken': csrfToken, // Добавляем CSRF-токен в заголовок
                    },
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                })
        },
        open2GIS() {
            window.open("https://go.2gis.com/h5w8p", "_blank");

            let source = "2GIS";
            let url = `https://mebelinvest.kz/api/click/${source}/`;
            const csrfToken = this.getCookie('csrftoken');
            axios
                .post(url, {}, {
                    headers: {
                        'X-CSRFToken': csrfToken, // Добавляем CSRF-токен в заголовок
                    },
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                })
        },
        counterTelephone() {
            let source = "Телефон";
            let url = `https://mebelinvest.kz/api/click/${source}/`;
            const csrfToken = this.getCookie('csrftoken');
            axios
                .post(url, {}, {
                    headers: {
                        'X-CSRFToken': csrfToken, // Добавляем CSRF-токен в заголовок
                    },
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                })
        },
        openWhatsApp() {
            window.open("https://wa.me/77711911735", "_blank");

            let source = "WhatsApp";
            let url = `https://mebelinvest.kz/api/click/${source}/`;
            const csrfToken = this.getCookie('csrftoken');
            axios
                .post(url, {}, {
                    headers: {
                        'X-CSRFToken': csrfToken, // Добавляем CSRF-токен в заголовок
                    },
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                })
        },
        goToTop() {
            if (this.$route.path === '/') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                this.$router.push('/');
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.footer {
    background: #38524b;
    display: flex;
    gap: 200px;
    align-items: flex-start;
    padding: 60px 100px;
    margin: 0 -100px;
    position: relative;

    @media (max-width: 1440px) {
        margin: 0 -80px;
        gap: 120px;
        padding: 60px 80px 30px;
        align-items: normal;
    }

    @media (max-width: 1366px) {
        gap: 100px;
    }

    @media (max-width: 1024px) {
        padding: 50px 30px 30px;
        margin: 0 -30px;
        gap: 50px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        margin: 0 -15px;
        padding: 20px 25px 15px 20px;
        gap: 40px;
        background-position: bottom 10px left 200px;
        background-size: 400px;
    }

    &__logo {
        display: flex;
        flex-direction: column;
        gap: 20px;

        img {
            cursor: pointer;

            @media (max-width: 480px) {
                width: 227px;
            }
        }

        span {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 140%;
            color: #fff;
            white-space: nowrap;

            @media (max-width: 480px) {
                font-size: 14px;
            }
        }

        span:last-child {
            color: rgba(255, 255, 255, 0.7);
            line-height: 130%;

            @media (max-width: 480px) {
                display: none;
            }
        }
    }

    &__contacts {
        display: flex;
        flex-direction: column;
        gap: 20px;

        p {
            font-family: var(--geo);
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #fff;
            margin: 0 0 5px 0;
        }

        a {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 20px;
            line-height: 130%;
            color: #fff;
            white-space: nowrap;
            text-decoration: none;

            @media (max-width: 480px) {
                font-size: 16px;
            }
        }
    }

    &__address {
        display: flex;
        flex-direction: column;
        gap: 20px;

        p {
            font-family: var(--geo);
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #fff;
            margin: 0;
        }

        span {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 20px;
            line-height: 140%;
            color: #fff;

            @media (max-width: 480px) {
                font-size: 16px;
            }
        }
    }

    &__socials {
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 480px) {
            display: none;
        }

        div {
            display: flex;
            gap: 30px;
            align-items: center;
            margin: 0 0 10px 0;

            img {
                cursor: pointer;
            }
        }

        span {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: rgba(255, 255, 255, 0.7);
            white-space: nowrap;
        }
    }

    &__socials-mb {
        display: none;

        @media (max-width: 480px) {
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            position: absolute;
            right: 30px;
            top: 150px;
        }
    }

    &__policy-mb {
        display: none;

        @media (max-width: 480px) {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 0 -25px;

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 10px;
                line-height: 130%;
                color: rgba(255, 255, 255, 0.7);
                margin: 0 0 0 25px;
            }

            // hr {
            //     border: 1px solid rgba(255, 255, 255, 0.3);
            //     width: 100%;
            //     margin: 0 0 5px 0;
            // }
        }

    }
}
</style>
