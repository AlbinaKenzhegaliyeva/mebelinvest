<template>
    <div class="page">
        <TheHeader />
        <div class="banner">
            <h1>Широкий выбор мебели на заказ</h1>
        </div>
        <div class="category">
            <h2>Категории</h2>
            <div class="category__slider">
                <swiper class="mySwiper" :scrollbar="{ hide: false, draggable: true, mousewheel: true, }"
                    :modules="modules" :breakpoints="breakpoints" :freeMode="true" :mousewheel="true">
                    <swiper-slide v-for="category in categories" :key="category.id">
                        <nuxt-link :to="`/category/${category.id}`">
                            <div class="category-item" @click="openCategory">
                                <img :src="'http://45.156.25.213:8040/media/category_photos/' + category.photo"
                                    alt="item">
                                <div class="arrow">
                                    <img src="@/assets/img/strelka.svg" alt="arrow">
                                </div>
                            </div>
                            <span>{{ category.name }}</span>
                        </nuxt-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="furniture">
            <div class="furniture__list">

                <div class="furniture-item" v-for="furniture in furnitures.furniture" :key="furniture.id">
                    <nuxt-link :to="`/product/${furniture.id}`">
                        <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                            <swiper-slide v-for="(photo, index) in furniture.photos" :key="index">
                                <img :src="'http://45.156.25.213:8040/media/furniture_photos/' + photo" alt="category"
                                    class="category-img">
                                <div class="furniture-item__name">
                                    {{ furniture.category.name }}
                                </div>
                            </swiper-slide>
                            <p> {{ furniture.name }}</p>
                            <div class="furniture-item__price">
                                <span> {{ furniture.price }} ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span> {{ furniture.short_description }}</span>
                                </div>
                            </div>
                            <button>Подробнее</button>
                        </swiper>
                    </nuxt-link>
                </div>
            </div>

            <div class="furniture__filter">
                <div class="furniture__filter-category">
                    <div @click="selectCategory(null)" :class="{ active: activeCategory === null }">Все категории</div>
                    <div @click="selectCategory(1)" :class="{ active: activeCategory === 1 }">Кухня</div>
                    <div @click="selectCategory(2)" :class="{ active: activeCategory === 2 }">Гостиная</div>
                    <div @click="selectCategory(5)" :class="{ active: activeCategory === 5 }">Спальня</div>
                    <div @click="selectCategory(4)" :class="{ active: activeCategory === 4 }">Ванная</div>
                    <div @click="selectCategory(3)" :class="{ active: activeCategory === 3 }">Прихожая</div>
                </div>

                <div class="furniture__filter-category-mb">
                    <swiper class="mySwiper3" :modules="modules" :breakpoints="breakpoints2" :freeMode="true"
                        :mousewheel="true">
                        <swiper-slide @click="selectCategory(null)">
                            <div :class="{ active: activeCategory === null }">Все
                                категории</div>
                        </swiper-slide>
                        <swiper-slide @click="selectCategory(1)">
                            <div :class="{ active: activeCategory === 1 }">Кухня</div>
                        </swiper-slide>
                        <swiper-slide @click="selectCategory(2)">
                            <div :class="{ active: activeCategory === 2 }">Гостиная</div>
                        </swiper-slide>
                        <swiper-slide @click="selectCategory(5)">
                            <div :class="{ active: activeCategory === 5 }">Спальня</div>
                        </swiper-slide>
                        <swiper-slide @click="selectCategory(4)">
                            <div :class="{ active: activeCategory === 4 }">Ванная</div>
                        </swiper-slide>
                        <swiper-slide @click="selectCategory(3)">
                            <div :class="{ active: activeCategory === 3 }">Прихожая</div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture__filter-pagination">
                    <div class="active">1</div>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <div class="last">10</div>
                    <img src="@/assets/img/right.svg" alt="arrow">
                </div>
            </div>
        </div>


        <div class="company">
            <img src="@/assets/img/divan.svg" alt="sofa" class="sofa">
            <div class="company-info">
                <h3>О компании</h3>
                <div class="company-info__text">
                    <span>МебельИнвест - это опытный и надежный производитель с большим опытом работы.</span>
                    <span>Мы поможем вам оперативно реализовать любую идею, как дома, так и в коммерческих
                        помещениях!</span>
                </div>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/galka.svg" alt="item">
                        <span>Даем гарантии на продукцию</span>
                    </template>
                    Текст блока
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/document.svg" alt="item">
                        <span>Сертификаты участника госзакупок</span>
                    </template>
                    Текст блока
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/coin.svg" alt="item">
                        <span>Предоставляем рассрочку</span>
                    </template>
                    Текст блока
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/medal.svg" alt="item">
                        <span>20 лет на рынке</span>
                    </template>
                    Текст блока
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/star.svg" alt="item">
                        <span>4,9 рейтинг 2GIS</span>
                    </template>
                    Текст блока
                </TheAccordion>
                <button @click="makeRequest">Оставить заявку</button>
            </div>

            <div class="company-list">
                <div class="company-item-1">
                    <img src="@/assets/img/galka.svg" alt="item">
                    <p>Даем гарантии на продукцию</p>
                    <span>Текст для блока</span>
                </div>
                <div class="company-item-2">
                    <img src="@/assets/img/document.svg" alt="item">
                    <p>Сертификаты участника госзакупок</p>
                    <span>Текст для блока</span>
                </div>
                <div class="company-item-3">
                    <img src="@/assets/img/coin.svg" alt="item">
                    <p>Предоставляем рассрочку</p>
                    <span>Текст для блока</span>
                </div>
                <div class="company-item-4">
                    <img src="@/assets/img/medal.svg" alt="item">
                    <p>20 лет на рынке</p>
                    <span>Текст для блока</span>
                </div>
                <div class="company-item-5">
                    <div>
                        <img src="@/assets/img/star.svg" alt="item">
                        <p>4,9 рейтинг 2GIS</p>
                        <span>Текст для блока</span>
                    </div>
                    <a href="#">Ссылка на 2GIS</a>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>

    <ThePopUp v-if="request" @close-popup="closePopUp" />
