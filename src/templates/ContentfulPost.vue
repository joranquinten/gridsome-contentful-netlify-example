<template>
  <Layout class="post">
    <div class="post-header">
      <h1 class="post-title">
        {{ $page.post.title }}
      </h1>
      <span class="post-date hand-written">{{ $page.post.publishDate }}</span>
      <g-image
        class="post-hero-image"
        v-if="$page.post.heroImage"
        :src="renderHeroImage($page.post.heroImage.file.url)"
        :alt="$page.post.heroImage.title"
      />
    </div>
    <vue-markdown class="post-body">{{ $page.post.body }}</vue-markdown>
    <div class="post-footer">
      <g-link class="return-link" to="/blog/" title="To blog overview"
        >👈 Back to blog overview</g-link
      >
    </div>
  </Layout>
</template>

<script>
import { renderImage } from "../helpers/contentful";
import VueMarkdown from "vue-markdown";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  components: {
    VueMarkdown
  },
  methods: {
    renderHeroImage(src) {
      return renderImage({ src, fit: "fill", w: 1200, h: 300 });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_core.scss";
.post-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 300px;

  .post-title {
    transform: skew(0.1turn, -53deg) rotate(50deg);
    z-index: 1;
    color: $dark;
    background-color: $light;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    margin: 0.4em 1em 0.4em 0;

    @media screen and (max-width: 760px) {
      transform: skew(0) rotate(0);
    }
  }

  .post-date {
    z-index: 1;
    padding: 0.2em;
    font-size: 1.4em;
    text-shadow: 0px 0px 4px rgba(150, 150, 150, 1);
  }

  .post-hero-image {
    z-index: 0;
    position: absolute;
    top: 80px;
    @media screen and (max-width: 500px) {
      top: 120px;
      max-height: 260px;
    }
    left: 50%;
    transform: translate(-50%, 0);
    max-height: 300px;
  }
}

.post-footer {
  .return-link {
    display: inline-block;
    margin-top: 2em;
  }
}
</style>

<page-query>
query Post ($path: String!) {
  post: contentfulPost (path: $path) {
    title,
    slug,
    publishDate,
    metaDescription,
    body,
    heroImage {
      file {
        url
      }
      title
    }
  }
}
</page-query>
