<template>
    <div :class="['accordion']">
        <div class="accordion__header" @click="toggle">
            <slot name="header"></slot>
            <img src="@/assets/img/down.svg" alt="item" class="header-icon" :class="{ rotate: show }">
        </div>
        <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave"
            @leave="leave">
            <div v-show="show" class="accordion__body">
                <div class="body-inner">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    setup() {
        const show = ref(false);

        const toggle = () => {
            show.value = !show.value;
        };

        const beforeEnter = (el) => {
            el.style.height = '0';
        };

        const enter = (el) => {
            el.style.height = el.scrollHeight + 'px';
        };

        const beforeLeave = (el) => {
            el.style.height = el.scrollHeight + 'px';
        };

        const leave = (el) => {
            el.style.height = '0';
        };

        return { show, toggle, beforeEnter, enter, beforeLeave, leave };
    }
};
</script>

<style scoped>
.accordion {
    display: none;

    @media (max-width: 480px) {
        display: block;
        font-family: var(--geo);
        margin-bottom: 15px;
        background: #f2f2f2;
        border-radius: 5px;
        padding: 10px;
    }
}

.accordion__header {
    position: relative;
    font-family: var(--geo);
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #1e1e1e;
    text-align: left;

    display: flex;
    gap: 15px;
    align-items: center;
}

.header-icon {
    position: absolute;
    top: 5px;
    right: 0;
    transform: rotate(0deg);
    transition-duration: 0.3s;
}

.accordion__body {
    overflow: hidden;
    border-top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: 150ms ease-out;
}

.body-inner {
    padding: 15px 0 0 0;
    font-family: var(--geo);
    font-weight: 300;
    font-size: 14px;
    line-height: 130%;
    color: #1e1e1e;
    text-align: left;
}

.header-icon.rotate {
    transform: rotate(180deg);
    transition-duration: 0.3s;
}
</style>