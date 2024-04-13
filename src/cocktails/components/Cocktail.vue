<script setup lang="ts">
import { ref } from 'vue'
import CocktailTopBG from './CocktailTopBG.vue'
import type Cocktail from '../types/Cocktail'
import { useCocktailsStore } from '@/stores/cocktails'

const store = useCocktailsStore()
const currentCocktail = ref<Cocktail>(store.activeCocktail)

const ingredients = ref<string[]>(currentCocktail.value.ingredients.split(','))

const imgSrc = '/images/cocktails/'
function convertCocktailNameToFilePath(cocktailName: string) {
    return imgSrc + cocktailName.toLowerCase().split(' ').join('-') + '.png'
}
</script>

<template>
    <CocktailTopBG :heading="currentCocktail.name" />

    <section class="ftco-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <img :src="convertCocktailNameToFilePath(currentCocktail.name)" :alt="currentCocktail.name" class="w-100">
                </div> 
                <div class="col-lg-6 product-details pl-md-5">
                    <h2>{{ currentCocktail.name }}</h2>
                    <p class="price"><span>Profile: {{ currentCocktail.flavour }}</span></p>
                    <ul v-for="ingredient in ingredients">
                        <li>{{ ingredient }}</li>
                    </ul>
                    <p>{{ currentCocktail.method }}</p>
                    <p>Glass: {{ currentCocktail.glass }}</p>
                    <p>Ice: {{ currentCocktail.ice }}</p>
                    <p>Garnish: {{ currentCocktail.garnish }}</p>
                    <div class="w-100"></div>
                </div>
            </div>
        </div>
    </section>
</template>