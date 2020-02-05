<template>
  <Layout
    ><h1>{{ $page.page.title }}</h1>
    <vue-markdown :key="$route.params.slug" :class="$route.params.slug">{{
      $page.page.body
    }}</vue-markdown>

    <ContactForm v-if="$route.params.slug === 'contact'" />
  </Layout>
</template>

<script>
import VueMarkdown from "vue-markdown";
import ContactForm from "../components/ContactForm";
export default {
  metaInfo() {
    return {
      title: this.$page.page.title,
      description: this.$page.page.body
    };
  },
  components: {
    VueMarkdown,
    ContactForm
  }
};
</script>

<style lang="scss">
@import "~/assets/_core.scss";
.about-joran-quinten {
  > p > img:first-of-type {
    width: 160px;
    margin: -1em 0 1em 1em;
    float: right;
    position: relative;
    transform-origin: 65% 75%;
    transition: transform 1s, filter 0.5s ease-in-out;
    border: 4px solid $secondary;
    border-radius: 100%;
    transform-origin: 50% 50%;
    transform: rotate(-0.02turn);

    &:hover {
      transform: rotate(5turn);
    }
  }
}
</style>

<page-query>
query Page ($path: String!) {
  page: contentfulPage (path: $path) {
    title,
    body,
  }
}
</page-query>
