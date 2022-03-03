<script setup>
defineProps({
    planetImageSrc: {
        type: String,
        required: false
    },
    imageClass: {
        type: String,
        required: false
    },
    geologySrc: {
        type: String,
        required: false
    },
    geologyAltText: {
        type: String,
        required: false
    },
    geologyActiveClass: {
        type: String,
        required: false
    },
    planetName: {
        type: String,
        required: false
    },
    planetDescription: {
        type: String,
        required: false
    },
    planetInfoSourceHref: {
        type: String,
        required: false
    },
    onClickOverview: {
        type: Function,
    },
    onClickStructure: {
        type: Function,
    },
    onClickSurface: {
        type: Function,
    },
    isActiveOverview: {
        type: Boolean,
    },
    isActiveStructure: {
        type: Boolean,
    },
    isActiveSurface: {
        type: Boolean,
    },
    btnActiceClass: {
        type: String,
    }
});
</script>

<template>
    <section class="planet-description">
        <div class="image-wrapper" :class="imageClass">
            <img :src="planetImageSrc" class="image image--planet">
            <img :src="geologySrc" :alt="geologyAltText" class="image image--planet-geology" :class="geologyActiveClass">
        </div>
        <div class="planet-description__right">
            <div class="text-wrapper">
                <h1 class="planet-description__heading">{{ planetName }}</h1>
                <p class="planet-description__copy">{{ planetDescription }}</p>
                <p class="planet-description__source">
                    Source:
                    <a :href="planetInfoSourceHref" target="_blank" rel="noopener noreferrer">
                    Wikipedia
                    <i class="bi bi-arrow-up-right-square-fill"></i>
                    </a>
                </p>
            </div>

            <div class="planet-nav planet-nav--desktop d-none d-md-flex">
                <button
                    class="btn btn-primary btn--planet-nav btn--overview"
                    :class="[isActiveOverview ? btnActiceClass : '']"
                    @click="onClickOverview"
                >
                    <span class="btn--number">01</span>
                    <span class="btn--title">Overview</span>
                </button>

                <button
                    class="btn btn-primary btn--planet-nav btn--structure"
                    :class="[isActiveStructure ? btnActiceClass : '']"
                    @click="onClickStructure"
                >
                    <span class="btn--number">02</span>
                    <span class="btn--title">Structure</span>
                </button>

                <button
                    class="btn btn-primary btn--planet-nav btn--surface"
                    :class="[isActiveSurface ? btnActiceClass : '']"
                    @click="onClickSurface"
                >
                    <span class="btn--number">03</span>
                    <span class="btn--title">Surface</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
