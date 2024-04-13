<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import CocktailTopBG from '@/cocktails/components/CocktailTopBG.vue'
import FadeInWayPoint from '@/utils/FadeInWayPoint.vue'
import { useCocktailsStore } from '@/stores/cocktails'
import type Cocktail from '@/cocktails/types/Cocktail'

const store = useCocktailsStore()

function convertCocktailNameToFilePath(cocktailName: string) {
    return '/images/cocktails/' + cocktailName.toLowerCase().split(' ').join('-') + '.png'
}

function updateActiveCocktail(cocktail: Cocktail) {
    store.activeCocktail = cocktail
}

const cocktails = ref<Cocktail[]>(store.currentCocktails);

function filterBySpirit(spirit: string) {
    cocktails.value = store.cocktails.filter(c => c.spirit === spirit)
}

function showAllCocktails() {
    cocktails.value = store.cocktails
}
</script>

<template>
    <CocktailTopBG heading="Cocktail List" />

    <section class="ftco-section">
        <div class="container">
            <div class="row">
                <!-- Cocktail list -->
                <div class="col-md-9">
                    <div class="row">
                        <h2 v-if="cocktails.length === 0">No cocktails found. Please refine your search.</h2>
                        <div v-for="cocktail in cocktails" class="col-md-4 d-flex">
                            <FadeInWayPoint class="w-100">
                                <RouterLink :to="`/cocktails/${cocktail.cocktailId}`"
                                    @click="updateActiveCocktail(cocktail)">
                                    <div class="product">
                                        <div class="img d-flex align-items-center justify-content-center"
                                            :style="{ backgroundImage: 'url(' + convertCocktailNameToFilePath(cocktail.name) + ')' }">
                                        </div>
                                        <div class="text text-center">
                                            <span class="category">{{ cocktail.spirit }}</span>
                                            <a>
                                                <h2>{{ cocktail.name }}</h2>
                                            </a>
                                            <span class="price">{{ cocktail.flavour }}</span>
                                        </div>
                                    </div>
                                </RouterLink>
                            </FadeInWayPoint>
                        </div>
                    </div>
                </div>
                <!-- End of cocktail list -->

                <!-- Spirit menu -->
                <div class="col-md-3">
                    <div class="sidebar-box">
                        <div class="categories">
                            <h3>Pick a spirit ...</h3>
                            <ul class="p-0">
                                <li>
                                    <div @click="filterBySpirit('Whiskey')">Whiskey<span class="fa fa-chevron-right"></span></div>
                                </li>
                                <li>
                                    <div @click="filterBySpirit('Vodka')">Vodka<span class="fa fa-chevron-right"></span>
                                    </div>
                                </li>
                                <li>
                                    <div @click="filterBySpirit('Gin')">Gin<span class="fa fa-chevron-right"></span>
                                    </div>
                                </li>
                                <li>
                                    <div @click="filterBySpirit('Rum')">Rum<span class="fa fa-chevron-right"></span>
                                    </div>
                                </li>
                                <li>
                                    <div @click="filterBySpirit('Tequila')">Tequila<span
                                            class="fa fa-chevron-right"></span></div>
                                </li>
                                <li>
                                    <div @click="filterBySpirit('Brandy')">Brandy<span
                                            class="fa fa-chevron-right"></span></div>
                                </li>
                                <li>
                                    <div @click="showAllCocktails()">Show All<span class="fa fa-chevron-right"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End of spirit menu -->
            </div>
        </div>
    </section>
</template>

<style scoped>
.categories li {
    cursor: pointer;
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dee2e6;
    list-style: none;
}

.categories li div {
    display: block;
    color: #1a1a1a;
}

.categories li div span {
    position: absolute;
    right: 0;
    top: 7px;
    color: #ccc;
}

.categories li div:hover,
.categories li div:focus {
    outline: none;
    color: #b7472a;
}

.categories li.active div {
    color: #b7472a;
}

.categories li.active div span{
    color: #b7472a;
}
</style>