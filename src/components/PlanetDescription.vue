<script setup>
defineProps({
    planetSvgFile: {
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
});
</script>

<template>
    <section class="planet-description">
        <div class="image-wrapper">
            <span class="icon icon-planet">{{ planetSvgFile }}</span>
            <img src="{{ geologySrc }}" alt="{{ geologyAltText }}" class="image image--planet-geology">
        </div>
        <div class="text-wrapper">
            <h1>{{ planetName }}</h1>
            <p>{{ planetDescription }}</p>
            <p>Source: <a href="{{ planetInfoSourceHref }}" target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
        </div>
    </section>
</template>

<style scoped>

</style>
