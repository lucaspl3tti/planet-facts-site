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
        <div class="information__rotation-time">
            <p class="information__headline">Rotation Time</p>
            <p class="information__text">{{ rotationTime }}</p>
        </div>

        <div class="information__revolution-time">
            <p class="information__headline">Revolutions Time</p>
            <p class="information__text">{{ revolutionTime }}</p>
        </div>

        <div class="information__radius">
            <p class="information__headline">Radius</p>
            <p class="information__text">{{ planetRadius }}</p>
        </div>

        <div class="information__average-temp">
            <p class="information__headline">Average Temp.</p>
            <p class="information__text">{{ averageTemp }}</p>
        </div>
    </section>
</template>
