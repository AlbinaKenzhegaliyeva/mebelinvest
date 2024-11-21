<template>
    <div class="popup">
        <div class="popup__block">
            <img src="@/assets/img/cancel.svg" alt="x" class="cancel" @click="closePopUp">
            <div class="text">
                <p>Оставьте заявку</p>
                <span>Если у вас есть вопросы или вы хотите <br> обсудить проект, оставьте заявку <br> и мы перезвоним
                    вам в ближайшее время!</span>
            </div>

            <div class="sent-request" v-if="sentRequest">
                Ваша заявка отправлена!
            </div>
            <div class="form">
                <input type="text" placeholder="Имя" v-model="userName">
                <input type="text" placeholder="+7 777 777 77 77" v-model="userPhone" @focus="addPlus"
                    @keydown="restrictInput">
                <button @click="sendRequest" ref="btn">Отправить</button>
                <div>
                    <input type="checkbox" @change="handleAgreement">
                    <label>Я даю свое согласие на <span style=" text-decoration: underline;
                    text-decoration-skip-ink: none;">обработку персональных данных</span></label>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sentRequest: false,
            agreement: false,
            userName: '',
            userPhone: '',
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
            if (this.agreement) {
                const button = this.$refs.btn;
                button.style.background = '#2d3c38';
                button.style.color = '#fff';
                button.disabled = false;
            }
        },
        sendRequest() {
            if (this.userName != '' && this.userPhone.length > 2  && this.agreement) {
                this.sentRequest = true;
            }
        },
        closePopUp() {
            this.$emit('close-popup');
        }
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

    .popup__block {
        border-radius: 7px;
        background: #fff url(@/assets/img/order.svg) no-repeat left;
        background-size: contain;
        display: flex;
        gap: 100px;
        position: relative;
        padding: 25px 40px 98px 25px;

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
</style>