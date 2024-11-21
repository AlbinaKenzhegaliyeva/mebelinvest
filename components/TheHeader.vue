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
        <img src="@/assets/img/burger.svg" alt="menu">
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
</template>

<script>
export default {
    data() {
        return {
            isTelephone: false,
            isAddress: false,
        }
    },
    methods: {
        openTelephone() {
            this.isTelephone = !this.isTelephone;
        },
        openAddress() {
            this.isAddress = !this.isAddress;
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
    padding: 20px 0;

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
        padding: 10px 0 11px;
        align-items: center;

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
</style>