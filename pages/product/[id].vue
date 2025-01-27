<template>
    <div class="page">
        <TheHeader @language-changed="updateLanguage" />
        <!-- <TheLoader v-if="currentFurniture.length <= 0" /> -->
        <div class="product">
            <div class="product__navigation">
                <span @click="goBack">{{ $t('home') }}</span>
                <span>/</span>
                <p>{{ currentFurniture.name }}</p>
            </div>

            <div class="product__info">
                <img src="@/assets/img/go_back.svg" alt="back" class="back" @click="goBack">
                <div class="product__slider">
                    <swiper :direction="'vertical'" :spaceBetween="10" :slidesPerView="4" :loop="true"
                        :loopedSlides="50" :modules="modules" class="gallery-thumbs" :slideToClickedSlide="true"
                        @swiper="setThumbsSwiper">
                        <swiper-slide v-for="(photo, index) in currentFurniture.photos" :key="index">
                            <img :src="'https://mebelinvest.kz/api/media/furniture_photos/' + photo.image"
                                alt="category">
                        </swiper-slide>
                    </swiper>

                    <swiper :slidesPerView="1" :loop="true" :modules="modules" class="gallery-top"
                        :thumbs="{ swiper: thumbsSwiper }" :pagination="{ clickable: true }" :navigation="navigation">
                        <swiper-slide v-for="(photo, index) in currentFurniture.photos" :key="index">
                            <img :src="'https://mebelinvest.kz/api/media/furniture_photos/' + photo.image"
                                alt="category">
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
                            <p>{{ currentFurniture.name }}</p>
                            <div class="text__price-mb">
                                <!-- <p>{{ currentFurniture.price }} ₸</p> -->
                                <p>
                                    {{ currentFurniture?.price ? formatPrice(currentFurniture.price) :
                                        currentFurniture.price }} ₸
                                </p>
                                <div>
                                    <img src="@/assets/img/rotate.svg" />
                                    <span>{{ currentFurniture.short_description }}</span>
                                </div>
                            </div>
                            <span>
                                {{ currentFurniture.description }}
                            </span>
                        </div>
                        <button @click="makeRequest">{{ $t('applyRequest') }}</button>
                    </div>
                    <div class="container__price-socials">
                        <div class="price">
                            <p>
                                {{ currentFurniture?.price ? formatPrice(currentFurniture.price) :
                                    currentFurniture.price }} ₸
                            </p>
                            <div>
                                <img src="@/assets/img/rotate.svg" />
                                <span>{{ currentFurniture.short_description }}</span>
                            </div>
                        </div>
                        <div class="kaspi" @click="openKaspi" v-if="kaspi_link">
                            <div class="kaspi__text">
                                <img src="@/assets/img/kaspi.svg" />
                                <span>{{ $t('kaspi') }}</span>
                            </div>
                            <img src="@/assets/img/uparr.svg" />
                        </div>
                        <div class="youtube" @click="openYouTube" v-if="youtube_link">
                            <div class="youtube__text">
                                <img src="@/assets/img/youtube.svg" />
                                <span>{{ $t('youtube') }}</span>
                            </div>
                            <img src="@/assets/img/uparr.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="similar-products">
            <h3>{{ $t('similarProducts') }}</h3>
            <div class="similar-products__content">
                <div class="similar-products__item" v-for="(item, index) in (furnitures?.furniture?.slice(0, 3) || [])"
                    :key="index">
                    <nuxt-link :to="`/product/${item.id}`">
                        <swiper :pagination="{ clickable: true }" :modules="modules" class="mySwiper3">
                            <swiper-slide v-for="(photo, index) in item.photos" :key="index">
                                <img :src="'https://mebelinvest.kz/api/media/furniture_photos/' + photo.image"
                                    alt="category">
                            </swiper-slide>
                            <div class="category">
                                {{ item.category.name }}
                            </div>
                            <p> {{ item.name }}</p>
                            <div class="price">
                                <span> {{ formatPrice(item.price) }}₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>{{ item.short_description }}</span>
                                </div>
                            </div>
                            <button @click="openProduct(item.id)">{{ $t('readMore') }}</button>
                        </swiper>
                    </nuxt-link>
                </div>
                <div class="similar-products__category">
                    <nuxt-link :to="`/category/${category_id}`">
                        <div class="text">
                            <span>{{ $t('categoryTitle') }}</span>
                            <p>{{ category_name }}</p>
                        </div>
                        <img :src="'https://mebelinvest.kz/api/media/category_photos/' + category_photo" alt="category"
                            class="category-img" @click="goToCategory">
                        <div class="arrow">
                            <img src="@/assets/img/strelka.svg" alt="arrow">
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <hr>
            <div class="similar-products__category-mb">
                <nuxt-link :to="`/category/${category_id}`">
                    <div class="similar-products__category-mb-container">
                        <img :src="'https://mebelinvest.kz/api/media/category_photos/' + category_photo" alt="category"
                            class="category-img" @click="goToCategory">
                        <div>
                            <p>{{ category_name }}</p>
                            <span>{{ $t('categoryTitle') }}</span>
                        </div>
                    </div>
                    <img src="@/assets/img/caret.svg" alt="arrow">
                </nuxt-link>
            </div>
            <hr>
        </div>

        <div class="advantages">
            <div class="advantages-item-1">
                <img src="@/assets/img/galka.svg" alt="item">
                <p>{{ $t('card_1') }}</p>
                <span>{{ $t('card_1_text') }}</span>
            </div>
            <div class="advantages-item-2">
                <img src="@/assets/img/document.svg" alt="item">
                <p>{{ $t('card_2') }}</p>
                <span>{{ $t('card_2_text') }}</span>
            </div>
            <div class="advantages-item-3">
                <img src="@/assets/img/coin.svg" alt="item">
                <p>{{ $t('card_3') }}</p>
                <span>{{ $t('card_3_text') }}</span>
            </div>
            <div class="advantages-item-4">
                <img src="@/assets/img/medal.svg" alt="item">
                <p>{{ $t('card_4') }}</p>
                <span>{{ $t('card_4_text') }}</span>
            </div>
            <div class="advantages-item-5">
                <div>
                    <img src="@/assets/img/star.svg" alt="item">
                    <p>{{ $t('card_5') }}</p>
                    <span>{{ $t('card_5_text') }}</span>
                </div>
            </div>
        </div>
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
        <TheFooter />
    </div>

    <ThePopUp v-if="request" @close-popup="closePopUp" />
