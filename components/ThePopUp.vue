<template>
    <div class="popup">
        <div class="popup__block" :class="{ closing: isClosing }">
            <img src="@/assets/img/cancel.svg" alt="x" class="cancel" @click="closePopUp">
            <div class="text">
                <p>{{ $t('applyRequest') }}</p>
                <span>{{ $t('applyRequestText') }}</span>
            </div>

            <div class="sent-request" v-if="sentRequest">
                Ваша заявка отправлена!
            </div>
            <div class="form">
                <input type="text" :placeholder="$t('placeholderName')" v-model="userName">
                <input type="text" placeholder="+7 777 777 77 77" v-model="userPhone" @focus="addPlus"
                    @keydown="restrictInput">
                <button @click="createRequest" :class="{ active: agreement }" :disabled="!agreement">{{ $t('applyBtn')
                    }}</button>
                <div>
                    <input type="checkbox" @change="handleAgreement">
                    <!-- <label>Я даю свое согласие на <span style=" text-decoration: underline;
                    text-decoration-skip-ink: none;">обработку персональных данных</span></label> -->
                    <label>{{ $t('applyAgreement') }}</label>
                </div>
            </div>
        </div>

        <div class="popup__block-mb" :class="{ closing: isClosing }">
            <div class="sent-request" v-if="sentRequest">
                Ваша заявка отправлена!
            </div>
            <img src="@/assets/img/cancel.svg" alt="x" class="cancel" @click="closePopUp">
            <div class="rect">
                <img src="@/assets/img/rect.svg" alt="rectangle">
            </div>
            <div class="text">
                <p>Оставьте заявку</p>
                <span>Если у вас есть вопросы или вы хотите <br> обсудить проект, оставьте заявку <br> и мы перезвоним
                    вам в ближайшее время!</span>
            </div>
            <div class="form">
                <input type="text" placeholder="Имя" v-model="userName">
                <input type="text" placeholder="+7 777 777 77 77" v-model="userPhone" @focus="addPlus"
                    @keydown="restrictInput">
            </div>
            <button @click="createRequest" :class="{ active: agreement }" :disabled="!agreement">Отправить</button>
            <div>
                <input type="checkbox" @change="handleAgreement">
                <label>Я даю свое согласие на <span style=" text-decoration: underline;
                    text-decoration-skip-ink: none;">обработку персональных данных</span></label>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            sentRequest: false,
            agreement: false,
            userName: '',
            userPhone: '',
            furnitureId: this.$route.params.id,
            isClosing: false,
        }
    },
    methods: {
        addPlus() {
            if (!this.userPhone.startsWith('+7')) {
                this.userPhone = '+7';
            }
            this.userPhone = '+7' + this.userPhone.slice(2).replace(/\D/g, '');
        },
        restrictInput(event) {
            const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
            const isNumber = /^[0-9]$/.test(event.key);
            if (!isNumber && !allowedKeys.includes(event.key)) {
                event.preventDefault();
            }
        },
        handleAgreement() {
            this.agreement = !this.agreement;
        },
        closePopUp() {
            this.isClosing = true;
            // this.$emit('close-popup');
            setTimeout(() => {
                this.$emit('close-popup'); // Убираем компонент после завершения анимации
                this.isClosing = false;
            }, 600); // Время совпадает с длительностью анимации
        },
        createRequest() {
            if (this.userName != '' && this.userPhone.length > 2 && this.agreement) {
                this.sentRequest = true;
            }

            let url = 'https://mebelinvest.kz/api/orders/';

            let requestData = {
                name: this.userName,
                phone_number: this.userPhone,
            };

            if (this.furnitureId !== undefined) {
                requestData.furniture_id = this.furnitureId;
            }

            axios
                .post(url, requestData)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                    this.sentRequest = false;
                })
        },
    }
}
</script>

