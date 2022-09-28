<template>
  <li
    id="works"
    class="l-section section"
  >
    <div class="work">
      <h2>My portfolio</h2>
      <div class="work--lockup z-overflow">
        <ul class="slider">
          <li
            v-for="(item, index) in sliderItems"
            :key="index"
            class="slider--item"
            :class="`slider--item-${item.position}`"
          >
            <a
              :href="item.link"
              target="_blank"
            >
              <div class="slider--item-image"><img
                :src="'/img/work-' + item.image"
                :alt="item.alt"
              ></div>
              <p class="slider--item-title">{{ item.title }}</p>
              <p class="slider--item-description">{{ item.text }}</p>
            </a>
          </li>
        </ul>
        <div class="slider--prev" @click="changeSlide(-1)">
          <arrow-left-icon
            width="20"
            height="20"
          />
        </div>
        <div class="slider--next" @click="changeSlide(1)">
          <arrow-right-icon
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import ArrowLeftIcon from '@/components/icons/ArrowLeft.vue';
import ArrowRightIcon from '@/components/icons/ArrowRight.vue';

export default {
  name: 'works',

  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },

  data() {
    return {
      sliderItems: [
        {
          title: 'Кофессовой',
          text: 'My first site. Design and development.',
          image: 'koffee.jpg',
          alt: 'Кофессовой',
          link: '/works/koffee',
          position: '',
        },
        {
          title: 'Verushka Tattoo',
          text: 'Website for tattoo parlor. Design and development.',
          image: 'tattoo.jpg',
          alt: 'Verushka Tattoo',
          link: '/works/tattoo',
          position: 'left',
        },
        {
          title: 'Eggs',
          text: 'Landing page for the egg. Why not? Design and development.',
          image: 'egg.jpg',
          alt: 'Eggs',
          link: '/works/eggs',
          position: 'center',
        },
        {
          title: 'TB34.ru',
          text: 'Design and development.',
          image: 'tb.jpg',
          alt: 'TB34',
          link: 'http://tb34.ru/',
          position: 'right',
        },
        {
          title: 'Portlaand',
          text: 'Adaptive template',
          image: 'portland.jpg',
          alt: 'Portland',
          link: '/works/portland',
          position: '',
        },
        {
          title: 'VLG SNT',
          text: 'Adaptive template.',
          image: 'snt.jpg',
          alt: 'VLG-SNT',
          link: 'http://vlgset-snt.ru/',
          position: '',
        },

      ],
    };
  },

  methods: {
    changeSlide(delta) {
      const slides = [];

      ['left', 'center', 'right'].forEach(position => {
        const item = this.sliderItems.find(block => block.position === position);
        const index = this.sliderItems.indexOf(item);

        slides.push({
          position,
          index,
        });

        item.position = '';
      });

      slides.forEach(({ position, index }) => {
        this.setNextItem(index, delta, position);
      });
    },

    setNextItem(index, delta, position) {
      let nextIndex = index + delta;

      if (nextIndex < 0) {
        nextIndex = this.sliderItems.length - 1;
      } else if (nextIndex >= this.sliderItems.length) {
        nextIndex = 0;
      }

      this.sliderItems[nextIndex].position = position;
    },
  },

};
</script>

<style lang="scss">
.work {
  position: relative;
  display: flex;
  width: 960px;
  max-width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

@media (max-width: 1180px) {
  .work {
    max-width: 100%;
  }
}

.work h2 {
  margin: 0 0 20px 0;
  font-size: 30px;
  text-align: center;
}

.work--lockup {
  position: relative;
}

.work--lockup .slider {
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  perspective: 1700px;
}

.work--lockup .slider--item {
  position: absolute;
  left: 0;
  opacity: 0;
  text-align: center;
  transform: scale(0.5, 0.5) translateX(100%) rotateY(90deg);
  transform-style: preserve-3d;
  z-index: 0;
  transition: all 1s ease;
}

.work--lockup .slider--item a {
  text-decoration: none;
  color: #858585;
  position: relative;
  display: block;
  z-index: 4;
}

.work--lockup .slider--item-title {
  margin-top: 25px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.work--lockup .slider--item-description {
  max-width: 250px;
  margin: 0 auto;
  opacity: 0;
}

.work--lockup .slider--item-image {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
}

.work--lockup .slider--item-image img {
  width: 100%;
}

.work--lockup .slider--item-left {
  transform: scale(0.5, 0.5) rotateY(50deg);
  opacity: 1;
  z-index: 2;
}

.work--lockup .slider--item-right {
  transform: translateX(150%) scale(0.5, 0.5) rotateY(-50deg);
  opacity: 1;
  z-index: 2;
}

.work--lockup .slider--item-center {
  position: relative;
  transform: translateX(75%) scale(0.9, 0.9) rotateY(0deg);
  opacity: 1;
  z-index: 3;
}

.work--lockup .slider--item-center a {
  color: $primary-light;
}

.work--lockup .slider--item-center .slider--item-title {
  margin-top: 25px;
  font-size: 16px;
}

.work--lockup .slider--item-center .slider--item-description {
  opacity: .7;
}

.work--lockup .slider--next,
.work--lockup .slider--prev {
  position: absolute;
  top: 160px;
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  border-radius: 50%;
  cursor: pointer;
}

.work--lockup .slider--next svg,
.work--lockup .slider--prev svg {
  width: 20px;
  fill: $primary-light;
}

.work--lockup .slider--next {
  right: 0;
}

.work--lockup .slider--prev {
  left: 0;
}

@media (max-width: 900px) {
  .work--lockup .slider--item-image {
    width: 120px;
    height: 120px;
  }

  .work--lockup .slider--item-center .slider--item-image {
    width: 240px;
    height: 240px;
  }

  .work--lockup .slider--next,
  .work--lockup .slider--prev {
    top: 130px;
  }
}

@media (max-width: 767px) {
  .work--lockup .slider {
    width: 75%;
  }

  .work--lockup .slider--item-image {
    width: 90px;
    height: 90px;
  }

  .work--lockup .slider--item-center .slider--item-image {
    width: 190px;
    height: 190px;
  }

  .work--lockup .slider--next,
  .work--lockup .slider--prev {
    top: 105px;
  }
}

@media (max-width: 600px) {
  .work--lockup .slider {
    width: auto;
  }

  .work--lockup .slider--item-left,
  .work--lockup .slider--item-right {
    display: none;
  }

  .work--lockup .slider--item-center {
    transform: none;
    left: 50%;
    margin-left: -125px;
  }

  .work--lockup .slider--item-center .slider--item-description {
    width: 250px;
    min-height: 45px;
  }
}
</style>
