<template>
  <Layout
    ><h1>{{ $page.gallery.title }}</h1>
    <div
      class="description"
      v-html="renderHtmlMethod($page.gallery.description)"
    />
    <div class="gallery">
      <g-image
        :key="index"
        v-for="(image, index) in $page.gallery.media"
        :src="renderThumbnail(image.file.url)"
        :alt="image.title"
        @click="openPicture(index)"
      />
    </div>
    <transition name="fade">
      <PictureModal
        :pictures="$page.gallery.media"
        :index="currentIndex"
        v-if="modalIsOpen"
        @close="hideModal"
      />
    </transition>
    <g-link class="return-link" to="/galleries/"
      >👈 Back to gallery overview</g-link
    >
  </Layout>
</template>

<script>
import { renderHtmlMethod, renderImage } from "../helpers/contentful";
import VueMarkdown from "vue-markdown";
import PictureModal from "../components/PictureModal";

export default {
  metaInfo() {
    return {
      title: this.$page.gallery.title
    };
  },
  components: {
    VueMarkdown
  },
  created() {
    this.$root.$on("modal-close", this.hideModal);
  },
  components: {
    PictureModal
  },
  methods: {
    renderHtmlMethod(input) {
      return renderHtmlMethod(input);
    },
    renderThumbnail(src) {
      return renderImage({ src, fit: "fill", w: 760 / 5, h: 760 / 5 });
    },
    openPicture(index) {
      this.currentIndex = index;
      this.showModal();
    },
    showModal() {
      this.modalIsOpen = true;
    },
    hideModal() {
      this.modalIsOpen = false;
    }
  },
  data() {
    return {
      currentIndex: 0,
      modalIsOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    cursor: pointer;
    @media screen and (max-width: 576px) {
      width: 50%;
      height: 40vw;
    }
  }
}
.return-link {
  display: inline-block;
  margin-top: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<page-query>
query Gallery ($path: String!) {
  gallery: contentfulGallery (path: $path) {
    title,
    description,
    heroImage {
      file {
        url,
        details {
          size
        }
      }
    }
    media {
      title,
      file {
        url,
        details {
          size
        }
      },
      description
    }
  }
}
</page-query>