<style land="scss" scoped>
.popup {
    height: 100vh;
    position: fixed;
    z-index: 51;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 500px;

    @media (max-width: 1440px) {
        padding: 0 270px;
    }

    @media (max-width: 1366px) {
        padding: 0 200px;
    }

    @media (max-width: 1024px) {
        padding: 0 70px;
    }

    @media (max-width: 480px) {
        padding: 0;
        justify-content: end;
    }

    .popup__block {
        border-radius: 20px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
        background: #fff url(@/assets/img/newpop.svg) no-repeat left;
        background-size: contain;
        display: flex;
        position: relative;
        padding: 25px 40px 98px 25px;
        opacity: 0;
        transform: scale(0.8);
        animation: fadeInScale 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;

        &.closing {
            animation: fadeOut 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @media (max-width: 480px) {
            display: none;
        }

        .cancel {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            flex: 1;
            margin: 0 60px 0 0;

            p {
                margin: 0;
                font-family: var(--geo);
                font-weight: 400;
                font-size: 32px;
                line-height: 130%;
                color: #fff;
            }

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #fff;
            }
        }

        .form {
            padding: 73px 0 0 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex: 1;

            input {
                border-radius: 5px;
                width: 100%;
                border: none;
                background: #f2f2f2;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #1e1e1e;
                outline: none;
                padding: 11px 0;
                text-indent: 15px;
            }

            input::placeholder {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: rgba(0, 0, 0, 0.3);
            }

            button {
                margin: 10px 0 0 0;
                border: 1.50px solid #292421;
                border-radius: 5px;
                padding: 9px 130px;
                width: 100%;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #292421;
                cursor: pointer;
            }

            .active {
                background: #2d3c38;
                color: #fff;
            }

            div {
                display: flex;
                gap: 10px;
                align-items: center;

                label,
                span {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 130%;
                    color: #000;
                }

                input[type="checkbox"] {
                    border: 1.88px solid #38524b;
                    border-radius: 4px;
                    width: 18px;
                    height: 18px;
                }

                input[type="checkbox"]:checked {
                    accent-color: #38524b;
                }
            }
        }

        .sent-request {
            background: #38524b;
            border-radius: 5px;
            padding: 10px 30px;
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #fff;
            white-space: nowrap;
            position: absolute;
            right: 100px;
            top: 20px;
        }
    }

    .popup__block-mb {
        display: none;

        @media (max-width: 480px) {
            display: block;
            padding: 15px 15px 100px;
            background: #fff;
            border-radius: 20px 20px 0 0;
            position: relative;
            animation: slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;

            &.closing {
                animation: slide-down 0.6s cubic-bezier(0.42, 0, 0.58, 1) forwards;
            }

            .sent-request {
                background: #38524b;
                border-radius: 5px;
                padding: 10px 20px;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #fff;
                white-space: nowrap;
                position: absolute;
                top: -240px;
                right: 85px;

            }

            .rect {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .cancel {
                position: absolute;
                top: 15px;
                right: 15px;
                cursor: pointer;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 15px;
                align-items: normal;

                p {
                    margin: 21px 0 0 0;
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 130%;
                    color: #1e1e1e;
                }

                span {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 130%;
                    color: #000;
                }
            }

            .form {
                padding: 25px 0 0 0;
                display: flex;
                flex-direction: column;
                gap: 20px;
                flex-grow: 1;

                input {
                    border-radius: 5px;
                    width: 100%;
                    border: none;
                    background: #f2f2f2;
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 130%;
                    color: #000;
                    outline: none;
                    padding: 16px 0;
                    text-indent: 15px;
                }

                input::placeholder {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 130%;
                    color: rgba(0, 0, 0, 0.3);
                }
            }

            button {
                margin: 30px 0 12px 0;
                border: 1.50px solid #292421;
                border-radius: 5px;
                padding: 10px 130px;
                width: 100%;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #292421;
                cursor: pointer;
            }

            .active {
                background: #2d3c38;
                color: #fff;
            }

            div {
                display: flex;
                gap: 7px;
                align-items: center;

                label,
                span {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 12px;
                    line-height: 130%;
                    color: #000;
                }

                input[type="checkbox"] {
                    border: 1.50px solid #38524b;
                    border-radius: 3px;
                    width: 15px;
                    height: 15px;
                }

                input[type="checkbox"]:checked {
                    accent-color: #38524b;
                }
            }

        }
    }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

@keyframes fadeInScale {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slide-up {
    0% {
        transform: translateY(100%);
    }

    80% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(0.8);
    }
}

@keyframes slide-down {
    0% {
        transform: translateY(0);
    }

    70% {
        transform: translateY(50%);
    }

    100% {
        transform: translateY(100%);
    }
}
</style>