</template>

<script>
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, Pagination, Scrollbar],
            freeMode: true,
            direction: 'horizontal',
            breakpoints: {
                '1920': {
                    slidesPerView: 4,
                    spaceBetween: 31,
                },
                '1440': {
                    slidesPerView: 4,
                    spaceBetween: 31,
                },
                '1366': {
                    slidesPerView: 4,
                    spaceBetween: 21,
                },
                '1024': {
                    slidesPerView: 2,
                    spaceBetween: 33,
                },
                '480': {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                '390': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            },
            breakpoints2: {
                '390': {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
            },
            request: false,
            categories: [],
            furnitures: [],
            activeCategory: null,
        }
    },
    mounted() {
        this.getCategories();
        this.selectCategory(null);
        //this.getFurniture();
    },
    methods: {
        openCategory() {
            this.$router.push('/category/about');
        },
        makeRequest() {
            this.request = true;
            document.body.style.overflow = 'hidden';
        },
        closePopUp() {
            this.request = false;
            document.body.style.overflow = '';
        },
        openProduct() {
            this.$router.push('/product/info');
        },
        getCategories() {
            let url = 'http://45.156.25.213:8040/api/categories/';

            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    this.categories = response.data;
                })
                .catch(error => {
                    console.error(error);
                })
        },
        // getFurniture() {
        //     let url = 'http://45.156.25.213:8040/api/furniture/';

        //     axios
        //         .get(url)
        //         .then(response => {
        //             console.log(response.data);
        //             this.furnitures = response.data;
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         })
        // },
        filterByCategory(categoryId = null) {
            let url = 'http://45.156.25.213:8040/api/overview/';

            // Если категория указана, добавляем параметр category_ids
            if (categoryId) {
                url += `?category_ids=${categoryId}`;
            }

            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    this.furnitures = response.data;
                })
                .catch(error => {
                    console.error(error);
                })

        },
        selectCategory(categoryId) {
            this.activeCategory = categoryId;
            this.filterByCategory(categoryId);
        },
    },
}
</script>

<style lang="scss">
.page {
    padding: 0 100px;

    @media (max-width: 1440px) {
        padding: 0 80px;
    }

    @media (max-width: 1024px) {
        padding: 0 30px;
        background: #fafafa;
    }

    @media (max-width: 480px) {
        padding: 0 15px;
    }
}

.banner {
    padding: 170px 102px 70px 101px;
    margin: 0 -100px;
    background: #fafafa;

    @media (max-width: 1440px) {
        padding: 170px 82px 70px 81px;
        margin: 0 -80px;
    }

    @media (max-width: 1024px) {
        padding: 170px 99px 70px 98px;
        margin: 0 -30px;
    }

    @media (max-width: 480px) {
        padding: 96px 22px 40px;
        margin: 0 -15px;
    }

    h1 {
        font-family: var(--geo);
        font-weight: 400;
        font-size: 128px;
        line-height: 130%;
        text-transform: uppercase;
        text-align: center;
        color: #2d3c38;
        margin: 0;

        @media (max-width: 1440px) {
            font-size: 6.67vw;
        }

        @media (max-width: 1024px) {
            font-size: 64px;
        }

        @media (max-width: 480px) {
            font-size: 32px;
        }
    }
}

