<template>
  <div class="image-wrapper" :style="{ width: width, height: height }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.image-wrapper {
  overflow: hidden;

  & > * {
    filter: brightness(50%);
    transition: transform 0.25s, filter 0.15s ease;
  }

  &:hover > * {
    transform: scale(1.1);
    filter: brightness(100%);
  }
}
</style>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: () => "200px"
    },
    height: {
      type: String,
      required: false,
      default: () => "200px"
    }
  }
};
</script>
