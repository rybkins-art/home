<template>
  <ul class="l-main-content main-content">
    <keep-alive>
      <component
        :is="section.id"
        v-for="(section, index) in sections"
        :key="index"
        :class="[...getSecctionClass(section), `section--${section.id}`]"
      />
    </keep-alive>
  </ul>
</template>

<script>
import { mapState , mapGetters } from 'vuex';

import Contacts from '@/components/sections/Contacts.vue';
import Home from '@/components/sections/Home.vue';
import Skills from '@/components/sections/Skills.vue';
import Works from '@/components/sections/Works.vue';

export default {
  name: 'index',
  components: {
    Home,
    Works,
    Skills,
    Contacts,
  },

  data() {
    return {
      scrollTimeOutId: null,
      touchStartPosY: 0,
      wheelDelta: null,
    };
  },

  computed: {
    ...mapState(['sections']),
    ...mapGetters(['activeSection']),

    scrollStateClass() {
      return `section--${this.wheelDelta < 0 ? 'next': 'prev'}`;
    },
  },

  watch: {
    activeSection({ id }) {
      this.setUrlSectionId(id);
    },
  },

  mounted() {
    document.addEventListener('touchstart', this.onTouchStartEvent);
    document.addEventListener('touchend', this.onTouchEndEvent);
    document.addEventListener('wheel', this.onWheelEvent);
  },

  beforeUnmount() {
    document.removeEventListener('touchstart', this.onTouchStartEvent);
    document.removeEventListener('touchend', this.onTouchEndEvent);
    document.removeEventListener('wheel', this.onWheelEvent);
  },

  methods: {
    scrollContent(delta) {
      if (this.scrollTimeOutId) {
        return;
      }

      this.scrollTimeOutId = setTimeout(() => {
        this.scrollTimeOutId = null;
        this.wheelDelta = null;
        this.$store.commit('changeSection', delta);
      }, 300);

      this.wheelDelta = delta;
    },

    onWheelEvent(event) {
      this.scrollContent(event.wheelDelta);
    },

    onTouchStartEvent(event) {
      this.touchStartPosY = Math.round(event.changedTouches[0].screenY);
      console.info(this.touchStartPosY);
    },

    onTouchEndEvent(event) {
      const currentPageY = Math.round(event.changedTouches[0].screenY);
      console.info(currentPageY, this.touchStartPosY);
      if (this.touchStartPosY === currentPageY) {
        return;
      }

      console.info(this.touchStartPosY > currentPageY);

      if (this.touchStartPosY > currentPageY) {
        this.scrollContent(-1);
      } else {
        this.scrollContent(1);
      }
    },

    getSecctionClass(section) {
      const classes = [{ 'section--is-active': section.active }];
      if (section.active && this.scrollTimeOutId) {
        classes.push(this.scrollStateClass);
      }

      return classes;
    },

    setUrlSectionId(sectionId) {
      window.location = `#${sectionId}`;
    },
  },
};

</script>