.category {
    padding: 40px 0 50px 0;
    // margin: 0 -100px 0 0;


    @media (max-width: 1024px) {
        padding: 0;
    }

    h2 {
        font-family: var(--geo);
        font-weight: 400;
        font-size: 32px;
        line-height: 130%;
        color: #1e1e1e;
        margin: 0;

        @media (max-width: 1024px) {
            font-size: 24px;
        }

        @media (max-width: 480px) {
            font-size: 20px;
            font-weight: 300;
        }
    }

    &__slider {
        padding: 30px 0 0 0;

        @media (max-width: 480px) {
            padding: 15px 0 0 0;
        }

        .category-item {
            position: relative;
            background-color: #f2f2f2;
            padding: 29px 54px 31px 53px;
            border-radius: 7px;
            margin: 0 0 20px 0;

            @media (max-width: 1440px) {
                padding: 20px;
            }

            @media (max-width: 480px) {
                margin: 0 0 10px 0;
                padding: 17px 30px 16px;
            }

            img {
                @media (max-width: 480px) {
                    width: 108px;
                    height: 77px;
                }
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

                @media (max-width: 480px) {
                    display: none;
                }
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

            .arrow::after {
                content: '';
                position: absolute;
                z-index: 0;
                top: 50px;
                right: 50px;
                height: 10px;
                width: 5px;
                background: #fff;
                border-bottom-left-radius: 15px;
                transform: skew(0.36turn, 65deg);
                //skew(0.4turn, 60deg)
            }
        }

        a {
            text-decoration: none;
        }

        .swiper-wrapper {
            margin: 0 0 40px 0;

            @media (max-width: 480px) {
                margin: 0 0 30px 0;
            }
        }

        .swiper-slide {
            width: auto !important;

            span {
                font-family: var(--geo);
                font-weight: 400;
                font-size: 20px;
                line-height: 130%;
                color: #1e1e1e;

                @media (max-width: 480px) {
                    font-size: 16px;
                    font-weight: 300;
                }
            }
        }

        .swiper-horizontal>.swiper-scrollbar,
        .swiper-scrollbar.swiper-scrollbar-horizontal {
            border-radius: 2px;
            height: 7px;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.05);
            width: 100%;

            @media (max-width: 480px) {
                border-radius: 1px;
                height: 4px;
            }
        }

        .swiper-scrollbar-drag {
            background: #38524b;
            border-radius: 2px;
            height: 7px;

            @media (max-width: 480px) {
                border-radius: 1px;
                height: 4px;
            }
        }
    }
}

.furniture {
    padding: 70px 100px 100px;
    margin: 0 -100px;
    background: #fafafa;

    @media (max-width: 1440px) {
        padding: 70px 80px 80px;
        margin: 0 -80px;
    }

    @media (max-width: 1024px) {
        padding: 50px 30px;
        margin: 0 -30px;
    }

    @media (max-width: 480px) {
        padding: 30px 0 40px 0;
        margin: 0 -15px;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, auto);
        column-gap: 30px;
        row-gap: 40px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
            row-gap: 30px;
        }

        @media (max-width: 480px) {
            display: grid;
            flex-direction: column;
            gap: 30px;
            grid-template-columns: none;
        }
    }

    &-item {
        .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: relative;
        }

        // .category-img {
        //     @media (max-width: 1024px) {
        //         width: 470px !important;
        //         border-radius: 10px;
        //     }
        // }

        .swiper-wrapper {
            margin: 0;
            width: 407px;

            @media (max-width: 1440px) {
                width: 250px;
            }

            // @media (max-width: 1024px) {
            //     width: 470px;
            // }
        }

        .swiper-pagination {
            bottom: 90px !important;

            @media (max-width: 480px) {
                bottom: 140px !important;
            }
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
            white-space: nowrap;
            margin: 20px 0 15px 0;

            @media (max-width: 480px) {
                font-size: 16px;
                margin: 15px 0 15px 15px;
            }
        }

        &__name {
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

            @media (max-width: 480px) {
                font-size: 12px;
                padding: 6px 15px;
            }
        }

        &__price {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 480px) {
                margin: 0 15px;
                justify-content: space-between;
            }

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

                @media (max-width: 480px) {
                    gap: 5px;
                }

                span {
                    font-family: var(--geo);
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 130%;
                    color: #1e1e1e;
                    white-space: nowrap;

                    @media (max-width: 480px) {
                        font-size: 12px;
                    }
                }
            }
        }

        button {
            display: none;

            @media (max-width: 480px) {
                display: block;
                border-radius: 5px;
                padding: 11px 128px;
                border: none;
                background: #2d3c38;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 100%;
                color: #fff;
                width: -webkit-fill-available;
                margin: 20px 15px 0 15px;
            }
        }
    }

    a {
        text-decoration: none;
    }
}

