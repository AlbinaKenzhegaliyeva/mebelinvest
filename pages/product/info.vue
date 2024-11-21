<template>
    <div class="page">
        <TheHeader />
        <div class="product">
            <div class="product__navigation">
                <span @click="goBack">Главная</span>
                <span>/</span>
                <p>Кухня из акрила</p>
            </div>

            <div class="product__info">
                <div class="product__slider">
                    <swiper :direction="'vertical'" :spaceBetween="10" :slidesPerView="4" :loop="true"
                        :loopedSlides="50" :modules="modules" class="gallery-thumbs" :slideToClickedSlide="true"
                        @swiper="setThumbsSwiper">
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>
                    </swiper>

                    <swiper :slidesPerView="1" :loop="true" :modules="modules" class="gallery-top"
                        :thumbs="{ swiper: thumbsSwiper }" :pagination="{ clickable: true }" :navigation="navigation">
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/kuhnya.svg" />
                        </swiper-slide>

                        <div class="nav__next">
                            <img src="@/assets/img/next.svg" />
                        </div>
                        <div class="nav__prev">
                            <img src="@/assets/img/prev.svg" />
                        </div>
                    </swiper>
                </div>

                <div class="product__description">
                    <div class="text">
                        <div>
                            <p>Кухня из акрила</p>
                            <span>
                                Этот кухонный гарнитур сочетает в себе современный стиль и функциональность, предлагая
                                идеальное решение для вашего дома. Чистые линии, минималистичный дизайн и
                                высококачественные
                                материалы делают его не только эстетичным, но и практичным. <br> <br>
                                Множество удобных ящиков и полок обеспечат вам простор для хранения всех необходимых
                                кухонных принадлежностей. Рабочие поверхности выполнены из прочных материалов,
                                устойчивых
                                к повреждениям и воздействию влаги. Эргономичные ручки и продуманная организация
                                пространства делают использование гарнитура удобным и приятным. <br> <br>
                                Идеально подходит для тех, кто ценит комфорт, стиль и качество в кухонной зоне.
                            </span>
                        </div>
                        <button @click="makeRequest">Отправить заявку</button>
                    </div>

                    <div class="price">
                        <p>500 000 ₸</p>
                        <div>
                            <img src="@/assets/img/rotate.svg" />
                            <span>Цена на 2023 год</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="similar-products">
            <h3>Похожие товары</h3>
            <div class="similar-products__content">
                <div class="similar-products__item">
                    <swiper :pagination="{ clickable: true }" :modules="modules" class="mySwiper3">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="category">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="category">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="similar-products__item">
                    <swiper :pagination="{ clickable: true }" :modules="modules" class="mySwiper3">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="category">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="category">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="similar-products__item">
                    <swiper :pagination="{ clickable: true }" :modules="modules" class="mySwiper3">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="category">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="category">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="similar-products__category">
                    <div class="text">
                        <span>Категория</span>
                        <p>Кухни</p>
                    </div>
                    <img src="@/assets/img/cabinet.svg" alt="item" @click="goToCategory" class="category-img">
                    <div class="arrow">
                        <img src="@/assets/img/strelka.svg" alt="arrow">
                    </div>
                </div>
            </div>
        </div>

        <div class="advantages">
            <div class="advantages-item-1">
                <img src="@/assets/img/galka.svg" alt="item">
                <p>Даем гарантии на продукцию</p>
                <span>Текст для блока</span>
            </div>
            <div class="advantages-item-2">
                <img src="@/assets/img/document.svg" alt="item">
                <p>Сертификаты участника госзакупок</p>
                <span>Текст для блока</span>
            </div>
            <div class="advantages-item-3">
                <img src="@/assets/img/coin.svg" alt="item">
                <p>Предоставляем рассрочку</p>
                <span>Текст для блока</span>
            </div>
            <div class="advantages-item-4">
                <img src="@/assets/img/medal.svg" alt="item">
                <p>20 лет на рынке</p>
                <span>Текст для блока</span>
            </div>
            <div class="advantages-item-5">
                <div>
                    <img src="@/assets/img/star.svg" alt="item">
                    <p>4,9 рейтинг 2GIS</p>
                    <span>Текст для блока</span>
                </div>
                <a href="#">Ссылка на 2GIS</a>
            </div>
        </div>
        <TheFooter />
    </div>

    <ThePopUp v-if="request" @close-popup="closePopUp" />
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            request: false,
        }
    },
    setup() {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };
        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Navigation, Thumbs, Pagination],
            navigation: {
                nextEl: '.nav__next',
                prevEl: '.nav__prev',
            },
        };
    },
    methods: {
        makeRequest() {
            this.request = true;
            document.body.style.overflow = 'hidden';
        },
        closePopUp() {
            this.request = false;
            document.body.style.overflow = '';
        },
        goBack() {
            this.$router.push('/');
        }
    },
}
</script>

<style lang="scss" scoped>
.page {
    padding: 0 100px;

    @media (max-width: 1440px) {
        padding: 0 80px;
    }

    @media (max-width: 1024px) {
        padding: 0 30px;
    }
}

