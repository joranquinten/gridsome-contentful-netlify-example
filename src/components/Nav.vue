<template>
  <header class="header">
    <g-link to="/" class="home-link"
      ><Logo :alt="$static.metadata.siteName"
    /></g-link>

    <nav class="nav">
      <g-link class="nav__link" to="/galleries/">Galleries</g-link>
      <g-link class="nav__link" to="/about">About</g-link>
      <g-link class="nav__link" to="/contact">Contact</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
    </nav>
  </header>
</template>

<script>
import Logo from "../components/Logo";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_core.scss";

.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  @media screen and (max-width: 400px) {
    justify-content: center;
  }
}

.nav {
  @media screen and (max-width: 400px) {
    width: 100%;
  }

  a {
    position: relative;
    display: inline-block;
    margin: 5px 0;
    color: $primary;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 400;
    text-shadow: 0 0 1px $dark;
    padding: 0 10px;
    height: 25px;
    line-height: 25px;
    font-family: "Work Sans", sans-serif;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  a::before,
  a::after {
    position: absolute;
    width: 25px;
    height: 2px;
    background: $light;
    content: "";
    opacity: 0.2;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    pointer-events: none;
  }

  a::before {
    top: 0;
    left: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
  }

  a::after {
    right: 0;
    bottom: 0;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: 100% 0;
    -moz-transform-origin: 100% 0;
    transform-origin: 100% 0;
  }

  a.active--exact {
    opacity: 0.6;
  }

  a:hover::before,
  a:hover::after,
  a:focus::before,
  a:focus::after {
    opacity: 1;
  }

  a:hover::before,
  a:focus::before {
    left: 50%;
    -webkit-transform: rotate(0deg) translateX(-50%);
    -moz-transform: rotate(0deg) translateX(-50%);
    transform: rotate(0deg) translateX(-50%);
  }

  a:hover::after,
  a:focus::after {
    right: 50%;
    -webkit-transform: rotate(0deg) translateX(50%);
    -moz-transform: rotate(0deg) translateX(50%);
    transform: rotate(0deg) translateX(50%);
  }
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
