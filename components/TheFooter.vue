<template>
    <div class="footer">
        <div class="footer__logo">
            <img src="@/assets/img/logo-footer.svg" alt="logo">
            <span>Широкий выбор мебели на заказ</span>
        </div>
        <div class="footer__socials-mb">
            <img src="@/assets/img/whatsappp.svg" alt="social">
            <img src="@/assets/img/instagram.svg" alt="social">
            <img src="@/assets/img/call.svg" alt="social">
        </div>
        <div class="footer__contacts">
            <p>Контакты</p>
            <a>+7 (727) 390 58 28</a>
            <a>+7 (771) 191 17 35</a>
        </div>
        <div class="footer__address">
            <p>Адрес</p>
            <span>г. Алматы, ул. Толе би 127 (вход с ул. Муратбаева)</span>
            <a>Ссылка на 2GIS</a>
        </div>
        <div class="footer__policy-mb">
            <hr>
            <span>Политика конфиденциальности</span>
            <span>Пользовательское соглашение</span>
            <span>©1998</span>
        </div>
        <div class="footer__socials">
            <div>
                <img src="@/assets/img/whatsappp.svg" alt="social">
                <img src="@/assets/img/instagram.svg" alt="social">
                <img src="@/assets/img/call.svg" alt="social">
            </div>
            <span>Политика конфиденциальности</span>
            <span>Пользовательское соглашение</span>
            <span>©1998</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.footer {
    background: #38524b url(@/assets/img/back.svg) no-repeat center;
    display: flex;
    gap: 200px;
    align-items: center;
    padding: 50px 260px 30px 100px;
    margin: 0 -100px;
    position: relative;

    @media (max-width: 1440px) {
        margin: 0 -80px;
        gap: 120px;
        padding: 50px 100px 30px 80px;
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
        padding: 25px 25px 20px;
        gap: 40px;
        background-position: bottom 105px left 150px;
        background-size: 400px;
    }

    &__logo {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media (max-width: 480px) {
            gap: 20px;

            img {
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

            @media (max-width: 480px) {
                font-size: 14px;
                font-weight: 300;
            }
        }

        a {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 20px;
            line-height: 130%;
            color: #fff;
            white-space: nowrap;

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

            @media (max-width: 480px) {
                font-size: 14px;
                font-weight: 300;
            }
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

        a {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 20px;
            line-height: 130%;
            text-decoration: underline;
            text-decoration-skip-ink: none;
            color: #fff;

            @media (max-width: 480px) {
                font-size: 14px;
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
            gap: 30px;
            align-items: center;
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

            hr {
                border: 1px solid rgba(255, 255, 255, 0.3);
                width: 100%;
                margin: 0 0 5px 0;
            }
        }

    }
}
</style>