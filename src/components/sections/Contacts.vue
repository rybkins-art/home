<template>
  <li class="l-section section">
    <div class="contact">
      <div class="contact--lockup">
        <div class="modal z-overflow">
          <div class="modal--information">
            <a :href="`mailto:${email}`">{{ email }}</a>
            <a :href="`tel:${phone}`">-------------</a>
          </div>

          <ul class="modal--options">
            <li
              v-for="(link, index) in links"
              :key="index"
            >
              <a
                :href="link.href"
                target="_blank"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</template>

<script>

export default {
  name: 'contacts',
  data() {
    return {
      phone: '+79377135384',
      email: 'theimdim@gmail.com',
      links: [
        {
          text: 'VK',
          href: 'https://vk.com/coyote_kiss',
        },
        {
          text: 'Telegram',
          href: 'https://t.me/nikbyryirtimd',
        },
        {
          text: 'Facebook',
          href: 'https://www.facebook.com/theimdim/',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.contact {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: none;
}

.section--is-active {
  .contact {
    background-image: url("~@/assets/img/contact-visual.png");
  }
}

.contact--lockup {
  position: relative;
  display: flex;
  width: 900px;
  max-width: 75%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

@media (max-width: 1180px) {
  .contact--lockup {
    max-width: 90%;
  }
}

@media (max-width: 767px) {
  .contact--lockup {
    justify-content: center;
  }
}

.contact--lockup .modal {
  padding: 45px 45px;
  text-align: center;
  background-color: #151515;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.5);
  min-width: 170px;
}

.contact--lockup .modal--information p,
.contact--lockup .modal--information a {
  display: block;
  margin: 14px 0;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

.contact--lockup .modal--information p {
  margin-top: 0;
}

.contact--lockup .modal--options {
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
}

.contact--lockup .modal--options>li {
  width: 100%;
  margin: 0 auto 25px auto;
  border-radius: 3px;
}

.contact--lockup .modal--options li:nth-child(1) {
  background-color: #5b88bd;
}

.contact--lockup .modal--options li:nth-child(2) {
  background-color: #ea784c;
}

.contact--lockup .modal--options li:nth-child(3) {
  margin-bottom: 0;
  background-color: #4267b2;
  text-transform: uppercase;
}

.contact--lockup .modal--options a {
  display: block;
  width: 100%;
  padding: 8px 0;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

</style>
