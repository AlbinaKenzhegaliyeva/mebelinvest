<template>
    <div class="page">
        <TheHeader @language-changed="updateLanguage" />
        <!-- <div class="banner">
            <h1>{{ currentCategory.name }}</h1>
        </div> -->
        <div class="category">
            <h2>{{ $t('categoryTitle') }}</h2>
            <div class="category__slider">
                <swiper class="mySwiper" :scrollbar="{ hide: false, draggable: true, mousewheel: true, }"
                    :modules="modules" :breakpoints="breakpoints" :freeMode="true" :mousewheel="true">
                    <swiper-slide v-for="category in categories" :key="category.id">
                        <nuxt-link :to="`/category/${category.id}`">
                            <div class="category-item">
                                <img :src="'https://mebelinvest.kz/api/media/category_photos/' + category.photo"
                                    alt="item" class="category-img">
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

        <!-- <TheLoaderCategory v-if="furnitures_length <= 0" /> -->
        <div class="furniture">
            <div class="furniture__list">
                <div class="furniture-item" v-for="furniture in furnitures.furniture" :key="furniture.id">
                    <nuxt-link :to="`/product/${furniture.id}`">
                        <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                            <swiper-slide v-for="(photo, index) in furniture.photos" :key="index">
                                <img :src="'https://mebelinvest.kz/api/media/furniture_photos/' + photo.image"
                                    alt="category" class="category-img">
                            </swiper-slide>
                            <div class="furniture-item__name">
                                {{ furniture.category.name }}
                            </div>
                            <p> {{ furniture.name }}</p>
                            <div class="furniture-item__price">
                                <span> {{ formatPrice(furniture.price) }} ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span> {{ furniture.short_description }}</span>
                                </div>
                            </div>
                            <button @click="openProduct(furniture.id)">{{ $t('readMore') }}</button>
                        </swiper>
                    </nuxt-link>
                </div>
            </div>

            <div class="furniture__filter">
                <div class="furniture__filter-category">
                    <div @click="selectCategory(null)" :class="{ active: categoryId === null }">{{ $t('allCategory') }}
                    </div>
                    <div v-for="category in categories" :key="category.id" @click="selectCategory(category.id)"
                        :class="{ active: +categoryId === category.id }">{{
                            category.name }}
                    </div>
                </div>

                <div class="furniture__filter-category-mb">
                    <swiper class="mySwiper3" :modules="modules" :breakpoints="breakpoints2" :freeMode="true"
                        :mousewheel="true">
                        <swiper-slide @click="selectCategory(null)">
                            <div :class="{ active: categoryId === null }">{{ $t('allCategory') }}</div>
                        </swiper-slide>
                        <swiper-slide v-for="category in categories" :key="category.id"
                            @click="selectCategory(category.id)">
                            <div :class="{ active: +categoryId === category.id }">{{ category.name }}</div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture__filter-pagination" v-if="furnitures_length >= 16">
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
            <div class="company-info">
                <div class="company-info__text">
                    <h3>{{ $t('aboutCompany') }}</h3>
                    <span>{{ $t('aboutCompanyText') }}</span>
                    <span>{{ $t('aboutCompanyAnotherText') }}</span>
                    <button @click="makeRequest" class="btn">{{ $t('applyRequest') }}</button>
                </div>
                <img src="@/assets/img/companyy.png" alt="sofa" class="sofa">
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/galka.svg" alt="item">
                        <span>{{ $t('card_1') }}</span>
                    </template>
                    {{ $t('card_1_text') }}
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/document.svg" alt="item">
                        <span>{{ $t('card_2') }}</span>
                    </template>
                    {{ $t('card_2_text') }}
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/coin.svg" alt="item">
                        <span>{{ $t('card_3') }}</span>
                    </template>
                    {{ $t('card_3_text') }}
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/medal.svg" alt="item">
                        <span>{{ $t('card_4') }}</span>
                    </template>
                    {{ $t('card_4_text') }}
                </TheAccordion>
                <TheAccordion>
                    <template #header>
                        <img src="@/assets/img/star.svg" alt="item">
                        <span>{{ $t('card_5') }}</span>
                    </template>
                    {{ $t('card_5_text') }}
                </TheAccordion>
                <button @click="makeRequest" class="btn__mb">{{ $t('applyRequest') }}</button>
            </div>

            <div class="company-list">
                <div class="company-item-1">
                    <img src="@/assets/img/galka.svg" alt="item">
                    <p>{{ $t('card_1') }}</p>
                    <span>{{ $t('card_1_text') }}</span>
                </div>
                <div class="company-item-2">
                    <img src="@/assets/img/document.svg" alt="item">
                    <p>{{ $t('card_2') }}</p>
                    <span>{{ $t('card_2_text') }}</span>
                </div>
                <div class="company-item-3">
                    <img src="@/assets/img/coin.svg" alt="item">
                    <p>{{ $t('card_3') }}</p>
                    <span>{{ $t('card_3_text') }}</span>
                </div>
                <div class="company-item-4">
                    <img src="@/assets/img/medal.svg" alt="item">
                    <p>{{ $t('card_4') }}</p>
                    <span>{{ $t('card_4_text') }}</span>
                </div>
                <div class="company-item-5">
                    <div>
                        <img src="@/assets/img/star.svg" alt="item">
                        <p>{{ $t('card_5') }}</p>
                        <span>{{ $t('card_5_text') }}</span>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>

    <ThePopUp v-if="request" @close-popup="closePopUp" />