.product {
    background: #fafafa;
    padding: 25px 100px 0 100px;
    margin: 0 -100px;

    @media (max-width: 1440px) {
        padding: 25px 80px 0 80px;
        margin: 0 -80px;
    }

    @media (max-width: 1024px) {
        margin: 0 -30px;
        padding: 25px 30px 0 30px;
    }

    &__navigation {
        display: flex;
        gap: 15px;

        p {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #1e1e1e;
            margin: 0;
        }

        span {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: rgba(0, 0, 0, 0.6);
            cursor: pointer;
        }
    }

    &__info {
        display: flex;
        gap: 20px;
        padding: 25px 0 0 0;

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__description {
        background: #fff;
        border-radius: 7px;
        width: 100%;
        padding: 30px 30px 40px;
        display: flex;
        justify-content: space-between;
        gap: 60px;

        @media (max-width: 1440px) {
            gap: 40px;
            padding: 20px;
        }

        @media (max-width: 1366px) {
            gap: 20px;
        }

        .price {
            background: #f2f2f2;
            border-radius: 7px;
            padding: 15px 43px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            align-self: flex-start;

            @media (max-width: 1440px) {
                padding: 15px 23px;
            }

            @media (max-width: 1366px) {
                padding: 15px;
            }

            p {
                font-family: var(--geo);
                font-weight: 500;
                font-size: 32px;
                line-height: 130%;
                color: #1e1e1e;
                margin: 0;

                @media (max-width: 1440px) {
                    font-size: 1.67vw;
                }
            }

            div {
                display: flex;
                align-items: center;
                gap: 15px;

                span {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 130%;
                    color: #1e1e1e;
                    white-space: nowrap;
                }
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;

            @media (max-width: 1024px) {
                gap: 50px;
            }

            p {
                font-family: var(--geo);
                font-weight: 400;
                font-size: 32px;
                line-height: 130%;
                text-align: left;
                color: #1e1e1e;
                margin: 0 0 30px 0;

                @media (max-width: 1440px) {
                    font-size: 1.67vw;
                    margin: 0 0 15px 0;
                }

                @media (max-width: 1366px) {
                    margin: 0 0 5px 0;
                }

                @media (max-width: 1024px) {
                    font-size: 20px;
                }
            }

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #1e1e1e;

                @media (max-width: 1440px) {
                    font-size: 0.83vw;
                }

                @media (max-width: 1366px) {
                    font-size: 12px;
                }

                @media (max-width: 1024px) {
                    font-size: 14px;
                }
            }

            button {
                background: #2d3c38;
                border-radius: 5px;
                padding: 9px 102px;
                border: none;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #fff;
                align-self: flex-start;
                cursor: pointer;
                white-space: nowrap;
            }
        }
    }

    &__slider {
        display: flex;
        gap: 20px;

        @media (max-width: 1366px) {
            gap: 15px;
        }

        .swiper-vertical {
            width: 100px;
            height: 330px;
            margin: 0;

            @media (max-width: 1366px) {
                width: 80px;
            }

            .swiper-slide img {
                height: 75px;
                border-radius: 7px;
                width: 100%;
                object-fit: cover;
                display: block;
                cursor: pointer;

                @media (max-width: 1366px) {
                    height: 65px;
                }
            }

            .swiper-slide {
                opacity: 0.5;
            }

            .swiper-slide-thumb-active {
                opacity: unset;
            }

            .swiper-wrapper {
                width: 100px;

                @media (max-width: 1366px) {
                    width: 80px;
                }
            }
        }

        .swiper-horizontal {
            border-radius: 7px;
            width: 680px;
            height: 628px;
            margin: 0;
            position: relative;

            @media (max-width: 1440px) {
                width: 500px;
                height: 462px;
            }

            .swiper-slide img {
                @media (max-width: 1440px) {
                    width: 500px;
                }

                @media (max-width: 1366px) {
                    height: 462px;
                }
            }
        }
    }
}

.nav__next {
    padding: 11px 14px;
    border-radius: 7px;
    background: #38524b;
    position: absolute;
    bottom: 290px;
    right: 25px;
    z-index: 1000;
    cursor: pointer;

    @media (max-width: 1440px) {
        bottom: 200px;
        right: 20px;
    }
}

.nav__prev {
    padding: 11px 14px;
    border-radius: 7px;
    background: #38524b;
    position: absolute;
    bottom: 290px;
    left: 25px;
    z-index: 1000;
    cursor: pointer;

    @media (max-width: 1440px) {
        bottom: 200px;
        left: 20px;
    }
}

.similar-products {
    padding: 100px;
    background: #fafafa;
    margin: 0 -100px;

    @media (max-width: 1440px) {
        margin: 0 -80px;
        padding: 100px 80px;
    }

    @media (max-width: 1024px) {
        margin: 0 -30px;
        padding: 100px 30px;
    }

    h3 {
        font-family: var(--geo);
        font-weight: 400;
        font-size: 32px;
        line-height: 130%;
        color: #1e1e1e;
        margin: 0 0 30px 0;
    }

    &__content {
        display: flex;
        gap: 30px;

        @media (max-width: 1440px) {
            gap: 20px;
        }

        @media (max-width: 1366px) {
            gap: 30px;
        }

        @media (max-width: 1024px) {
            flex-direction: column;
        }
    }

    &__category {
        position: relative;
        background-color: #f2f2f2;
        padding: 20px 84px 35px 25px;
        border-radius: 7px;
        align-self: flex-start;

        @media (max-width: 1366px) {
            padding: 20px 70px 33px 25px;
        }

        @media (max-width: 1024px) {
            width: 944px;
            padding: 20px 0 33px 20px;
        }

        .arrow {
            position: absolute;
            right: -5px;
            bottom: 0;
            border-radius: 20% 20% 0 20%;
            background: #fff;
            padding: 13px 0 0 13px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .arrow::before {
            content: '';
            position: absolute;
            z-index: 0;
            top: 0;
            height: 10px;
            width: 10px;
            background: #fff;
            border-bottom-left-radius: 15px;
            transform: skew(0.29turn, 20deg);
        }

        .text {
            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 20px;
                line-height: 130%;
                color: #1e1e1e;

                @media (max-width: 1440px) {
                    font-size: 1.04vw;
                }

                @media (max-width: 1024px) {
                    font-size: 20px;
                }
            }

            p {
                font-family: var(--geo);
                font-weight: 400;
                font-size: 32px;
                line-height: 130%;
                color: #1e1e1e;
                margin: 7px 0 21px 0;

                @media (max-width: 1440px) {
                    margin: 7px 0 0 0;
                    font-size: 1.67vw;
                }

                @media (max-width: 1366px) {
                    margin: 3px 0 0 0;
                }

                @media (max-width: 1024px) {
                    font-size: 32px;
                }
            }
        }

        .category-img {
            padding: 0 0 0 60px;

            @media (max-width: 1440px) {
                padding: 0 0 0 25px;
                width: 175px;
            }

            @media (max-width: 1440px) {
                width: 156px;
            }
        }
    }
}

.advantages {
    display: flex;
    gap: 20px;
    padding: 0 0 150px 0;

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    div {
        text-align: left;
        border-radius: 7px;
        background: #f2f2f2;

        p {
            font-family: var(--geo);
            font-weight: 400;
            font-size: 20px;
            line-height: 130%;
            color: #1e1e1e;
            margin: 20px 0 15px 0;
        }

        span {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #1e1e1e;
        }

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

    &-item-1 {
        padding: 20px 111px 112px 20px;

        @media (max-width: 1440px) {
            padding: 20px 60px 60px 20px;
        }

        @media (max-width: 1366px) {
            padding: 20px 30px 60px 20px;
        }
    }

    &-item-2 {
        padding: 20px 59px 112px 20px;

        @media (max-width: 1440px) {
            padding: 20px 60px 60px 20px;
        }
    }

    &-item-3 {
        padding: 20px 43px 138px 20px;
        white-space: nowrap;

        @media (max-width: 1440px) {
            padding: 20px 60px 60px 20px;
            white-space: wrap;
        }
    }

    &-item-4 {
        padding: 20px 148px 138px 20px;
        white-space: nowrap;

        @media (max-width: 1440px) {
            padding: 20px 60px 60px 20px;
        }
    }

    &-item-5 {
        padding: 20px 142px 20px 20px;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 1440px) {
            padding: 20px 60px 60px 20px;
        }
    }
}
</style>


<style>
.swiper-pagination {
    bottom: 15px !important;
}

.swiper-pagination-bullet {
    background: #fff;
    border-radius: 100%;
}

.swiper-pagination-bullet-active {
    background: #2d3c38;
}

.similar-products__item {

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }

    .swiper-wrapper {
        margin: 0;
        width: 407px;

        @media (max-width: 1440px) {
            width: 307px;
        }

        @media (max-width: 1366px) {
            width: 277px;
        }
    }

    .swiper-pagination {
        bottom: 90px !important;
    }

    .swiper-pagination-bullet {
        background: #fff;
        border-radius: 100%;
    }

    .swiper-pagination-bullet-active {
        background: #2d3c38;
    }

    p {
        font-family: var(--geo);
        font-weight: 300;
        font-size: 20px;
        line-height: 130%;
        color: #1e1e1e;
        margin: 20px 0 15px 0;
    }

    .category {
        border: 1px solid #38524b;
        border-radius: 100px;
        padding: 9px 20px 10px 20px;
        background: #2d3c38;
        font-family: var(--geo);
        font-weight: 300;
        font-size: 16px;
        line-height: 130%;
        color: #fff;
        position: absolute;
        top: 15px;
        left: 15px;

        @media (max-width: 1440px) {
            font-size: 0.83vw;
        }
    }

    .price {
        display: flex;
        gap: 30px;
        align-items: center;

        span {
            font-family: var(--geo);
            font-weight: 500;
            font-size: 20px;
            line-height: 130%;
            color: #1e1e1e;
            white-space: nowrap;
        }

        div {
            display: flex;
            gap: 10px;
            align-items: center;

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #1e1e1e;
                white-space: nowrap;
            }
        }
    }
}
</style>