</template>

<script>
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import axios from 'axios';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            request: false,
            furnitureId: this.$route.params.id,
            currentFurniture: [],
            furnitures: {},
            currentCategoryId: null,
            category_name: '',
            category_photo: '',
            category_id: null,
            kaspi_link: '',
            youtube_link: '',
            currentLanguage: "RU",
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
    async mounted() {
        const savedLanguage = localStorage.getItem('language') || 'RU';
        this.currentLanguage = savedLanguage;

        try {
            await this.getCurrentFurniture();
            if (this.currentCategoryId) {
                await this.filterByCategory(this.currentCategoryId);
            }

            // После загрузки всех данных обновляем язык
            this.updateLanguage(savedLanguage);

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
        makeRequest() {
            let source = "Заявка";
            document.body.style.overflow = 'hidden';
            let url = `https://mebelinvest.kz/api/click/${encodeURIComponent(source)}/`;
            const csrfToken = this.getCookie('csrftoken');
            axios
                .post(url, {}, {
                    headers: {
                        'X-CSRFToken': csrfToken, // Добавляем CSRF-токен в заголовок
                    },
                })

                .then(response => {
                    console.log(response);
                    this.request = true;
                    // document.body.style.overflow = 'hidden';
                })
                .catch(error => {
                    console.error(error);
                    document.body.style.overflow = '';
                })
        },
        closePopUp() {
            this.request = false;
            document.body.style.overflow = '';
        },
        openProduct(furnitureId) {
            this.$router.push(`/product/${furnitureId}`);
        },
        goBack() {
            this.$router.push('/');
        },
        openKaspi() {
            window.open(this.kaspi_link, '_blank');
        },
        openYouTube() {
            window.open(this.youtube_link, '_blank');
        },
        async getCurrentFurniture() {
            let url = `https://mebelinvest.kz/api/furniture/${this.furnitureId}`;

            try {
                const response = await axios.get(url);
                console.log(response.data);
                this.currentFurniture = response.data;
                this.category_name = response.data.category.name;
                this.category_photo = response.data.category.photo;
                this.category_id = response.data.category.id;

                // Save the original data for language switching
                this.currentFurniture.originalName = response.data.name;
                this.currentFurniture.originalDescription = response.data.description;
                this.currentFurniture.originalShortDescription = response.data.short_description;
                this.kaspi_link = response.data.kaspi_link;
                this.youtube_link = response.data.youtube_link;
                if (this.currentFurniture.category) {
                    this.currentFurniture.category.originalName = response.data.category.name;
                }

                // Сохраняем ID категории текущего товара
                if (this.currentFurniture.category && this.currentFurniture.category.id) {
                    this.currentCategoryId = this.currentFurniture.category.id;
                }
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

                // Preserve original data for language switching
                this.furnitures.categories.forEach((category) => {
                    category.originalName = category.name; // Save original Russian name
                });

                this.furnitures.furniture.forEach((item) => {
                    item.originalName = item.name; // Save original Russian name
                    item.originalDescription = item.description; // Save original Russian description
                    item.originalShortDescription = item.short_description; // Save original Russian short description
                    if (item.category) {
                        item.category.originalName = item.category.name; // Save original category name
                    }
                });
            } catch (error) {
                console.error(error);
            }
        },
        updateLanguage(language) {
            this.currentLanguage = language;

            if (this.currentFurniture) {
                this.currentFurniture.name =
                    language === "RU"
                        ? this.currentFurniture.originalName
                        : this.currentFurniture.name_kz;

                this.currentFurniture.description =
                    language === "RU"
                        ? this.currentFurniture.originalDescription
                        : this.currentFurniture.description_kz;

                this.currentFurniture.short_description =
                    language === "RU"
                        ? this.currentFurniture.originalShortDescription
                        : this.currentFurniture.short_description_kz;

                if (this.currentFurniture.category) {
                    this.category_name =
                        language === "RU"
                            ? this.currentFurniture.category.originalName
                            : this.currentFurniture.category.name_kz;
                }
            }

            if (this.furnitures.categories) {
                this.furnitures.categories.forEach((category) => {
                    category.name =
                        language === "RU"
                            ? category.originalName // Restore Russian name
                            : category.name_kz; // Use Kazakh name
                });
            }

            if (this.furnitures.furniture) {
                this.furnitures.furniture.forEach((item) => {
                    item.name =
                        language === "RU"
                            ? item.originalName // Restore Russian name
                            : item.name_kz; // Use Kazakh name
                    item.description =
                        language === "RU"
                            ? item.originalDescription // Restore Russian description
                            : item.description_kz; // Use Kazakh description
                    item.short_description =
                        language === "RU"
                            ? item.originalShortDescription // Restore Russian short description
                            : item.short_description_kz; // Use Kazakh short description

                    if (item.category) {
                        item.category.name =
                            language === "RU"
                                ? item.category.originalName // Restore Russian category name
                                : item.category.name_kz; // Use Kazakh category name
                    }
                });
            }
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

    @media (max-width: 480px) {
        padding: 0 15px;
        background: #fafafa;
    }
}

.product {
    background: #fafafa;
    padding: 125px 100px 0 100px;
    margin: 0 -100px;

    @media (max-width: 1440px) {
        padding: 125px 80px 0 80px;
        margin: 0 -80px;
    }

    @media (max-width: 1024px) {
        margin: 0 -30px;
        padding: 125px 30px 0 30px;
    }

    @media (max-width: 480px) {
        margin: 0 -15px;
        padding: 60px 0 0 0;
    }

    &__navigation {
        display: flex;
        gap: 15px;

        @media (max-width: 480px) {
            display: none;
        }

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

        @media (max-width: 480px) {
            padding: 0;
            gap: 15px;
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

        @media (max-width: 480px) {
            display: block;
            background: #fafafa;
            padding: 0 15px;
            width: -webkit-fill-available;
        }

        .container__price-socials {
            display: flex;
            flex-direction: column;
            gap: 15px;

            @media (max-width: 480px) {
                margin: 30px 0 0 0;
            }

            .kaspi,
            .youtube {
                border-radius: 7px;
                background: #f2f2f2;
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                padding: 15px;
                cursor: pointer;

                @media (max-width: 480px) {
                    padding: 10px;
                    align-items: center;
                }

                &__text {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;

                    @media (max-width: 480px) {
                        flex-direction: row;
                        align-items: center;
                        gap: 41px;
                    }

                    span {
                        font-family: var(--geo);
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 130%;
                        color: #1e1e1e;
                    }
                }
            }
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

            @media (max-width: 480px) {
                display: none;
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

            @media (max-width: 480px) {
                gap: 30px;
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

                @media (max-width: 480px) {
                    margin: 0 0 15px 0;
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

                @media (max-width: 480px) {
                    width: 100%;
                }
            }

            &__price-mb {
                display: none;

                @media (max-width: 480px) {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 0 20px 0;

                    p {
                        font-family: var(--geo);
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 130%;
                        color: #1e1e1e;
                        margin: 0;
                    }

                    div {
                        display: flex;
                        align-items: center;
                        gap: 5px;

                        span {
                            font-family: var(--geo);
                            font-weight: 300;
                            font-size: 12px;
                            line-height: 130%;
                            color: #1e1e1e;
                        }
                    }
                }
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

            @media (max-width: 480px) {
                display: none;
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
            width: 525px;
            height: 100%;
            margin: 0;
            position: relative;

            @media (max-width: 1440px) {
                width: 500px;
                height: 100%;
            }

            @media (max-width: 430px) {
                height: 100%;
                width: 430px;
                border-radius: 0;
            }

            @media (max-width: 420px) {
                height: 100%;
                width: 414px;
            }

            @media (max-width: 390px) {
                height: 100%;
                width: 390px;
            }

            .swiper-slide img {
                width: 525px; //added recently
                height: 700px; //added recently
                object-fit: contain;

                @media (max-width: 1440px) {
                    width: 500px;
                    height: auto;
                }

                @media (max-width: 1366px) {
                    height: 462px;
                }

                @media (max-width: 480px) {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

.back {
    display: none;

    @media (max-width: 480px) {
        display: block;
        width: 30px !important;
        height: 30px !important;
        position: absolute;
        top: 80px;
        left: 15px;
        z-index: 51;
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

    @media (max-width: 480px) {
        display: none;
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

    @media (max-width: 480px) {
        display: none;
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

    @media (max-width: 480px) {
        padding: 30px 0 40px 0;
        margin: 0;
    }

    h3 {
        font-family: var(--geo);
        font-weight: 400;
        font-size: 32px;
        line-height: 130%;
        color: #1e1e1e;
        margin: 0 0 30px 0;

        @media (max-width: 480px) {
            font-size: 20px;
            font-weight: 300;
            margin: 0 0 20px 15px;
        }
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

        @media (max-width: 480px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, auto);
            column-gap: 15px;
            row-gap: 30px;
        }
    }

    &__category {
        position: relative;
        background-color: #f2f2f2;
        padding: 20px 84px 35px 25px;
        border-radius: 7px;
        align-self: flex-start;
        height: 500px;

        @media (max-width: 1440px) {
            height: 400px;
        }

        @media (max-width: 1366px) {
            padding: 20px 70px 33px 25px;
        }

        @media (max-width: 1024px) {
            width: 944px;
            padding: 20px 0 33px 20px;
        }

        @media (max-width: 480px) {
            display: none;
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
                margin: 7px 0 89px 0;
                white-space: nowrap;

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
            width: 238px;
            height: 169px;

            @media (max-width: 1440px) {
                padding: 0 0 0 25px;
                width: 175px;
                height: 140px;
            }

            @media (max-width: 1366px) {
                width: 156px;
                height: 148px;
            }
        }

        a {
            text-decoration: none;
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
        }
    }

    hr {
        display: none;

        @media (max-width: 480px) {
            display: block;
            border: 1.50px solid #ededed;
            height: 0px;
            margin: 40px 0 0 0;
        }
    }

    hr:last-child {
        display: none;

        @media (max-width: 480px) {
            display: block;
            margin: 0;
        }
    }

    &__category-mb {
        display: none;

        @media (max-width: 480px) {
            display: block;
            padding: 15px 0;

            a {
                text-decoration: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            &-container {
                display: flex;
                gap: 17px;
                align-items: center;

                img {
                    width: 70px;
                    height: 70px;
                    border-radius: 5px;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;

                    p {
                        margin: 0;
                        font-family: var(--geo);
                        font-weight: 300;
                        font-size: 16px;
                        line-height: 130%;
                        color: #000;
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
    }
}

.advantages {
    display: flex;
    gap: 20px;
    padding: 0 100px 150px;
    margin: 0 -100px;
    background: #fafafa;

    @media (max-width: 1024px) {
        flex-direction: column;
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

.accordion:last-child {
    margin: 0 0 50px 0 !important;
}

.footer {
    @media (max-width: 480px) {
        margin: 50px -15px 0 -15px;
    }
}
</style>


<style>
.swiper-pagination {
    bottom: 15px !important;
}

.swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
}

.swiper-pagination-bullet-active {
    background: #fff;
}

.similar-products__item {

    a {
        text-decoration: none;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 547px;
        border-radius: 10px;
        object-fit: cover;
        position: relative;

        @media (max-width: 1440px) {
            /* height: 256px; */
            height: 447px;
        }

        @media (max-width: 480px) {
            /* height: 460px; */
            height: 220px;
            width: 173px;
            border-radius: 5px;
        }
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

        @media (max-width: 480px) {
            width: 173px;
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
        margin: 20px 0 15px 0;

        @media (max-width: 480px) {
            margin: 10px 0;
            font-size: 16px;
        }
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
        z-index: 100;

        @media (max-width: 1440px) {
            font-size: 0.83vw;
        }

        @media (max-width: 480px) {
            font-size: 12px;
            padding: 6px 15px;
        }
    }

    .price {
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
}
</style>
