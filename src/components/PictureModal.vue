<template>
  <div name="modal" @keyup.left="previous" @keyup.right="next">
    <div class="overlay">
      <div class="closer" @click.prevent="close"></div>
      <div class="view">
        <button class="btn close" @click="close">☓</button>
        <div class="controls">
          <button class="btn previous" @click="previous">←</button
          ><button class="btn next" @click="next">→</button>
        </div>
        <transition name="slide" mode="out-in">
          <PictureContainer
            :key="currentIndex"
            :picture="pictures[currentIndex]"
            :is-loading="isLoading"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from "slugify";
import PictureContainer from "../components/PictureContainer";

export default {
  components: {
    PictureContainer
  },
  props: {
    pictures: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: 0,
      isLoading: false
    };
  },
  created() {
    this.currentIndex = this.index;
  },
  mounted() {
    if (window) {
      window.addEventListener("keyup", this.onKeyUp);
    }
  },
  beforeDestroy() {
    if (window) {
      window.removeEventListener("keyup", this.onKeyUp);
    }
  },
  methods: {
    track() {
      this.$ga.page(`/images/${slugify(this.pictures[currentIndex].title)}`);
    },
    onKeyUp(e) {
      if (e.which === 39) this.next();
      if (e.which === 37) this.previous();
      if (e.which === 27) this.close();
    },
    previous() {
      this.currentIndex--;
      if (this.currentIndex < 0) this.currentIndex = this.pictures.length - 1;
    },
    next() {
      this.currentIndex++;
      if (this.currentIndex > this.pictures.length - 1) this.currentIndex = 0;
    },
    close() {
      this.$emit("close");
    }
  },
  watch: {
    currentIndex() {
      const self = this;
      this.isLoading = true;
      const tempImg = new Image();
      tempImg.onload = function() {
        self.isLoading = false;
      };
      tempImg.src = this.pictures[this.currentIndex].file.url;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/_core.scss";
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
}

.closer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.view {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  margin: 0px auto;
  color: $dark;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  .btn {
    position: absolute;
    font-size: 1.2em;
    padding: 0.4em;
    cursor: pointer;
    background: $secondary;
    color: $dark;
    border: none;
    z-index: 10;
  }

  .previous,
  .next {
    width: 60px;
    height: 50px;
    bottom: 50%;
    transform: translateY(-50%);
    transition: all 0.25s ease-in-out;
  }

  .previous {
    left: -10px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    &:hover {
      left: 0;
    }
  }
  .next {
    right: -10px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    &:hover {
      right: 0;
    }
  }

  .close {
    right: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    line-height: 0;
  }
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter {
  transform: translateX(100vw);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100vw);
}
</style>
