<template>
  <li class="l-section section">
    <div class="hire z-overflow">
      <h2>My skills</h2>
      <!-- checkout formspree.io for easy form setup-->
      <div class="work-request">
        <div class="work-request--options">
          <span class="options-b">
            <label
              v-for="(skill, index) in skills"
              :key="index"
            >
              <div class="icon">
                <check-icon width="16" height="16" />
              </div>
              <span class="text">{{ skill.name }}</span>
            </label>
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import CheckIcon from '@/components/icons/Check.vue';

export default {
  name: 'skills',

  components: {
    CheckIcon,
  },

  data() {
    return {
      skills: [
        { name: 'JavaScript' },
        { name: 'VueJS' },
        { name: 'TypeScript' },
        { name: 'Webpack' },
        { name: 'PHP' },
        { name: 'Gulp' },
        { name: 'Vuetify' },
        { name: 'CSS3' },
        { name: 'SASS & PUG' },
        { name: 'Git' },
        { name: 'ES6' },
        { name: 'NodeJS' },
      ],
    };
  },
};
</script>

<style lang="scss">
.hire {
  position: relative;
  display: flex;
  width: 700px;
  max-width: 75%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

@media (max-width: 1180px) {
  .hire {
    max-width: 100%;
  }
}

.hire h2 {
  margin: 0 0 20px 0;
  font-size: 30px;
  text-align: center;
}

.work-request {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.work-request input[type="submit"] {
  width: 400px;
  max-width: 100%;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #CB1348;
  border: none;
  border-radius: 0;
}

.work-request input[type="submit"]:focus {
  outline: none;
}

.work-request--options {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
}

.work-request--options .options-a {
  display: flex;
  width: 100%;


  justify-content: space-between;
}

.work-request--options .options-b {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.work-request--options label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 30px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border: 2px solid #fff;
  cursor: pointer;
  transition: background-color .2s ease-in-out, border-color .2s ease-in-out;
  background-color: #CB1348;
  border-color: #CB1348;
}

.work-request--options label .icon {
  display: flex;
  align-items: center;
  position: relative;
}

.work-request--options label .icon svg {
  fill: #fff;
  transition: width .2s ease-in-out;
}

.work-request--options label .text {
  position: relative;
  display: inline-block;
  margin-left: 15px;
}

.work-request--options input[type="checkbox"] {
  display: none;
}

.work-request--information {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 60px;
}

.work-request--information .information-name,
.work-request--information .information-email {
  position: relative;
  width: 45%;
  height: 50px;
  font-size: 30px;
  font-weight: 300;
}

.work-request--information input[type="text"],
.work-request--information input[type="email"] {
  width: 100%;
  padding: 0 0 5px 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
}

.work-request--information input[type="text"]:focus,
.work-request--information input[type="email"]:focus {
  outline: none;
  background-color: #0c0c0c;
}

.work-request--information label {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: top .2s ease-in-out, font-size .2s ease-in-out;
}

.work-request--information input:focus+label,
.work-request--information input.has-value+label {
  top: -15px;
  font-size: 14px;
}

@media (max-width: 767px) {
  .work-request--options {
    flex-direction: row;
    justify-content: space-around;
  }
}

@media (max-width: 600px) {
  .work-request--options {
    margin: 20px 0;
  }
}

@media (max-width: 600px) and (max-width: 415px) {
  .work-request--options {
    justify-content: space-between;
  }
}

@media (max-width: 600px) {
  .work-request--options label {
    width: 150px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  .work-request--options input[type="checkbox"]:checked+label svg {
    width: 12px;
  }

  .work-request--information {
    margin-bottom: 30px;
  }

  .work-request--information .information-name,
  .work-request--information .information-email {
    height: 40px;
    font-size: 24px;
  }
}
</style>
