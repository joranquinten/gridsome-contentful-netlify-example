<template>
  <div class="picture-container">
    <Loader v-if="isLoading" />
    <g-image
      v-if="!isLoading"
      class="picture"
      :src="renderpicture(picture.file.url)"
      :alt="picture.title"
    />
    <div class="picture-properties">
      <h2>
        {{ picture.title }}
      </h2>
      <div v-if="picture.description" class="picture-description">
        {{ picture.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { renderImage } from "../helpers/contentful";
import Loader from "../components/Loader";

export default {
  components: { Loader },
  props: {
    picture: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    renderpicture(src) {
      return renderImage({ src, w: 1200, h: 1200 });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_core.scss";
.picture-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.picture {
  max-width: 92vw;
  height: auto;
  max-height: 80vh !important;
}

.picture-properties {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  h2 {
    margin: 0.5em 0;
    color: $light;
  }
  .picture-description {
    color: $light;
  }
}
</style>