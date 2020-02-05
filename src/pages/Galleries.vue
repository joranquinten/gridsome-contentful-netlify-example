<template>
  <Layout>
    <h1>Galleries</h1>
    <ul class="galleries">
      <li
        class="gallery"
        v-for="{ node } in $page.galleries.edges"
        :key="node.id"
      >
        <g-link :to="`/gallery/${node.slug}`">
          <ImageHover width="100%" height="100%">
            <g-image
              class="cover-image"
              :src="renderThumbnail(getCoverImage(node).url)"
              :alt="getCoverImage(node).title"
            />
          </ImageHover>
          <h4 class="title">
            {{ node.title }}
          </h4>
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<style lang="scss" scoped>
@import "~/assets/_core.scss";
.galleries {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  .gallery {
    width: 190px;
    height: 190px;

    @media screen and (max-width: 340px) {
      width: 50%;
      height: 40vw;
    }
    @media screen and (max-width: 576px) {
      width: 33.333%;
      height: 30vw;
    }
    position: relative;
    display: inline-block;

    .cover-image {
      width: 190px;
      height: 190px;
    }

    .title {
      position: absolute;
      bottom: 0.24em;
      left: 0;
      padding: 0.24em;
      padding-left: 0.6em;
      margin: 0;
      text-shadow: 0 0 4px $dark;
    }
  }
}
</style>

<script>
import { getCoverImage, renderImage } from "../helpers/contentful";
import ImageHover from "../components/ImageHover";

export default {
  metaInfo: {
    title: "Galleries"
  },
  components: {
    ImageHover
  },
  methods: {
    getCoverImage(node) {
      return getCoverImage(node);
    },
    renderThumbnail(src) {
      return renderImage({ src, fit: "fill", w: 760 / 4, h: 760 / 4 });
    }
  }
};
</script>

<page-query>
query Galleries {
  galleries: allContentfulGallery(sort: [{by: "sortOrder", order: ASC }, {by: "title", order: ASC}]) {
    edges {
      node {
        id,
        title,
        slug,
        media {
          file {
            url
          },
          title
        },
        heroImage {
          file { 
            url
          },
          title
        }
      }
    }
  }
}
</page-query>
