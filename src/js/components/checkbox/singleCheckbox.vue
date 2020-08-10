<template>
  <div class="p-singleCheckbox" :class="styleClasses">
    <label class="p-singleCheckbox__label">
      <input
        type="checkbox"
        class="p-singleCheckbox__checkbox"
        :checked="form.isChecked"
        :disabled="isDisabled"
      />
      <div class="p-singleCheckbox__display">
        {{ text }}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'singleCheckbox',
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      form: {
        isChecked: false,
      },
    }
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
  created() {
    this.form.isChecked = this.$props.isChecked
  },
  methods: {},
}
</script>

<style lang="scss">
$shadowDepth: 4px;
.p-singleCheckbox__label {
  cursor: pointer;
}
.p-singleCheckbox__checkbox {
  display: none;
}
.p-singleCheckbox__display {
  appearance: none;
  border: none;
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
  justify-content: center;
  padding: 16px 32px;
  transition: all 0.2s ease-out;
  .p-singleCheckbox__checkbox:checked ~ &,
  .p-singleCheckbox.is-selected & {
    outline: none;
    // prettier-ignore
    box-shadow:
      calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5),
      inset calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 4) 0 rgba(0, 0, 0, 0.25),
      inset calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * 3) 0 rgba(255, 255, 255, 0.5)
    ;
  }

  .p-singleCheckbox__checkbox:disabled ~ &,
  .p-singleCheckbox.is-disabled & {
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