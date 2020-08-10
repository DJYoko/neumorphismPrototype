<template>
  <button class="p-singleButton" :class="styleClasses" :disabled="isDisabled">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'singleButton',
  components: {},
  props: {
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
    styleClasses() {
      const classList = []

      if (this.$props.isFocus) {
        classList.push('is-focus')
      }
      if (this.$props.isDisabled) {
        classList.push('is-disabled')
      }

      return classList.join(' ')
    },
  },
  methods: {},
}
</script>

<style lang="scss">
$baseSize: 4px;
.p-singleButton {
  appearance: none;
  border: none;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #e6e7ee;
  // prettier-ignore
  box-shadow:
    calc(#{$baseSize} * 3) calc(#{$baseSize} * 3) calc(#{$baseSize} * 4) 0 rgba(0, 0, 0, 0.25),
    calc(#{$baseSize} * -2) calc(#{$baseSize} * -2) calc(#{$baseSize} * 3) 0 rgba(255, 255, 255, 0.5),
    inset calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
    inset calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5)
  ;
  border-radius: 20px;
  justify-content: center;
  padding: 16px 32px;
  transition: all 0.2s ease-out;
  &:focus,
  &.is-focus {
    outline: none;
    // prettier-ignore
    box-shadow:
      calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5),
      inset calc(#{$baseSize} * 3) calc(#{$baseSize} * 3) calc(#{$baseSize} * 4) 0 rgba(0, 0, 0, 0.25),
      inset calc(#{$baseSize} * -2) calc(#{$baseSize} * -2) calc(#{$baseSize} * 3) 0 rgba(255, 255, 255, 0.5)
    ;
  }

  &.is-disabled {
    cursor: not-allowed;
    box-shadow: none;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    // border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    // border-right: 1px solid rgba(255, 255, 255, 0.5);
    // border-top: 1px solid rgba(0, 0, 0, 0.25);
    // border-left: 1px solid rgba(0, 0, 0, 0.25);
  }
}
</style>
