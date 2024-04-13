<script setup lang="ts">
import { ref } from "vue"
import { Waypoint } from "vue-waypoint"

enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

interface Props {
    direction?: string
    delay?: number
}

const props = withDefaults(defineProps<Props>(), {
    direction: Direction.UP,
    delay: 0
})

interface WaypointState {
    el: Element;
    going: "IN" | "OUT";
    direction: Direction;
}

const onChange = (state: WaypointState) => {
    if (state.going === 'IN') {
        applyFadeClass(props.direction);
    }
}

const applyFadeClass = (direction: string) => {
    switch (direction.toUpperCase()) {
        case Direction.UP: {
            if (!classList.value.includes('fadeInUp')) {
                classList.value.push('fadeInUp')
            }
            break;
        }
        case Direction.DOWN: {
            if (!classList.value.includes('fadeInDown')) {
                classList.value.push('fadeInDown')
            }
            break;
        }
        case Direction.LEFT: {
            if (!classList.value.includes('fadeInLeft')) {
                classList.value.push('fadeInLeft')
            }
            break;
        }
        case Direction.RIGHT: {
            if (!classList.value.includes('fadeInRight')) {
                classList.value.push('fadeInRight')
            }
        }
    }
}

const classList = ref<string[]>([])
</script>

<template>
    <Waypoint @change="onChange" :class="classList" :disableCssHelpers="true" :style="{ animationDelay: `${props.delay}ms` }">
        <slot>Waypoint Fallback</slot>
    </Waypoint>
</template>

<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        visibility: hidden;
        transform: translate3d(0, 5em, 0); /* Change to translateY ? */
    }

    to {
        opacity: 1;
        visibility: visible;
        transform: none;
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        visibility: hidden;
        transform: translate3d(0, -5em, 0);
    }

    to {
        opacity: 1;
        visibility: visible;
        transform: none;
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        visibility: hidden;
        transform: translate3d(5em, 0, 0);
    }

    to {
        opacity: 1;
        visibility: visible;
        transform: none;
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        visibility: hidden;
        transform: translate3d(-5em, 0, 0);
    }

    to {
        opacity: 1;
        visibility: visible;
        transform: none;
    }
}

.fadeInUp,
.fadeInDown,
.fadeInLeft,
.fadeInRight {
    opacity: 0;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

.fadeInUp {
    animation-name: fadeInUp;
}

.fadeInDown {
    animation-name: fadeInDown;
}

.fadeInLeft {
    animation-name: fadeInLeft;
}

.fadeInRight {
    animation-name: fadeInRight;
}
</style>