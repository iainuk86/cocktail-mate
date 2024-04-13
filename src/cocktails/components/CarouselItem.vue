<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
    icon: string,
    header: string,
    desc: string
}>()

</script>

<template>
    <div class="carousel-item d-lg-flex w-100">
        <div class="icon">
            <Icon :icon="props.icon" />
        </div>
        <div class="text">
            <h2>{{ props.header }}</h2>
            <p> {{ props.desc }}</p>
        </div>
    </div>
</template>

<style scoped>
.icon {
    margin-right: 20px;
    font-size: 60px;
    color: white;
}

.carousel-item {
    width: 100%;
    background: #b7472a;
    padding: 30px;
}

.carousel-item .text {
    color: rgba(255, 255, 255, 0.8);
}

.carousel-item .text h2 {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
}
</style>