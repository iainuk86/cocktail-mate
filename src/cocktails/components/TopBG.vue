<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCocktailsStore } from '@/stores/cocktails'
import FadeInWayPoint from '../../utils/FadeInWayPoint.vue'

const router = useRouter()
const store = useCocktailsStore()

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function resolveLuckyUrl() {
    const cocktails = store.cocktails
    const randomCocktailIndex = getRandomInt(cocktails.length)

    store.activeCocktail = store.cocktails[randomCocktailIndex]
    router.push(`/cocktails/${store.activeCocktail.cocktailId}`)
}

function handleHelpMe() {
    alert('AI Chatbot feature coming soon!')
}
</script>

<template>
    <div class="hero-wrap" :style="{ backgroundImage: 'url(/images/plantation.png)', backgroundSize: 'cover'}">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
                <div class="col-md-8 ftco-animated fadeIn d-flex align-items-end">
                    <div class="text w-100 text-center">
                        <FadeInWayPoint direction="down">
                            <h1 class="mb-4">It's <span>cocktail</span> night?</h1>
                        </FadeInWayPoint>
                        <FadeInWayPoint>
                            <h1 class="mb-4"><span>Bring</span> a <span>Mate</span>.</h1>
                        </FadeInWayPoint>
                        <FadeInWayPoint>
                            <RouterLink class="btn btn-primary py-2 px-4" to="/cocktails">Show all</RouterLink>
                            <div class="btn btn-white btn-outline-white py-2 px-4" @click="resolveLuckyUrl()">Lucky Dip</div>
                            <div class="btn btn-white btn-outline-white py-2 px-4" @click="handleHelpMe()">Help me decide</div>
                        </FadeInWayPoint>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>