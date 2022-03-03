<script>
// import PlanetDescription from '@/components/PlanetDescription.vue';
// import PlanetInformation from '@/components/PlanetInformation.vue';
import { mercury } from '@/stores/planets.js';

export default {
    data() {
        return {
            planetName: mercury.planetName,
            planetDescription: mercury.overview.content,
            planetInfoSourceHref: mercury.overview.source,
            planetSvgFile: mercury.images.planet,
            rotationTime: mercury.rotation,
            revolutionTime: mercury.revolution,
            planetRadius: mercury.radius,
            averageTemp: mercury.temperature,
        };
    },
}
</script>

<template>
    <div class="planet-nav">
        <button class="btn btn--planet-nav btn--overview">Overview</button>
        <button class="btn btn--planet-nav btn--structure">Structure</button>
        <button class="btn btn--planet-nav btn--surface">Surface</button>
    </div>

    <div class="container">
        <section class="planet-description">
            <div class="image-wrapper">
                <span class="icon icon-planet" v-html="planetSvgFile"></span>
                <!-- <img src="{{ geologySrc }}" alt="{{ geologyAltText }}" class="image image--planet-geology"> -->
            </div>
            <div class="text-wrapper">
                <h1>{{ planetName }}</h1>
                <p>{{ planetDescription }}</p>
                <p>Source: <a href="{{ planetInfoSourceHref }}" target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
            </div>
        </section>

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
    </div>
</template>

<style scoped>

</style>
