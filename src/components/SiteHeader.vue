<template>
  <header class="header">
    <a
      class="header--logo"
      href="#home"
      @click="setActiveSection('home')"
    >
      <p>Dmitriy Rybkin</p>
    </a>
    <div class="header--nav-toggle" @click="toggleContentMenu">
      <span />
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'site-header',

  methods: {
    ...mapMutations(['toggleContentMenu', 'setActiveSection']),
  },
};
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.header--logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}

.header--logo p {
  margin: 0 0 0 10px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.header--nav-toggle {
  display: flex;
  width: 50px;
  height: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.header--nav-toggle span,
.header--nav-toggle::before,
.header--nav-toggle::after {
  content: "";
  position: relative;
  width: 16px;
  height: 2px;
  background-color: #fff;
}

.header--nav-toggle::before {
  bottom: 5px;
  width: 23px;
}

.header--nav-toggle::after {
  top: 5px;
  width: 23px;
}

.header--cta {
  position: absolute;
  top: 50%;
  left: 50%;


  transform: translate(-50%, -50%);
  padding: 0 20px;
  line-height: 30px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #CB1348;
  border: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity .4s ease-in-out, visibility 0s .4s;
}

.header--cta:focus {
  outline: none;
}

.header--cta.is-active {
  opacity: 1;
  visibility: visible;
  transition: opacity .4s ease-in-out .4s;
}

@media (max-width: 767px) {
  .header--cta {
    display: none;
  }
}
</style>
