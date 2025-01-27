<template>
    <div class="header">
        <div class="header__logo">
            <img src="@/assets/img/logo.svg" alt="logo" @click="goToTop">
        </div>
        <div class="header__btn-3d" @click="open3D">
            <span>3D-планировщик</span>
        </div>
        <div class="header__contacts">
            <img src="@/assets/img/w.svg" alt="contact" @click="openWhatsApp">
            <img src="@/assets/img/i.svg" alt="contact" @click="openInstagram">
            <img src="@/assets/img/t.svg" alt="contact" @click="openTelephone">
            <img src="@/assets/img/2giss.svg" alt="contact" @click="openAddress">
            <div class="header__contacts-lang" @click="openLanguage">
                <img src="@/assets/img/lang.svg" alt="language">
                <span>{{ currentLanguage }}</span>
            </div>
        </div>
    </div>

    <div class="header__mb">
        <img src="@/assets/img/logomob.svg" alt="logo" @click="goToTop">
        <div class="header__mb-container">
            <div class="header__mb-lang" @click="openLanguage">
                <img src="@/assets/img/lang.svg" alt="language">
                <span>{{ currentLanguage }}</span>
            </div>
            <img src="@/assets/img/star.svg" alt="social" @click="open2GIS" class="map">
            <img src="@/assets/img/burger.svg" alt="menu" @click="openMenu">
        </div>
    </div>

    <div class="telephone" v-if="isTelephone">
        <a href="tel:+77273905828" @click="counterTelephone">+7 (727) 390 58 28</a>
        <a href="tel:+77711911735" @click="counterTelephone">+7 771 191 17 35</a>
    </div>

    <div class="address" v-if="isAddress">
        <span>{{ $t('addressText') }}</span>
        <div @click="open2GIS">
            <img src="@/assets/img/2gis.svg" alt="map">
            <a href="https://go.2gis.com/h5w8p">{{ $t('gis2Text') }}</a>
        </div>
    </div>

    <div class="lang" v-if="isLanguage">
        <!-- <span @click="changeLanguage('RU')">Русский</span>
        <span @click="changeLanguage('KZ')">Қазақ</span> -->

        <span @click="changeLanguage('RU')">{{ $t('languageRussian') }}</span>
        <span @click="changeLanguage('KZ')">{{ $t('languageKazakh') }}</span>
    </div>

    <div class="menu__mb" v-if="menu" :class="{ closing: isClosing }">
        <div class="menu__mb-header">
            <img src="@/assets/img/menu_logo.svg" alt="logo">
            <div class="menu__mb-header-container">
                <img src="@/assets/img/star.svg" alt="social" @click="open2GIS">
                <div class="menu__mb-header-lang" @click="openLanguage">
                    <img src="@/assets/img/lang.svg" alt="language">
                    <span>{{ currentLanguage }}</span>
                </div>
                <img src="@/assets/img/x.svg" alt="cancel" @click="cancelMenu" class="cancel">
            </div>
        </div>
        <p>{{ $t('bannerTitle') }}</p>
        <div class="menu__mb-socials">
            <img src="@/assets/img/w2.svg" alt="social" @click="openWhatsApp">
            <img src="@/assets/img/i2.svg" alt="social" @click="openInstagram">
            <a href="tel:+77273905828" @click="counterTelephone"><img src="@/assets/img/t2.svg" alt="social"></a>
            <img src="@/assets/img/2g.svg" alt="social" @click="open2GIS">
        </div>
        <div class="menu__mb-contacts">
            <p>{{ $t('contacts') }}</p>
            <a href="tel:+77273905828">+7 (727) 390 58 28</a>
            <a href="tel:+77711911735">+7 771 191 17 35</a>
        </div>
        <div class="menu__mb-address">
            <p>{{ $t('address') }}</p>
            <span>{{ $t('addressText') }}</span>
        </div>
        <div class="menu__mb-btn-3d" @click="open3D">
            <span>3D-планировщик</span>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import axios from 'axios';

