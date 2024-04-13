<script setup lang="ts">
import { Icon } from '@iconify/vue'
import FadeInWayPoint from '../../utils/FadeInWayPoint.vue'

function configureScroll() {
    window.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        let navbar = document.getElementById('ftco_navbar');

        if (navbar === null) return;
        if (scroll > 150) {
				if (!navbar.classList.contains('scrolled') ) {
					navbar.classList.add('scrolled');	
				}
			} 
			if (scroll < 150) {
				if (navbar.classList.contains('scrolled') ) {
					navbar.classList.remove('scrolled');
                    navbar.classList.remove('sleep');
				}
			} 
			if (scroll > 350 ) {
				if (!navbar.classList.contains('awake') ) {
					navbar.classList.add('awake');	
				}
			}
			if (scroll < 350 ) {
				if (navbar.classList.contains('awake') ) {
					navbar.classList.remove('awake');
					navbar.classList.add('sleep');
				}
			}
    });
}

configureScroll();
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco_navbar">
        <div class="container">
            <FadeInWayPoint direction="RIGHT">
                <RouterLink class="navbar-brand" to="/">Cocktail <span>Mate</span></RouterLink>
            </FadeInWayPoint>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/cocktails">Cocktails</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                    </li>
                    <div class="verticalLine"></div>
                    <div class="navbar-social">
                        <li>
                            <FadeInWayPoint direction="left">
                                <a href="https://www.github.com/iainuk86" target="_blank">
                                    <Icon icon="mdi:github" class="social-icon" />
                                </a>
                            </FadeInWayPoint>
                        </li>
                        <li> 
                            <FadeInWayPoint direction="left" :delay="150">
                                <a href="https://www.linkedin.com/in/iain-mcintosh-b6057420b/" target="_blank">
                                    <Icon icon="il:linkedin" class="social-icon" />
                                </a>
                            </FadeInWayPoint>
                        </li>
                        <li>
                            <FadeInWayPoint direction="left" :delay="300">
                                <a href="mailto:iaindev86@gmail.com">
                                    <Icon icon="material-symbols:mark-email-unread-outline" class="social-icon" />
                                </a>
                            </FadeInWayPoint>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.verticalLine {
    border-left: thin solid #7d868e;
    height: 3em;
    align-self: center;
}

.navbar-social {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 0.5rem;
    width: 8rem
}

.navbar-social li a .social-icon {
    font-size: 1.3rem;
    color: white;
}

.navbar-social li a .social-icon:hover {
    color: #d0a498;
}

.ftco-navbar-light.scrolled .navbar-social li a .social-icon {
    color: black
}

.ftco-navbar-light.scrolled .navbar-social li a .social-icon:hover {
    color: #65696d
}
</style>