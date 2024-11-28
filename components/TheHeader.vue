<template>
    <div class="header">
        <div class="header__logo">
            <img src="@/assets/img/logo.svg" alt="logo">
        </div>
        <div class="header__contacts">
            <img src="@/assets/img/whats.svg" alt="contact">
            <img src="@/assets/img/inst.svg" alt="contact">
            <img src="@/assets/img/tel.svg" alt="contact" @click="openTelephone">
            <div>
                <img src="@/assets/img/map.svg" alt="contact" @click="openAddress">
                <span>Алматы</span>
            </div>
        </div>
    </div>


    <div class="header__mb">
        <div>
            <img src="@/assets/img/location.svg" alt="map">
            <span>Алматы</span>
        </div>
        <img src="@/assets/img/logomob.svg" alt="logo">
        <img src="@/assets/img/burger.svg" alt="menu" @click="openMenu">
    </div>

    <div class="telephone" v-if="isTelephone">
        <span>+7 (727) 390 58 28</span>
        <span>+7 (771) 191 17 35</span>
    </div>

    <div class="address" v-if="isAddress">
        <span>г. Алматы, ул. Толе би 127 <br> (вход с ул. Муратбаева)</span>
        <div>
            <img src="@/assets/img/2gis.svg" alt="map">
            <a href="#">Посмотреть на 2GIS</a>
        </div>
    </div>

    <div class="menu__mb" v-if="menu">
        <div class="menu__mb-header">
            <div>
                <img src="@/assets/img/menu_map.svg" alt="map">
                <span>Алматы</span>
            </div>
            <img src="@/assets/img/menu_logo.svg" alt="logo">
            <img src="@/assets/img/x.svg" alt="cancel" @click="cancelMenu">
        </div>
        <p>Широкий выбор мебели на заказ</p>
        <div class="menu__mb-socials">
            <img src="@/assets/img/whatsappp.svg" alt="social">
            <img src="@/assets/img/instagram.svg" alt="social">
            <img src="@/assets/img/call.svg" alt="social">
        </div>
        <div class="menu__mb-contacts">
            <p>Контакты</p>
            <a>+7 (727) 390 58 28</a>
            <a>+7 (771) 191 17 35</a>
        </div>
        <div class="menu__mb-address">
            <p>Адрес</p>
            <span>г. Алматы, ул. Толе би 127 (вход с ул. Муратбаева)</span>
            <a>Ссылка на 2GIS</a>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            isTelephone: false,
            isAddress: false,
            menu: false,
        }
    },
    methods: {
        openTelephone() {
            this.isTelephone = !this.isTelephone;
        },
        openAddress() {
            this.isAddress = !this.isAddress;
        },
        openMenu() {
            this.menu = true;
            document.body.style.overflow = 'hidden';
        },
        cancelMenu() {
            this.menu = false;
            document.body.style.overflow = '';
        },
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 20px 100px;

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

    &__contacts {
        display: flex;
        gap: 50px;

        img {
            cursor: pointer;
        }

        div {
            display: flex;
            gap: 15px;
            align-items: center;

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 20px;
                line-height: 130%;
                color: #1e1e1e;
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

        div {
            display: flex;
            gap: 8px;
            align-items: center;

            img {
                cursor: pointer;
            }

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #1e1e1e;
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

    position: absolute;
    right: 176px;
    top: 110px;

    span {
        font-family: var(--geo);
        font-weight: 300;
        font-size: 20px;
        line-height: 130%;
        color: #1e1e1e;
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

    position: absolute;
    right: 100px;
    top: 110px;

    span {
        font-family: var(--geo);
        font-weight: 300;
        font-size: 20px;
        line-height: 130%;
        text-align: center;
        color: #1e1e1e;
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

.menu__mb {
    display: none;

    @media (max-width: 480px) {
        display: block;
        margin: 0;
        padding: 0;
        background: #38524b url(@/assets/img/back.svg) no-repeat center;
        background-position: bottom 105px left 150px;
        background-size: 400px;
        height: 100vh;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        animation: my-animation 0.5s linear forwards;

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 9px 16px 10px 15px;

            div {
                display: flex;
                gap: 8px;
                align-items: center;

                span {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 130%;
                    color: #fafafa;
                }
            }
        }

        p {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 140%;
            color: #fff;
            margin: 90px 0 50px 15px;
        }

        &-socials {
            display: flex;
            gap: 30px;
            align-items: center;
            margin: 0 0 0 20px;
        }

        &-contacts {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 40px 0 0 20px;

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
            }
        }

        &-address {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 40px 0 0 20px;

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

            a {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                text-decoration: underline;
                text-decoration-skip-ink: none;
                color: #fff;
            }
        }
    }
}

@keyframes my-animation {
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
</style>