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
                    <swiper-slide>
                        <div class="category-item">
                            <img src="@/assets/img/kitchen.svg" alt="item" @click="goToCategory">
                            <div class="arrow">
                                <img src="@/assets/img/strelka.svg" alt="arrow">
                            </div>
                        </div>
                        <span>Кухни</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="category-item">
                            <img src="@/assets/img/sofa.svg" alt="item" @click="goToCategory">
                            <div class="arrow">
                                <img src="@/assets/img/strelka.svg" alt="arrow">
                            </div>
                        </div>
                        <span>Гостиные</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="category-item">
                            <img src="@/assets/img/table.svg" alt="item" @click="goToCategory">
                            <div class="arrow">
                                <img src="@/assets/img/strelka.svg" alt="arrow">
                            </div>
                        </div>
                        <span>Офис</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="category-item">
                            <img src="@/assets/img/chair.svg" alt="item" @click="goToCategory">
                            <div class="arrow">
                                <img src="@/assets/img/strelka.svg" alt="arrow">
                            </div>
                        </div>
                        <span>Кресла</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="category-item">
                            <img src="@/assets/img/chair.svg" alt="item" @click="goToCategory">
                            <div class="arrow">
                                <img src="@/assets/img/strelka.svg" alt="arrow">
                            </div>
                        </div>
                        <span>Кресла</span>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="category-item">
                            <img src="@/assets/img/chair.svg" alt="item" @click="goToCategory">
                            <div class="arrow">
                                <img src="@/assets/img/strelka.svg" alt="arrow">
                            </div>
                        </div>
                        <span>Тест</span>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="furniture">
            <div class="furniture__list">
                <div class="furniture-item" @click="openProduct">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>1 000 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>1 000 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>1 000 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>1 000 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic1.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный гарнитур</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>1 000 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2024 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic2.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Угловой диван с подушками</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные
                            </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic3.svg" alt="category">
                            <div class="furniture-item__name">
                                Гостиные </div>
                            <p>Мягкое кресло на ножках</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="furniture-item">
                    <swiper :pagination="{ clickable: true, }" :modules="modules" class="mySwiper2">
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/img/pic4.svg" alt="category">
                            <div class="furniture-item__name">
                                Кухни
                            </div>
                            <p>Кухонный набор стол + стулья</p>
                            <div class="furniture-item__price">
                                <span>500 000 ₸</span>
                                <div>
                                    <img src="@/assets/img/money.svg" alt="money">
                                    <span>Цена на 2023 год</span>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>

            <div class="furniture__filter">
                <div class="furniture__filter-category">
                    <div>Все категории</div>
                    <div>Кухня</div>
                    <div>Гостиная</div>
                    <div>Спальня</div>
                    <div>Ванная</div>
                    <div>Прихожая</div>
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

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, Pagination, Scrollbar],
            // mousewheel: true,
            freeMode: true,
            direction: 'horizontal',
            breakpoints: {
                '1920': {
                    slidesPerView: 5,
                    spaceBetween: 31,
                },
            },
            breakpoints2: {
                '1920': {
                    slidesPerView: 1,
                },
            },
            request: false,
        }
    },
    methods: {
        goToCategory() {
            this.$router.push('/test/');
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
        }
    },
}
</script>

<style lang="scss" scoped>
.page {
    padding: 0 100px;
}

.banner {
    padding: 70px 102px 70px 101px;
    margin: 0 -100px;
    background: #fafafa;

    h1 {
        font-family: var(--geo);
        font-weight: 400;
        font-size: 128px;
        line-height: 130%;
        text-transform: uppercase;
        text-align: center;
        color: #2d3c38;
        margin: 0;
    }
}

.category {
    padding: 40px 0 50px 0;
    // margin: 0 -100px 0 0;

    h2 {
        font-family: var(--geo);
        font-weight: 400;
        font-size: 32px;
        line-height: 130%;
        color: #1e1e1e;
        margin: 0;
    }

    &__slider {
        padding: 30px 0 0 0;

        .category-item {
            position: relative;
            background-color: #f2f2f2;
            padding: 29px 54px 31px 53px;
            border-radius: 7px;
            margin: 0 0 20px 0;

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
        }
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
    }
}

.swiper-wrapper {
    margin: 0 0 40px 0;
}

.swiper-horizontal>.swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
    border-radius: 2px;
    height: 7px;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.05);
    width: 100%;
}

.swiper-scrollbar-drag {
    background: #38524b;
    border-radius: 2px;
    height: 7px;
}

.furniture {
    padding: 70px 100px 100px;
    margin: 0 -100px;
    background: #fafafa;

    &__list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, auto);
        column-gap: 30px;
        row-gap: 40px;
    }

    &-item {
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
        }

        p {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 20px;
            line-height: 130%;
            color: #1e1e1e;
            margin: 20px 0 15px 0;
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
        }

        &__price {
            display: flex;
            gap: 30px;
            align-items: center;

            span {
                font-family: var(--geo);
                font-weight: 500;
                font-size: 20px;
                line-height: 130%;
                color: #1e1e1e;
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
}

.furniture__filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0 0 0;

    &-category {
        display: flex;
        gap: 50px;
        align-items: center;

        div {
            font-family: var(--geo);
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;
            color: #1e1e1e;
            white-space: nowrap;
        }

        div:first-child {
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

    &-pagination {
        display: flex;
        gap: 25px;
        align-items: center;

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

.company {
    margin: 0 -100px;
    padding: 0 0 330px 0;
    background: #fff;
    background-size: contain;
    text-align: center;
    position: relative;

    // .sofa {
    //     width: 100%;
    //     height: 760px;
    // }

    &-info {
        position: absolute;
        top: 185px;
        left: 704px;
        right: 704px;

        h3 {
            font-family: var(--geo);
            font-weight: 400;
            font-size: 32px;
            line-height: 130%;
            text-align: center;
            color: #fafafa;
            margin: 0 0 30px 0;
        }

        &__text {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin: 0 0 50px 0;

            span {
                font-family: var(--geo);
                font-weight: 300;
                font-size: 20px;
                line-height: 130%;
                text-align: center;
                color: #fafafa;
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
            cursor: pointer;
        }
    }

    &-list {
        display: flex;
        gap: 20px;
        position: absolute;
        left: 100px;
        right: 100px;
        bottom: 150px;

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
    }

    &-item-1 {
        padding: 20px 111px 112px 20px;
    }

    &-item-2 {
        padding: 20px 59px 112px 20px;
    }

    &-item-3 {
        padding: 20px 43px 138px 20px;
        white-space: nowrap;
    }

    &-item-4 {
        padding: 20px 148px 138px 20px;
        white-space: nowrap;
    }

    &-item-5 {
        padding: 20px 142px 20px 20px;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>