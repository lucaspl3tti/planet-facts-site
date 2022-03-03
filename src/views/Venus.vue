<script>
import PlanetDescription from '@/components/PlanetDescription.vue';
import PlanetInformation from '@/components/PlanetInformation.vue';
import { venus } from '@/stores/planets.js';

const planet = venus;

export default {
    data() {
        return {
            planetClass: 'planet-detailpage planet-detailpage--venus',
            planetClassSurface: 'planet-detailpage--surface',
            planetName: planet.planetName,
            planetDescription: planet.overview.content,
            planetInfoSourceHref: planet.overview.source,
            planetImageSrc: planet.images.planet,
            planetImageClass: 'image-wrapper--' + planet.images.imgClass,
            geologySrc: planet.images.geology,
            geologyAltText: planet.images.geologyAltCopy,
            geologyActiveClass: 'd-none',
            rotationTime: planet.rotation,
            revolutionTime: planet.revolution,
            planetRadius: planet.radius,
            averageTemp: planet.temperature,
            isActiveOverview: true,
            isActiveStructure: false,
            isActiveSurface: false,
            btnActiceClass: 'btn--active',
        };
    },
    components: {
        PlanetDescription,
        PlanetInformation,
    },
    methods: {
        onClickOverview() {
            // set active btn class
            this.isActiveOverview = true;
            this.isActiveStructure = false;
            this.isActiveSurface = false;

            // load new description text from object
            this.planetDescription = planet.overview.content;
            this.planetInfoSourceHref = planet.overview.source;

            // load new planet image
            this.planetImageSrc = planet.images.planet;
            this.geologyActiveClass = 'd-none';
        },
        onClickStructure() {
            // set active btn class
            this.isActiveOverview = false;
            this.isActiveStructure = true;
            this.isActiveSurface = false;

            // load new description text from object
            this.planetDescription = planet.structure.content;
            this.planetInfoSourceHref = planet.structure.source;

            // load new planet image
            this.planetImageSrc = planet.images.internal;
            this.geologyActiveClass = 'd-none';
        },
        onClickSurface() {
            // set active btn class
            this.isActiveOverview = false;
            this.isActiveStructure = false;
            this.isActiveSurface = true;

            // load new description text from object
            this.planetDescription = planet.geology.content;
            this.planetInfoSourceHref = planet.geology.source;

            // load new planet image
            this.planetImageSrc = planet.images.planet;
            this.geologyActiveClass = '';
        }
    },
}
</script>

<template>
    <main :class="[isActiveSurface ? planetClass + ' ' + planetClassSurface : planetClass]">
        <div class="planet-nav planet-nav--mobile d-md-none">
            <button
                class="btn btn-primary btn--planet-nav btn--overview"
                :class="[isActiveOverview ? btnActiceClass : '']"
                @click="onClickOverview"
            >Overview</button>

            <button
                class="btn btn-primary btn--planet-nav btn--structure"
                :class="[isActiveStructure ? btnActiceClass : '']"
                @click="onClickStructure"
            >Structure</button>

            <button
                class="btn btn-primary btn--planet-nav btn--surface"
                :class="[isActiveSurface ? btnActiceClass : '']"
                @click="onClickSurface"
            >Surface</button>
        </div>

        <div class="container">
            <PlanetDescription
                :planetImageSrc="planetImageSrc"
                :imageClass="planetImageClass"
                :geologySrc="geologySrc"
                :geologyAltText="geologyAltText"
                :geologyActiveClass="geologyActiveClass"
                :planetName="planetName"
                :planetDescription="planetDescription"
                :planetInfoSourceHref="planetInfoSourceHref"
                :onClickOverview="onClickOverview"
                :onClickStructure="onClickStructure"
                :onClickSurface="onClickSurface"
                :isActiveOverview="isActiveOverview"
                :isActiveStructure="isActiveStructure"
                :isActiveSurface="isActiveSurface"
                :btnActiceClass="btnActiceClass"
            />

            <PlanetInformation
                :rotationTime="rotationTime"
                :revolutionTime="revolutionTime"
                :planetRadius="planetRadius"
                :averageTemp="averageTemp"
            />
        </div>
    </main>
</template>