export default {
    emits: ["language-changed"],
    data() {
        return {
            isTelephone: false,
            isAddress: false,
            isLanguage: false,
            //currentLanguage: "RU",
            menu: false,
            isClosing: false,
            currentLanguage: this.$i18n.locale, // Используем $i18n
        }
    },
    // mounted() {
    //     const savedLanguage = localStorage.getItem('language') || 'RU';
    //     this.currentLanguage = savedLanguage; // Load saved language
    //     this.$emit("language-changed", savedLanguage); // Notify parent
    // },
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
        openTelephone() {
            this.isTelephone = !this.isTelephone;
        },
        openAddress() {
            this.isAddress = !this.isAddress;
        },
        openLanguage() {
            this.isLanguage = !this.isLanguage;
        },
        openMenu() {
            this.menu = true;
            document.body.style.overflow = 'hidden';
        },
        cancelMenu() {
            this.isClosing = true;
            setTimeout(() => {
                this.isClosing = false;
                this.menu = false;
            }, 1000);
            document.body.style.overflow = '';
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
        // changeLanguage(language) {
        //     this.currentLanguage = language;
        //     this.isLanguage = false;
        //     localStorage.setItem('language', language);
        //     this.$emit("language-changed", language); // Notify parent
        // },
        changeLanguage(language) {
            this.$i18n.locale = language; // Меняем язык
            this.currentLanguage = language;
            localStorage.setItem('language', language); // Сохраняем выбор
            this.isLanguage = false;
            this.$emit("language-changed", language);
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
        },
        open3D() {
            window.open("https://planplace.ru/clients/33339668/", "_blank");
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 20px 100px 20px 115px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 52;

    @media (max-width: 1440px) {
        padding: 20px 80px;
    }

    @media (max-width: 1024px) {
        padding: 20px 30px;
    }

    @media (max-width: 480px) {
        display: none;
    }

    &__logo {
        img {
            cursor: pointer;
        }
    }

    &__btn-3d {
        background: #38524b;
        border-radius: 10px;
        padding: 9px 104px;
        margin: 0 0 0 250px;
        cursor: pointer;

        @media (max-width: 1024px) {
            margin: 0;
        }

        span {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #fff;
            white-space: nowrap;
        }
    }

    &__contacts {
        display: flex;
        gap: 50px;

        @media (max-width: 1440px) {
            gap: 30px;
        }

        img {
            cursor: pointer;
            width: 40px;
            height: 40px;
        }

        &-lang {
            display: flex;
            gap: 10px;
            align-items: center;
            border: 1.80px solid #38524b;
            background: #38524b;
            border-radius: 10px;
            padding: 5px 10px;
            cursor: pointer;

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 20px;
                line-height: 130%;
                color: #fff;
            }

            img {
                width: 30px;
                height: 30px;
            }
        }
    }
}

.header__mb {
    display: none;

    @media (max-width: 480px) {
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 10px 15px 11px;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 52;

        &-container {
            display: flex;
            gap: 25px;
            align-items: center;
        }

        &-lang {
            border-radius: 5px;
            padding: 5px;
            background: #38524b;
            display: flex;
            gap: 5px;
            align-items: center;
            cursor: pointer;

            img {
                width: 20px;
                height: 20px;
            }

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #fff;
            }
        }
    }
}

.telephone {
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    background: #fff;
    padding: 30px 36px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    position: fixed;
    right: 200px;
    top: 110px;
    z-index: 10000;

    a {
        font-family: var(--geo);
        font-weight: 300;
        font-size: 20px;
        line-height: 130%;
        color: #1e1e1e;
        text-decoration: none;
    }
}

.address {
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    background: #fff;
    padding: 30px 41px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    position: fixed;
    right: 100px;
    top: 110px;
    z-index: 10000;

    span {
        font-family: var(--geo);
        font-weight: 300;
        font-size: 20px;
        line-height: 130%;
        text-align: center;
        color: #1e1e1e;
        max-width: 300px;
    }

    div {
        display: flex;
        gap: 15px;
        align-items: center;

        a {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            text-decoration: underline;
            text-decoration-skip-ink: none;
            color: #1e1e1e;
        }
    }
}

.lang {
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    position: fixed;
    right: 90px;
    top: 110px;
    z-index: 10000;

    @media (max-width: 480px) {
        gap: 15px;
        padding: 15px;
        top: 66px;
        right: 110px;
    }

    span {
        font-family: var(--geo);
        font-weight: 300;
        font-size: 20px;
        line-height: 130%;
        color: #38524b;
        cursor: pointer;
    }
}

.menu__mb {
    display: none;

    @media (max-width: 480px) {
        display: block;
        margin: 0;
        padding: 0;
        background: #38524b;
        background-position: bottom 105px left 150px;
        background-size: 400px;
        height: 100vh;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        animation: openMenu 0.7s linear forwards;

        &.closing {
            animation: closeMenu 1s cubic-bezier(0.22, 0.03, 0.3, 1) forwards;
        }

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 9px 16px 10px 15px;

            &-container {
                display: flex;
                gap: 25px;

                .cancel {
                    padding: 0 0 0 5px;
                }
            }

            &-lang {
                border-radius: 5px;
                padding: 5px;
                background: #38524b;
                display: flex;
                gap: 5px;
                align-items: center;
                cursor: pointer;

                img {
                    width: 20px;
                    height: 20px;
                }

                span {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 130%;
                    color: #fff;
                }
            }
        }

        p {
            font-family: var(--geo);
            font-weight: 400;
            font-size: 20px;
            line-height: 140%;
            color: #fff;
            margin: 93px 200px 0 15px;
        }

        &-socials {
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
            margin: 0 0 0 20px;
            position: absolute;
            right: 20px;
        }

        &-contacts {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 68px 0 0 15px;

            p {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #fff;
                margin: 0 0 5px 0;
            }

            a {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #fff;
                text-decoration: none;
            }
        }

        &-address {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 30px 150px 0 15px;

            p {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #fff;
                margin: 0;
            }

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 140%;
                color: #fff;
            }
        }

        &-btn-3d {
            background: #fff;
            border-radius: 5px;
            padding: 9px 104px;
            margin: 97px 15px 0;

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #38524b;
            }
        }
    }
}

@keyframes openMenu {
    0% {
        transform: translateX(100%) translateY(0) scale(1);
    }

    20% {
        transform: translateX(40%) translateY(0) scale(1);
    }

    100% {
        transform: translateX(0) translateY(0) scale(1);
    }
}

@keyframes closeMenu {
    0% {
        transform: translateX(0) translateY(0) scale(1);
    }

    70% {
        transform: translateX(30%) translateY(0) scale(1);
    }

    100% {
        transform: translateX(100%) translateY(0) scale(1);
    }
}
</style>