</template>

<script>
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
                    spaceBetween: 21,
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
            categoryId: this.$route.params.id,
            categories: [],
            furnitures: [],
            currentCategory: [],
            furnitures_length: null,
            currentLanguage: "RU",
        }
    },
    async mounted() {
        const savedLanguage = localStorage.getItem('language') || 'RU';
        this.currentLanguage = savedLanguage;

        try {
            await this.getCategories();
            await this.getCurrentCategory();
            await this.filterByCategory(this.categoryId);
            this.updateLanguage(savedLanguage); // Вызываем после загрузки всех данных
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        } catch (error) {
            console.error("Error during initialization:", error);
        }
    },
    methods: {
        formatPrice(value) {
            return value.toLocaleString('ru-RU'); // Форматирует с пробелами как в русском языке
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
        async getCategories() {
            let url = 'https://mebelinvest.kz/api/categories/';

            try {
                const response = await axios.get(url);
                console.log(response.data);
                this.categories = response.data;

                // Preserve original data for each category
                this.categories.forEach((category) => {
                    category.originalName = category.name; // Save Russian name
                });
            } catch (error) {
                console.error(error);
            }
        },

        async getCurrentCategory() {
            let url = `https://mebelinvest.kz/api/categories/${this.categoryId}`;

            try {
                const response = await axios.get(url);
                console.log(response.data);
                this.currentCategory = response.data;

                this.currentCategory.originalName = response.data.name; // Save Russian name
            } catch (error) {
                console.error(error);
            }
        },

        async filterByCategory(categoryId = null) {
            let url = 'https://mebelinvest.kz/api/overview/';

            if (categoryId) {
                url += `?category_ids=${categoryId}`;
            }

            try {
                const response = await axios.get(url);
                console.log(response.data);
                this.furnitures = response.data;
                this.furnitures_length = response.data.furniture.length;

                // Preserve original data for categories and furniture
                this.furnitures.categories.forEach((category) => {
                    category.originalName = category.name; // Save Russian name
                });

                this.furnitures.furniture.forEach((item) => {
                    item.originalName = item.name; // Save Russian name
                    item.originalDescription = item.description; // Save Russian description
                    item.originalShortDescription = item.short_description; // Save Russian short description

                    if (item.category) {
                        item.category.originalName = item.category.name; // Save category Russian name
                    }
                });

                this.updateLanguage(this.currentLanguage);
            } catch (error) {
                console.error(error);
            }
        },
        async selectCategory(categoryId) {
            this.categoryId = categoryId;
            await this.filterByCategory(categoryId);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        updateLanguage(language) {
            this.currentLanguage = language;

            // Update current category
            if (this.currentCategory) {
                this.currentCategory.name =
                    language === "RU"
                        ? this.currentCategory.originalName
                        : this.currentCategory.name_kz;
            }

            // Update categories
            if (this.categories) {
                this.categories.forEach((category) => {
                    category.name =
                        language === "RU"
                            ? category.originalName
                            : category.name_kz;
                });
            }

            // Update furnitures
            if (this.furnitures) {
                // Update categories within furnitures
                if (this.furnitures.categories) {
                    this.furnitures.categories.forEach((category) => {
                        category.name =
                            language === "RU"
                                ? category.originalName
                                : category.name_kz;
                    });
                }

                // Update furniture items
                if (this.furnitures.furniture) {
                    this.furnitures.furniture.forEach((item) => {
                        item.name =
                            language === "RU"
                                ? item.originalName
                                : item.name_kz;

                        item.description =
                            language === "RU"
                                ? item.originalDescription
                                : item.description_kz;

                        item.short_description =
                            language === "RU"
                                ? item.originalShortDescription
                                : item.short_description_kz;

                        if (item.category) {
                            item.category.name =
                                language === "RU"
                                    ? item.category.originalName
                                    : item.category.name_kz;
                        }
                    });
                }
            }
        }
    },
}
</script>

<style lang="scss">
.swiper-wrapper {
    margin: 0 0 40px 0;

    @media (max-width: 480px) {
        margin: 0 0 30px 0;
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

.furniture__filter-category-mb {
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
}

.furniture-item {
    position: relative;
    overflow: hidden;

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 547px;
        border-radius: 10px;
        object-fit: cover;
        position: relative;

        @media (max-width: 1440px) {
            // width:auto;
            //height: 234px;
            height: 447px;
        }

        @media (max-width: 480px) {
            // height: 295px;
            height: 460px;
        }
    }

    .swiper-wrapper {
        margin: 0;
        width: 407px;

        @media (max-width: 1440px) {
            width: 250px;
        }
    }

    .swiper-pagination {
        bottom: 90px !important;

        @media (max-width: 480px) {
            bottom: 140px !important;
        }
    }

    .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
    }

    .swiper-pagination-bullet-active {
        background: #fff;
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
            margin: 15px 0;
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
        z-index: 100;

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
            margin: 20px 0 0 0;
            pointer-events: auto;
        }
    }

    a {
        text-decoration: none;
    }
}
</style>

