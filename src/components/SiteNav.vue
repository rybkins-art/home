<template>
  <nav class="l-side-nav">
    <ul class="side-nav">
      <li
        v-for="(section, index) in sections"
        :key="index"
        :data-content-id="section.id"
        :class="{'is-active': activeSection.id === section.id}"
        @click="setActiveSection(section.id)"
      >
        <span>{{ section.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState , mapGetters, mapMutations } from 'vuex';

export default {
  name: 'site-nav',
  computed: {
    ...mapState(['sections']),
    ...mapGetters(['activeSection']),
  },

  methods: {
    ...mapMutations(['setActiveSection']),
  },
};
</script>

<style lang="scss">
.l-side-nav {
  position: absolute;
  left: 0;
  display: flex;
  height: 100%;
  align-items: center;
}

.l-side-nav::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 2px;
  height: 70%;
  max-height: 750px;
  background-color: #555;
  opacity: .35;
  z-index: 10;
}

@media (max-width: 1180px) {
  .l-side-nav {
    display: none;
  }
}

.side-nav {
  position: relative;
  display: flex;
  width: 100px;
  height: 70%;
  max-height: 750px;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-position: inside;
  z-index: 10;
}

.side-nav>li {
  position: relative;
  top: -5px;
  color: $primary-light;
  font-size: 6px;
  cursor: pointer;
}

.side-nav>li span {
  position: relative;
  top: 3px;
  left: 10px;
  color: $primary-light;
  font-size: 14px;
  font-weight: 300;
  opacity: 0;
  visibility: hidden;
}

.side-nav>li::before {
  position: absolute;
  top: 3px;
  left: 10px;
  color: #555;
  font-size: 14px;
  font-weight: 300;
  transition: all .2s ease .1s;
}

.side-nav li:nth-child(1)::before {
  content: "01";
}

.side-nav li:nth-child(2)::before {
  content: "02";
}

.side-nav li:nth-child(3)::before {
  content: "03";
}

.side-nav li:nth-child(4)::before {
  content: "04";
}

.side-nav li:nth-child(5)::before {
  content: "05";
}

.side-nav li.is-active {
  color: #CB1348;
  transition: color .4s ease-in-out;
}

.side-nav li:not(.is-active):hover {
  color: #605f5f;
}

.side-nav li.is-active span,
.side-nav li:hover span {
  opacity: 1;
  visibility: visible;
  transition: opacity .4s ease-in-out;
}

.side-nav li.is-active::before,
.side-nav li:hover::before {
  left: -33px;
}

.side-nav li.is-active::before {
  color: $primary-light;
}

.side-nav li:not(.is-active)::before {
  color: #605f5f;
}
</style>
