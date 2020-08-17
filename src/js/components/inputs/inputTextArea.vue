<template>
  <textarea
    class="p-inputTextArea"
    :class="styleClasses"
    :disabled="isDisabled"
    :style="colorStyles"
    v-model="form.text"
  />
</template>

<script>
import color from '../_mixins/color'
export default {
  name: 'inputTextArea',
  mixins: [color],
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data: function() {
    return {
      form: {
        text: '',
      },
    }
  },
  computed: {
    colorStyles() {
      const styles = {}

      if (this.isDisabled) {
        styles.boxShadow = 'none'
      } else {
        styles.boxShadow = this.shadowStyleFocused
      }
      return styles
    },
  },
  created() {
    this.form.text = this.$props.text
  },
}
</script>

<style lang="scss">
$depth: 2px;
.p-inputTextArea {
  appearance: none;
  border: none;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #e6e7ee;
  border-radius: 20px;
  justify-content: center;
  padding: 16px 32px;
  transition: all 0.2s ease-out;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  border-right: 1px solid rgba(255, 255, 255, 1);
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  border-left: 1px solid rgba(0, 0, 0, 0.25);

  &:focus,
  &.is-focus {
    outline: none;
  }

  &:disabled,
  &.is-disabled {
    cursor: not-allowed;

    // border-top: 1px solid rgba(255, 255, 255, 0.5);
    // border-left: 1px solid rgba(255, 255, 255, 0.5);
    // border-right: 1px solid rgba(0, 0, 0, 0.25);
    // border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
}
</style>
