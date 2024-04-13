<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
    heading: string
}
const props = defineProps<Props>()

const bg = ref<string>("/images/plantation.png")
</script>

<template>
    <section class="hero-wrap hero-wrap-2"
        :style="{ backgroundImage: 'url(' + bg + ')', backgroundSize: 'cover'}">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs mb-0">
                        <span>
                            <RouterLink to="/">Home</RouterLink>
                            <Icon icon="material-symbols:chevron-right-rounded" class="test-icon" />
                        </span>
                        <span>
                            <RouterLink to="/cocktails">Cocktails</RouterLink>
                            <Icon icon="material-symbols:chevron-right-rounded" class="test-icon" />
                        </span>
                    </p>
                    <h2 class="mb-0 bread">{{ props.heading }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.test-icon {
    font-size: 1.5rem;
}
</style>