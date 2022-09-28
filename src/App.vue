<template>
  <div>
    <particles />
    <!-- notification for small viewports and landscape oriented smartphones-->
    <div class="device-notification">
      <a
        class="device-notification--logo"
        href="#home"
      >
        <p>{Rybkin}</p>
      </a>
      <p class="device-notification--message">
        Orient your device to portrait or find a larger screen. You won't be
        disappointed.
      </p>
    </div>
    <div class="perspective effect-rotate-left perspective--modalview" :class="siteContentStateClass">
      <div class="container">
        <div
          class="outer-nav--return"
          :class="{'is-vis': contentMenuIsActive}"
          @click="clickOuterOverlay"
        />
        <div
          id="viewport"
          class="l-viewport"
        >
          <div class="l-wrapper">
            <site-header />
            <site-nav />

            <!-- <arrow-down-icon /> -->

            <sections />
          </div>
        </div>
      </div>

      <outer-nav />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import Particles from './components/common/Particles.vue';
//import ArrowDownIcon from './components/icons/ArrowDown.vue';
import OuterNav from './components/OuterNav.vue';
import Sections from './components/sections/index.vue';
import SiteHeader from './components/SiteHeader.vue';
import SiteNav from './components/SiteNav.vue';


export default {
  name: 'app',
  components: {
    Particles,
    SiteHeader,
    SiteNav,

    Sections,

    OuterNav,
    //ArrowDownIcon,
  },

  computed: {
    ...mapState(['contentMenuIsActive']),

    siteContentStateClass() {
      return this.contentMenuIsActive ? 'effect-rotate-left--animate': '';
    },
  },

  mounted() {
    this.setActiveSection(this.getSectionFromUrl());
  },

  methods: {
    ...mapMutations(['toggleContentMenu', 'setActiveSection']),

    clickOuterOverlay() {
      if (this.contentMenuIsActive) {
        this.toggleContentMenu();
      }
    },

    getSectionFromUrl() {
      const { hash } = window.location;

      return hash ? hash.replace('#', '') : '';
    },
  },
};
</script>

<style lang="scss">
.l-wrapper {
  position: relative;
  width: 1440px;
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
}

.l-viewport {
  position: relative;
  width: 100%;
  height: 100vh;
  box-shadow: 0 0 45px 5px rgba(0, 0, 0, 0.85);
  overflow: hidden;
}

.device-notification {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0c0c0c;
  z-index: 12;
}

.device-notification--logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}

.device-notification--logo p {
  margin: 0 0 0 10px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.device-notification--message {
  width: 70%;
  margin: 30px 0 0 0;
  font-weight: 700;
  text-align: center;
}

.perspective {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.perspective--modalview {
  position: fixed;
  perspective: 1500px;
}

.l-main-content {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  position: relative;

  transform: translateZ(0) translateX(0) rotateY(0deg);
  min-height: 100%;
  outline: 30px solid #CB1348;


  transition: transform .4s;
  transition: transform .4s,
}

.modalview .container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
}

.effect-rotate-left .container {
  transform-origin: 0% 50%;
  transition: transform .4s;
  transition: transform .4s,
}

.effect-rotate-left--animate .container {
  transform: translateZ(-1800px) translateX(-50%) rotateY(45deg);
  outline: 30px solid #CB1348;

  @media (max-aspect-ratio: 16/9) {
    transform: translateZ(-362px) translateX(-3%) rotateY(67deg)
  }
}

.particle-js {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.swipe-icon {
  position: fixed;
  width: 30px;
  height: 30px;
  fill: #FFF;
  bottom: 15px;
  left: 50%;
  margin-left: -15px;
  opacity: 0.3;
  animation: swipeDown 2s 5;
  z-index: 420;
  cursor: pointer;
}

@keyframes swipeDown {
  from {
    opacity: 0.5;
    transform: translate(0, 0);
  }

  to {
    opacity: 0;
    transform: translate(0, 40px);
  }
}

@media (max-width: 767px) and (min-width: 601px) and (max-height: 680px) {
  .device-notification {


    display: flex;
  }
}

@media (max-width: 600px) and (min-width: 480px) and (max-height: 580px) {
  .device-notification {


    display: flex;
  }
}

@media (max-width: 736px) and (min-width: 360px) and (orientation: landscape) {
  .device-notification {


    display: flex;
  }
}

@media (max-width: 359px) {
  .device-notification {


    display: flex;
  }
}
</style>
