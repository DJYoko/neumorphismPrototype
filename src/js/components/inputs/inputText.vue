<template>
  <input class="p-inputText" :class="styleClasses" :disabled="isDisabled" :style="colorStyles" v-model="form.text" />
</template>

<script>
import color from '../_mixins/color';
export default {
  name: 'inputText',
  mixins: [color],
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      form: {
        text: '',
      },
    };
  },
  computed: {
    colorStyles() {
      const styles = {};

      if (this.isDisabled) {
        styles.boxShadow = 'none';
      } else {
        styles.boxShadow = this.shadowStyleFocused;
      }
      return styles;
    },
  },

  created() {
    this.form.text = this.$props.text;
  },
};
</script>

<style lang="scss">
$depth: 2px;
.p-inputText {
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
    // prettier-ignore
    // box-shadow:
    //   calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
    //   calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5),
    //   inset calc(#{$depth}) calc(#{$depth}) calc(#{$depth} * 2) 0 rgba(0, 0, 0, 0.25),
    //   inset calc(0px) calc(0px) calc(#{$depth}) 0 rgba(255, 255, 255, 0.5)
    // ;
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
