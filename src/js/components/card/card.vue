<template>
  <div class="p-card" :style="colorStyles">
    <div
      class="p-card__image"
      :style="`background-image:url(${imageUrl});`"
    ></div>
    <h5 class="p-card__title">{{ title }}</h5>
    <div class="p-card__text">{{ text }}</div>
    <a class="p-card__link" :href="linkUrl" v-if="linkUrl" :target="targetAttr"
      >show more</a
    >
  </div>
</template>

<script>
import color from '../_mixins/color'

export default {
  name: 'card',
  mixins: [color],
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    linkUrl: {
      type: String,
      default: '',
    },
    isExternalLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    targetAttr() {
      return this.$props.isExternalLink ? '_blank' : ''
    },
  },
}
</script>

<style lang="scss">
$shadowDepth: 2px;
.p-card {
  appearance: none;
  border: none;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #e6e7ee;
  border-radius: 20px;
  justify-content: center;
  padding: 32px;

  .p-card__image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 200px;
  }
}
</style>
