<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCocktailsStore } from '@/stores/cocktails'
import FadeInWayPoint from '../../utils/FadeInWayPoint.vue'

const router = useRouter()
const store = useCocktailsStore()

function filterBySpirit(spirit: string) {
    store.currentCocktails = store.cocktails.filter(c => c.spirit === spirit)
    router.push("/cocktails")
}
</script>

<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-4 ">
                    <FadeInWayPoint>
                        <div class="spirit w-100 text-center" @click="filterBySpirit('Brandy')">
                            <div class="img" :style="{ backgroundImage: 'url(\'/images/brandy.png\')' }"></div>
                            <h3>Brandy</h3>
                        </div>
                    </FadeInWayPoint>
                </div>
                <div class="col-lg-2 col-md-4 ">
                    <FadeInWayPoint :delay="50">
                        <div class="spirit w-100 text-center" @click="filterBySpirit('Gin')">
                            <div class="img" :style="{ backgroundImage: 'url(\'/images/gin.png\')' }"></div>
                            <h3>Gin</h3>
                        </div>
                    </FadeInWayPoint>
                </div>
                <div class="col-lg-2 col-md-4 ">
                    <FadeInWayPoint :delay="100">
                        <div class="spirit w-100 text-center" @click="filterBySpirit('Rum')">
                            <div class="img" :style="{ backgroundImage: 'url(\'/images/rum.png\')' }"></div>
                            <h3>Rum</h3>
                        </div>
                    </FadeInWayPoint>
                </div>
                <div class="col-lg-2 col-md-4 ">
                    <FadeInWayPoint :delay="150">
                        <div class="spirit w-100 text-center" @click="filterBySpirit('Tequila')">
                            <div class="img" :style="{ backgroundImage: 'url(\'/images/tequila.png\')' }"></div>
                            <h3>Tequila</h3>
                        </div>
                    </FadeInWayPoint>
                </div>
                <div class="col-lg-2 col-md-4 ">
                    <FadeInWayPoint :delay="200">
                        <div class="spirit w-100 text-center" @click="filterBySpirit('Vodka')">
                            <div class="img" :style="{ backgroundImage: 'url(\'/images/vodka.png\')' }"></div>
                            <h3>Vodka</h3>
                        </div>
                    </FadeInWayPoint>
                </div>
                <div class="col-lg-2 col-md-4 ">
                    <FadeInWayPoint :delay="250">
                        <div class="spirit w-100 text-center" @click="filterBySpirit('Whiskey')">
                            <div class="img" :style="{ backgroundImage: 'url(\'/images/whiskey.png\')' }"></div>
                            <h3>Whiskey</h3>
                        </div>
                    </FadeInWayPoint>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media (max-width: 991.98px) {
    .spirit {
        margin-bottom: 30px;
    }
}

.spirit {
    cursor: pointer;
}

.spirit .img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    z-index: 0;
}

.spirit .img:after {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    content: '';
    border: 1px solid #b7472a;
    z-index: -1;
    border-radius: 50%;
    transition: all 0.6s ease;
}

.spirit .img:hover:after {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.4);
}

.spirit .img img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
}

.spirit .img img {
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.4);
}

.spirit h3 {
    font-size: 22px;
    font-weight: 300;
}
</style>