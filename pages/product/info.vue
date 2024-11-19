<template>
    <div class="page">
        <TheHeader />
        <div class="product">
            <div class="product__navigation">
                <span>Главная</span>
                <span>/</span>
                <p>Кухня из акрила</p>
            </div>

            

            <div class="product__slider">
                <swiper :direction="'vertical'" :spaceBetween="10" :slidesPerView="4" :loop="true" :loopedSlides="50"
                    :modules="modules" class="gallery-thumbs" :slideToClickedSlide="true" @swiper="setThumbsSwiper">
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

                <swiper :slidesPerView="1" :navigation="true" :loop="true" :modules="modules" class="gallery-top"
                    :thumbs="{ swiper: thumbsSwiper }">
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
            </div>
        </div>

    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Navigation, Thumbs],
        };
    },
}
</script>

<style lang="scss" scoped>
.page {
    padding: 0 100px;
}

.product {
    background: #fafafa;
    padding: 25px 100px;
    margin: 0 -100px;

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
        }
    }

    &__slider {
        padding: 25px 0 0 0;
        display: flex;
        gap: 20px;

        .swiper-vertical {
            width: 100px;
            height: 330px;
            margin: 0;

            .swiper-slide img {
                height: 75px;
                border-radius: 7px;
                width: 100%;
                object-fit: cover;
                display: block;
            }

            .swiper-slide {
                opacity: 0.5;
            }

            .swiper-slide-thumb-active {
                opacity: unset;
            }

            .swiper-wrapper {
                width: 100px;
            }
        }
    }
}

.gallery-top {
    border-radius: 7px;
    width: 680px;
    height: 628px;
    margin: 0;
}
</style>