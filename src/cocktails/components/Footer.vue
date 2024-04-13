<script setup lang="ts">
import { Icon } from '@iconify/vue'
import FadeInWayPoint from '../../utils/FadeInWayPoint.vue'
</script>

<template>
    <footer class="ftco-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md">
                    <div class="ftco-footer-widget">
                        <h2 class="ftco-heading-2 logo">
                            <RouterLink to="/">COCKTAIL <span>MATE</span></RouterLink>
                        </h2>
                        <p>Helping you when you can't help yourself.</p>
                        <ul class="footer-social list-unstyled mt-2">
                            <li>
                                <FadeInWayPoint>
                                    <a href="https://www.github.com/iainuk86" target="_blank">
                                        <Icon icon="mdi:github" class="social-icon" />
                                    </a>
                                </FadeInWayPoint>
                            </li>
                            <li>
                                <FadeInWayPoint :delay="150">
                                    <a href="https://www.linkedin.com/in/iain-mcintosh-b6057420b/" target="_blank">
                                        <Icon icon="il:linkedin" class="social-icon" />
                                    </a>
                                </FadeInWayPoint>
                            </li>
                            <li>
                                <FadeInWayPoint :delay="300">
                                    <a href="mailto:iaindev86@gmail.com">
                                        <Icon icon="material-symbols:mark-email-unread-outline" class="social-icon" />
                                    </a>
                                </FadeInWayPoint>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md">
                    <div class="ftco-footer-widget ml-md-4">
                        <h2 class="ftco-heading-2 ml-2">Navigation</h2>
                        <ul class="list-unstyled">
                            <li>
                                <RouterLink to="/">
                                    <Icon icon="material-symbols:chevron-right-rounded" class="test-icon"/>Home
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/cocktails">
                                    <Icon icon="material-symbols:chevron-right-rounded" class="test-icon"/>Cocktail List
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/contact">
                                    <Icon icon="material-symbols:chevron-right-rounded" class="test-icon"/>Contact
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md">
                    <div class="ftco-footer-widget">
                        <h2 class="ftco-heading-2">Have any Questions?</h2>
                        <div class="footer-contact mb-3">
                            <ul>
                                <li>
                                    <span class="icon fa fa-map-pin"></span>
                                    <span class="text">Sydney, Australia</span>
                                </li>
                                <li>
                                    <a href="https://portfolio.majatech.net:444" target="_blank">
                                        <span class="icon fa fa-briefcase"></span>
                                        <span class="text">My Portfolio</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:0458633414">
                                        <span class="icon fa fa-phone"></span>
                                        <span class="text">0458 633 414</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:iaindev86@gmail.com">
                                        <span class="icon fa fa-paper-plane pr-4"></span>
                                        <span class="text">iaindev86@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.ftco-footer {
    font-size: 16px;
    padding: 2em 0 0 0;
    background: #1a1a1a;
    color: white;
}

.ftco-footer-widget {
    padding: 0 1rem
}

.ftco-footer .logo a {
    position: relative;
}

.ftco-footer .logo a span {
    color: #b7472a;
}

.footer-social {
    padding: 1rem 0;
    justify-content: center;
}

.footer-social li {
    list-style: none;
    margin: 0 10px 0 0;
    display: inline-block;
}

.footer-social li a {
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #b7472a;
    border-radius: 50%;
    position: relative;
}

.footer-social li a:hover {
    background: #c47865;
}

.social-icon {
    font-size: 1.75rem;
    color: white;
}

.footer-contact ul {
    padding: 0;
}

.footer-contact ul li,
.footer-contact ul li>a {
    display: table;
    line-height: 2;
}

.footer-contact ul li .icon {
    width: 40px;
    font-size: 18px;
    padding-top: 2px;
    color: #fff;
}

.test-icon {
    font-size: 2rem;
}
</style>