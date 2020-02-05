<template>
  <div class="layout">
    <Nav />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer class="footer">
      Built with 💛 by Joran Quinten
      <nav class="footer-links">
        <span class="powered-by">Powered by: </span>
        <a href="https://www.contentful.com/" title="Contentful">Contentful</a>,
        <a href="https://gridsome.org/" title="Gridsome">Gridsome</a> &amp;
        <a href="https://www.netlify.com/" title="Netlify">Netlify</a>
      </nav>
    </footer>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import "~/assets/_core.scss";

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: linear-gradient(
    -45deg,
    rgb(0, 0, 0),
    rgb(15, 15, 15),
    rgb(10, 10, 10)
  );
  background-size: 100% 100vh;
  color: $light;
  font-weight: 100;

  h1,
  h2 {
    font-family: "Amatic SC", cursive;
    line-height: 1em;
    color: $primary;
  }
  h3,
  h4,
  h5 {
    font-family: "Work Sans", sans-serif;
    color: $light;
  }

  h1 {
    font-size: 2.8em;

    display: inline-block;
    transform: skew(0.1turn, -53deg) rotate(50deg);
    z-index: 1;
    color: $dark;
    background-color: $light;
    padding: 0.1em 0.4em;
    border-radius: 3px;
  }

  h2 {
    font-size: 2.2em;
  }

  a {
    color: $primary;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .hand-written {
    font-family: "Amatic SC", cursive;
  }
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

<style lang="scss" scoped>
@import "~/assets/_core.scss";

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.8em;
  margin: 4em 0 2em;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
