<template>
  <li class="p-listItem">
    <a
      class="p-listItem__link"
      v-if="url !== ''"
      :href="url"
      :target="targetAttr"
      :style="colorStyles"
      >{{ text }}</a
    >
    <span class="p-listItem__text" v-else :style="colorStyles">{{ text }}</span>
  </li>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    bgColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    isExternalLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorStyles() {
      return {
        backgroundColor: this.$props.bgColor,
        color: this.$props.textColor,
      }
    },
    targetAttr() {
      return this.$props.isExternalLink ? '_blank' : ''
    },
  },
}
</script>

<style lang="scss">
$shadowDepth: 2px;
$shadowDepthMin: 1px;

.p-listItem {
  list-style: none;

  &:first-child {
    .p-listItem__link,
    .p-listItem__text {
      border-radius: 20px 20px 0 0;
    }
  }
  &:last-child {
    .p-listItem__link,
    .p-listItem__text {
      border-radius: 0 0 20px 20px;
      border-bottom: none;
    }
  }

  .p-listItem__link,
  .p-listItem__text {
    display: block;
    padding: 16px 32px;
    transition: all 0.2s ease-out;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    box-shadow: calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 3)
        calc(#{$shadowDepth} * 4) 0 rgba(0, 0, 0, 0.25),
      calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * -2)
        calc(#{$shadowDepth} * 3) 0 rgba(255, 255, 255, 0.5),
      inset calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      inset calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5);
  }

  .p-listItem__link:hover {
    text-decoration: none;
  }

  .p-listItem__link:active {
    box-shadow: calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5),
      inset calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 3)
        calc(#{$shadowDepth} * 4) 0 rgba(0, 0, 0, 0.25),
      inset calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * -2)
        calc(#{$shadowDepth} * 3) 0 rgba(255, 255, 255, 0.5);
  }
}
</style>