.furniture__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0 0 0;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
        align-items: flex-start;
    }

    &-category {
        display: flex;
        gap: 50px;
        align-items: center;

        @media (max-width: 1024px) {
            order: 2;
        }

        @media (max-width: 480px) {
            display: none;
        }

        div {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #1e1e1e;
            white-space: nowrap;
            cursor: pointer;
        }

        .active {
            background: #2d3c38;
            border-radius: 5px;
            padding: 10px 25px;
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #fff;
        }
    }

    &-category-mb {
        display: none;

        @media (max-width: 480px) {
            order: 2;
            display: block;
            margin: 0 0 0 15px;

            .swiper-wrapper {
                align-items: center;
                width: 375px;
            }

            .swiper-slide {
                width: auto !important;
                white-space: nowrap;
            }

            div {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 130%;
                color: #1e1e1e;
            }

            .active {
                background: #2d3c38;
                border-radius: 5px;
                color: #fff;
                padding: 10px 20px;
            }
        }
    }

    &-pagination {
        display: flex;
        gap: 25px;
        align-items: center;

        @media (max-width: 1024px) {
            order: 1;
            padding: 0 0 0 350px;
        }

        @media (max-width: 480px) {
            padding: 0 0 0 80px;
        }

        .active {
            background: #2d3c38;
            border-radius: 5px;
            padding: 5px 12px;
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #fff;
        }

        .last {
            border: 1px solid #2d3c38;
            border-radius: 5px;
            padding: 5px 6px;
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            text-align: center;
            color: #2d3c38;
        }

        span {
            font-family: var(--geo);
            font-weight: 900;
            font-size: 14px;
            line-height: 130%;
            color: #292421;
        }

    }
}

.company {
    margin: 0 -100px;
    padding: 0 0 330px 0;
    background: #fff;
    background-size: contain;
    text-align: center;
    position: relative;

    @media (max-width: 1440px) {
        margin: 0 -80px;
    }

    @media (max-width: 1024px) {
        margin: 0 -30px;
        padding: 0 0 50px 0;
    }

    @media (max-width: 480px) {
        margin: 0;
        background: #fafafa;
    }

    .sofa {
        @media (max-width: 1440px) {
            width: 100%;
        }

        @media (max-width: 480px) {
            display: none;
        }
    }

    &-info {
        position: absolute;
        top: 185px;
        left: 704px;
        right: 704px;

        @media (max-width: 1440px) {
            top: 155px;
            left: 544px;
            right: 504px;
        }

        @media (max-width: 1366px) {
            left: 500px;
        }

        @media (max-width: 1024px) {
            left: 250px;
            right: 250px;
            top: 100px;
        }

        @media (max-width: 480px) {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
        }

        h3 {
            font-family: var(--geo);
            font-weight: 400;
            font-size: 32px;
            line-height: 130%;
            text-align: center;
            color: #fafafa;
            margin: 0 0 30px 0;
            white-space: nowrap;

            @media (max-width: 1440px) {
                font-size: 1.67vw;
            }

            @media (max-width: 1024px) {
                font-size: 24px;
                margin: 0 0 25px 0;
            }

            @media (max-width: 480px) {
                text-align: left;
                font-size: 20px;
                font-weight: 300;
                color: #1e1e1e;
                margin: 0 0 15px 0;
            }
        }

        &__text {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin: 0 0 50px 0;

            @media (max-width: 480px) {
                gap: 20px;
                margin: 0 0 25px 0;
            }

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 20px;
                line-height: 130%;
                text-align: center;
                color: #fafafa;

                @media (max-width: 1440px) {
                    font-size: 1.04vw;
                }

                @media (max-width: 1024px) {
                    font-size: 16px;
                }

                @media (max-width: 480px) {
                    font-size: 14px;
                    color: #1e1e1e;
                    text-align: left;
                }
            }
        }

        button {
            border-radius: 5px;
            padding: 9px 108px;
            background: #fafafa;
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #1e1e1e;
            border: none;
            white-space: nowrap;
            cursor: pointer;

            @media (max-width: 480px) {
                background: #2d3c38;
                color: #fff;
                width: 100%;
                margin: 15px 0 0 0;
            }
        }
    }

    &-list {
        display: flex;
        gap: 20px;
        position: absolute;
        left: 100px;
        right: 100px;
        bottom: 150px;

        @media (max-width: 1440px) {
            left: 50px;
            right: 50px;
        }

        @media (max-width: 1024px) {
            flex-direction: column;
            position: relative;
            bottom: auto;
            left: 0;
            right: 0;
            padding: 0 30px;
        }

        @media (max-width: 480px) {
            display: none;
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
                cursor: pointer;
            }
        }
    }

    &-item-1 {
        padding: 20px 111px 112px 20px;

        @media (max-width: 1440px) {
            padding: 20px 60px 60px 20px;
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
            padding: 20px 60px 20px 20px;
        }
    }
}
</style>