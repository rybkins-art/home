<template>
  <ul
    class="outer-nav"
    :class="{'is-vis': contentMenuIsActive}"
    @click="toggleContentMenu(false)"
  >
    <li
      v-for="(section, index) in sections"
      :key="index"
      :class="{'is-active': section.active, 'is-vis': contentMenuIsActive}"
      @click="setActiveSection(section.id)"
    >
      {{ section.name }}
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'outer-nav',

  computed: {
    ...mapState(['contentMenuIsActive', 'sections']),
  },

  methods: {
    ...mapMutations(['toggleContentMenu', 'setActiveSection']),
  },
};
</script>

<style lang="scss">
  .outer-nav {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translateY(-50%);
  transform-style: preserve-3d;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  visibility: hidden;
  transition: visibility 0s .2s;
}

.outer-nav.is-vis {
  visibility: visible;
}

.outer-nav--return {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  cursor: pointer;
  z-index: 11;
}

.outer-nav--return.is-vis {
  display: block;
}

.outer-nav>li {
  transform-style: preserve-3d;
  transform: translateX(350px) translateZ(-1000px);
  font-size: 55px;
  font-weight: 900;
  opacity: 0;
  cursor: pointer;
  transition: transform .2s, opacity .2s;
}

.outer-nav>li.is-vis {
  transform: translateX(0) translateZ(0);
  opacity: 1;
  transition: transform .4s, opacity .4s;
}

.outer-nav>li::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  width: 110%;
  height: 15px;
  opacity: 0;
  background-color: #CB1348;
}

.outer-nav>li.is-active::before {
  opacity: 1;
}

@media (max-width: 767px) {
  .outer-nav>li {
    font-size: 44px;
  }
}

@media (max-width: 600px) {
  .outer-nav>li {
    font-size: 34px;
  }
}

.outer-nav li.is-vis:nth-child(2) {
  transition-delay: .04s;
}

.outer-nav li.is-vis:nth-child(3) {
  transition-delay: .08s;
}

.outer-nav li.is-vis:nth-child(4) {
  transition-delay: .12s;
}

.outer-nav li.is-vis:nth-child(5) {
  transition-delay: .16s;
}
</style>
