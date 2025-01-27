<template>
    <div class="loader">
        <img src="@/assets/img/loader_logo.svg"  alt="logo" />
        <img src="@/assets/img/load.svg"  alt="load" class="spinner" />
    </div>
</template>

<style lang="scss" scoped>
.loader {
    background: #fafafa;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: 70px -100px 0;

    position: fixed;
    width: 100%;
    z-index: 51;

    @media (max-width: 480px) {
        margin: 50px -15px 0;
    }

    .spinner {
        animation: spin 1s linear infinite;
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>