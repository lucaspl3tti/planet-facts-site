<script setup>
defineProps({
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
</template>
