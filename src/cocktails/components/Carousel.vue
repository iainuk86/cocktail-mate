<script setup lang="ts">
import CarouselItem from './CarouselItem.vue'
</script>

<template>
    <section class="ftco-intro">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-md-4 d-flex">
                    <CarouselItem :icon="'fluent:person-support-28-filled'" :header="'Cocktail Support 24/7'"
                        :desc="'Everybody needs a mate to turn to for cocktail advice. Let us be yours in your time of need.'" />
                </div>
                <div class="col-md-4 d-flex">
                    <CarouselItem :icon="'game-icons:cash'" :header="'Money Loss Guarantee'"
                        :desc="'Warning: Danger of developing good taste. We take no responsibility for financial losses.'" />
                </div>
                <div class="col-md-4 d-flex">
                    <CarouselItem :icon="'mdi:truck-delivery-outline'" :header="'All completely free'"
                        :desc="'Recipes taken from some of the finest bars around the world. Direct to your fingertips.'" />
                </div>
            </div>
        </div>
    </section>
</template>