<style lang="scss" scoped>
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
    //padding: 40px 0 50px 0;
    padding: 100px 0 50px 0;
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

            .category-img {
                width: 300px;
                height: 200px;

                @media (max-width: 1440px) {
                    width: 250px;
                }

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
            // width: auto;

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
    padding: 70px 100px 150px;
    margin: 0 -100px;
    background: #fafafa;

    @media (max-width: 1440px) {
        padding: 70px 80px 100px;
        margin: 0 -80px;
    }

    @media (max-width: 1024px) {
        padding: 50px 30px;
        margin: 0 -30px;
    }

    @media (max-width: 480px) {
        padding: 30px 0 50px 0;
        margin: 0;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(3, auto);
        column-gap: 25px;
        row-gap: 30px;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 20px;
            row-gap: 30px;
        }

        @media (max-width: 480px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, auto);
            column-gap: 15px;
            row-gap: 30px;
        }
    }

    &-item {
        position: relative;
        overflow: hidden;

        .swiper-slide img {
            display: block;
            width: 100%;
            height: 430px;
            border-radius: 10px;
            object-fit: cover;
            position: relative;

            @media (max-width: 1440px) {
                // width:auto;
                //height: 234px;
                height: 330px;
            }

            @media (max-width: 480px) {
                height: 220px;
            }
        }

        .swiper-wrapper {
            margin: 0;
            width: 407px;

            @media (max-width: 1440px) {
                width: 250px;
            }
        }

        .swiper-pagination {
            bottom: 90px !important;

            @media (max-width: 480px) {
                bottom: 140px !important;
            }
        }

        .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5);
            border-radius: 100%;
        }

        .swiper-pagination-bullet-active {
            background: #fff;
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
                margin: 10px 0;
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
            z-index: 100;

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
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
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
                padding: 11px 43px;
                border: none;
                background: #2d3c38;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 14px;
                line-height: 100%;
                color: #fff;
                width: -webkit-fill-available;
                margin: 10px 0 0 0;
                pointer-events: auto;
            }
        }

        a {
            text-decoration: none;
        }
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

    @media (max-width: 480px) {
        margin: 30px 0 0 0;
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
            margin: 0;

            .swiper-wrapper {
                align-items: center;
                width: 375px;
            }

            .swiper-slide {
                width: auto !important;
                white-space: nowrap;

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
    padding: 0 100px 100px;
    margin: 0 -100px;
    background: #fafafa;
    text-align: center;
    position: relative;

    @media (max-width: 1440px) {
        margin: 0 -80px;
        padding: 0 80px 100px;
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
            width: 800px;
        }

        @media (max-width: 1200px) {
            width: 600px;
        }

        @media (max-width: 480px) {
            display: none;
        }
    }

    &-info {
        display: flex;
        gap: 79px;
        justify-content: space-between;

        @media (max-width: 1440px) {}

        @media (max-width: 1366px) {}

        @media (max-width: 1024px) {}

        @media (max-width: 480px) {
            display: block;
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

            h3 {
                font-family: var(--geo);
                font-weight: 400;
                font-size: 48px;
                line-height: 130%;
                text-align: left;
                color: #2d3c38;
                margin: 0;
                white-space: nowrap;

                @media (max-width: 1440px) {
                    font-size: 1.67vw;
                }

                @media (max-width: 1024px) {
                    font-size: 24px;
                }

                @media (max-width: 480px) {
                    text-align: left;
                    font-size: 20px;
                    font-weight: 300;
                    color: #1e1e1e;
                    margin: 0 0 15px 0;
                }
            }

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 20px;
                line-height: 130%;
                text-align: left;
                color: #2d3c38;

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

            .btn {
                border-radius: 5px;
                padding: 9px 108px;
                background: #2d3c38;
                font-family: var(--geo);
                font-weight: 300;
                font-size: 16px;
                line-height: 130%;
                color: #fff;
                border: none;
                white-space: nowrap;
                cursor: pointer;
                width: fit-content;

                @media (max-width: 480px) {
                    display: none;
                }
            }
        }
    }

    .btn__mb {
        display: none;

        @media (max-width: 480px) {
            display: block;
            background: #2d3c38;
            color: #fff;
            width: 100%;
            margin: 30px 0 0 0;
            border-radius: 5px;
            padding: 9px 108px;
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            border: none;
            white-space: nowrap;
            cursor: pointer;
        }
    }

    &-list {
        display: flex;
        gap: 20px;
        padding: 60px 0 0 0;

        @media (max-width: 1440px) {}

        @media (max-width: 1024px) {
            flex-direction: column;
            padding: 0 30px;
        }

        @media (max-width: 480px) {
            display: none;
        }

        div {
            text-align: left;
            border-radius: 7px;
            background: #f2f2f2;
            width: 100%;

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
        }
    }

    &-item-1 {
        padding: 20px;
    }

    &-item-2 {
        padding: 20px;
    }

    &-item-3 {
        padding: 20px;
    }

    &-item-4 {
        padding: 20px;
    }

    &-item-5 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
    }
}
</style>
