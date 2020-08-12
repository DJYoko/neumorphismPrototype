<template>
  <div class="p-simpleWrapper" :style="colorStyles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'simpleWrapper',
  components: {},
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
      required: true,
    },
    isFocus: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {}
  },
  computed: {
    colorStyles() {
      return {
        backgroundColor: this.$props.bgColor,
        color: this.$props.textColor,
      }
    },
  },
  methods: {},
}
</script>

<style lang="scss">
$shadowDepth: 2px;
.p-simpleWrapper {
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #e6e7ee;
  // prettier-ignore
  box-shadow:
    calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 4) 0 rgba(0, 0, 0, 0.25),
    calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * 3) 0 rgba(255, 255, 255, 0.5),
    inset calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
    inset calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5)
  ;
  border-radius: 20px;
  padding: 16px 32px;
  transition: all 0.2s ease-out;
}
</style>
