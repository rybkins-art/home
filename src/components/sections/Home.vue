<template>
  <li class="l-section section">
    <div class="intro">
      <div class="intro--banner">
        <div class="intro--logo z-overflow">
          {Rybkin}
        </div>
      </div>
      <div class="intro--options">
        <a href="#0">
          <h3>Responsive & Adaptive</h3>
          <p>The task of the layout designer to make the site look the same on all devices</p>
        </a><a href="#0">
          <h3>Javascript ES2016</h3>
          <p>"A good programming language is a conceptual universe for thinking about programming" - Alan J.
            Perlis</p>
        </a><a href="#0">
          <h3>New technology</h3>
          <p>I use new technologies that facilitate the development process and make it enjoyable.</p>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style  lang="scss">
.intro {
  position: relative;
  display: flex;
  width: 900px;
  max-width: 75%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

@media (max-width: 1180px) {
  .intro {
    max-width: 100%;
  }
}

.intro--logo {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: center;
  align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  width: 100%;
  height: 300px;
  background: url(/assets/img/logo.svg) no-repeat center;
  color: #FFF;
  color: transparent;
  text-align: center;
  font-size: 20vmin;
  background: -webkit-gradient(linear, left top, right top, from(purple), to(crimson));
  background: -o-linear-gradient(left, purple 0%, crimson 100%);
  background: linear-gradient(to right, purple 0%, crimson 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.intro--banner {
  position: relative;
  height: 475px;
}

.intro--banner::before {
  content: "";
  position: absolute;
  bottom: 20px;
  left: -15px;
  right: 0;
  height: 2px;
  background-color: #282828;
}

.intro--banner::after {
  content: "";
  position: absolute;
  bottom: 18px;
  left: 0;
  width: 30px;
  height: 4px;
  background-color: #CB1348;
}

.intro--banner h1 {
  position: relative;
  font-size: 68px;
  font-weight: 900;
  line-height: 1;
  z-index: 1;
}

.intro--banner button {
  position: relative;
  padding: 5px 17px 5px 12px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
}

.intro--banner button .btn-background {
  position: absolute;
  top: 0;
  left: 23px;
  right: 0;
  height: 100%;
  background-color: #CB1348;
  z-index: -1;
  transition: left .2s ease-in-out;
}

.intro--banner button:hover .btn-background {
  left: 0;
}

.intro--banner button:focus {
  outline: none;
}

.intro--banner button svg {
  position: relative;
  left: 5px;
  width: 15px;
  fill: #fff;
}

.intro--banner img {
  position: absolute;
  bottom: 21px;
  right: -12px;
}

.intro--options {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.intro--options>a {
  max-width: 250px;
  text-decoration: none;
  color: #282828;
  transition: color .2s ease-in-out;
}

.intro--options>a:hover {
  color: #fff;
}

.intro--options h3 {
  font-size: 16px;
  text-transform: uppercase;
}

.intro--options p {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .intro--banner {
    height: 380px;
  }

  .intro--banner h1 {
    font-size: 55px;
  }

  .intro--banner img {
    width: 430px;
  }

  .intro--options>a {
    margin-right: 30px;
  }

  .intro--options>a:last-child {
    margin-right: 0;
  }
}

@media (max-width: 767px) {
  .intro--banner {
    height: 305px;
  }

  .intro--banner h1 {
    font-size: 44px;
  }

  .intro--banner img {
    width: 330px;
  }

  .intro--options {
    display: block;
  }

  .intro--options>a {
    display: block;
    max-width: 100%;
    margin: 0 0 30px 0;
  }

  .intro--options>a:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 600px) {
  .intro--banner {
    height: 360px;
  }

  .intro--banner h1 {
    font-size: 55px;
  }

  .intro--banner img {
    display: none;
  }
}

@media (max-width: 600px) and (max-height: 750px) {
  .intro {
    justify-content: flex-start;
  }

  .intro--banner {
    height: 280px;
  }

  .intro--logo {
    height: 330px;
  }
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  .intro--logo {
    background: transparent;
    color: #c6104d;
  }
}
</style>
