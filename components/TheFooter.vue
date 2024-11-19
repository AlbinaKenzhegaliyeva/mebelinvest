<template>
    <div class="footer">
        <div class="footer__logo">
            <img src="@/assets/img/logo-footer.svg" alt="logo">
            <span>Широкий выбор мебели на заказ</span>
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

    &__logo {
        display: flex;
        flex-direction: column;
        gap: 30px;

        span {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 140%;
            color: #fff;
            white-space: nowrap;
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
        }

        a {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 20px;
            line-height: 130%;
            text-decoration: underline;
            text-decoration-skip-ink: none;
            color: #fff;
        }
    }

    &__socials {
        display: flex;
        flex-direction: column;
        gap: 20px;

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
}
</style>