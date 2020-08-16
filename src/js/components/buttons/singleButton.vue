<template>
  <button
    class="p-singleButton"
    :class="styleClasses"
    :disabled="isDisabled"
    :style="colorStyles"
    @focus="toggleState"
    @blur="toggleState"
  >
    {{ text }}
  </button>
</template>

<script>
import color from '../_mixins/color'
export default {
  name: 'singleButton',
  mixins: [color],
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleState() {
      this.$emit('toggleState')
    },
  },
}
</script>

<style lang="scss">
$shadowDepth: 2px;
.p-singleButton {
  appearance: none;
  border: none;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #e6e7ee;
  border-radius: 20px;
  justify-content: center;
  padding: 16px 32px;
  transition: all 0.2s ease-out;
  &:focus,
  &.is-focus {
    outline: none;
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
