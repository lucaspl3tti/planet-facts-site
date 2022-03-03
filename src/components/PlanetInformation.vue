<script setup>
defineProps({
    rotationTime: {
        type: String,
        required: true
    },
    revolutionTime: {
        type: String,
        required: true
    },
    planetRadius: {
        type: String,
        required: true
    },
    averageTemp: {
        type: String,
        required: true
    },
});
</script>

<template>
    <section class="planet-information">
        <div class="container information__content-block information__rotation-time">
            <p class="information__headline">Rotation Time</p>
            <h2 class="information__text">{{ rotationTime }}</h2>
        </div>

        <div class="container information__content-block information__revolution-time">
            <p class="information__headline">Revolutions Time</p>
            <h2 class="information__text">{{ revolutionTime }}</h2>
        </div>

        <div class="container information__content-block information__radius">
            <p class="information__headline">Radius</p>
            <h2 class="information__text">{{ planetRadius }}</h2>
        </div>

        <div class="container information__content-block information__average-temp">
            <p class="information__headline">Average Temp.</p>
            <h2 class="information__text">{{ averageTemp }}</h2>
        </div>
    </section>
</template>
