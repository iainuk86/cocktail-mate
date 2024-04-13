<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails'
import FadeInWayPoint from '@/utils/FadeInWayPoint.vue'
import VueNumberAnimation from 'vue-number-animation'
import Carousel from '@/cocktails/components/Carousel.vue'
import SpiritSelection from '@/cocktails/components/SpiritSelection.vue'
import TopBG from '@/cocktails/components/TopBG.vue'

const store = useCocktailsStore()

const numFormat = (number: Number) => {
    return number.toFixed(0);
}

async function fetchCocktails() {
    const cocktails = await fetch('http://ec2-3-106-115-236.ap-southeast-2.compute.amazonaws.com:8080/api/cocktail')
    .then(res => res.json())
    
    store.cocktails = cocktails
    store.currentCocktails = cocktails
}

// Fetch and store cocktails
fetchCocktails()
</script>

<template>
    <TopBG />
    <Carousel />

    <!-- Cocktail of the Month section -->
    <section class="ftco-section ftco-no-pb">
        <div class="container">
            <div class="row">
                <div class="col-md-6 img img-3 d-flex justify-content-center align-items-center"
                    :style="{ backgroundImage: 'url(\'src/assets/images/cocktails/mai-tai.png\')' }">
                </div>
                <div class="col-md-6 wrap-about pl-md-5 py-5">
                    <FadeInWayPoint>
                        <div class="heading-section">
                            <span class="subheading">Cocktail of the Month</span>
                            <h2 class="mb-4">Mai Tai</h2>

                            <p>The Mai Tai started as a rum cocktail so popular it supposedly depleted world rum supplies in
                                the
                                1940s and '50s. It was invented in 1944 by Victor J. Bergeron, better known as Trader Vic.
                            </p>
                            <p>Bergeron highlighted the golden rum with lime, Orgeat, Orange Curaçao, and simple syrup.
                                According to legend, after presenting the cocktail to some of his Tahitian friends, they
                                exclaimed, "Maita’i roa a’e," which translates to "out of this world! The best!" Bergeron
                                christened his new cocktail "Mai Tai", as in "the best".</p>
                            <p>Various juices were later added to appeal to tourists, the addition of which has
                               continued until today. Here we make it without.</p>
                            <p class="year">
                                <span>(Ir)responsibly drunk for </span>
                                <VueNumberAnimation ref="number1" class="aniNumber" :from="0" :to="77" :format="numFormat"
                                    :duration="2.5" easing="linear" />
                                <span> Years.</span>
                            </p>
                        </div>
                    </FadeInWayPoint>
                </div>
            </div>
        </div>
    </section>
    <!-- End of Cocktail of the Month section -->

    <SpiritSelection />
</template>

<style scoped>
.aniNumber {
    font-weight: 500;
    font-size: 30px;
    color: #b7472a;
    font-style: italic;
}
</style>