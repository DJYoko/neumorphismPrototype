<template>
  <div class="p-singleRadio" :class="styleClasses">
    <label class="p-singleRadio__label">
      <input
        type="radio"
        class="p-singleRadio__radio"
        :checked="form.isChecked"
        :disabled="isDisabled"
      />
      <div class="p-singleRadio__display">
        <div class="p-singleRadio__checkMark">
          <svg
            width="8px"
            height="8px"
            viewBox="0 0 16 16"
            class="bi bi-circle-fill p-singleRadio__checkMarkIcon"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
        <div class="p-singleRadio__text">
          {{ text }}
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'singleRadio',
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
    isInline: {
      type: Boolean,
      default: false,
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

      if (this.$props.isInline) {
        classList.push('is-inline')
      }

      if (this.$props.isChecked) {
        classList.push('is-checked')
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
$shadowDepthMin: 1px;

.p-singleRadio {
  &.is-inline {
    display: inline-block;
  }
}

.p-singleRadio__label {
  cursor: pointer;
  display: block;
  width: 100%;
  margin-bottom: 0;
}
.p-singleRadio__radio {
  display: none;
}
.p-singleRadio__display {
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
  padding: 24px 32px;
  transition: all 0.2s ease-out;
  .p-singleRadio__radio:checked ~ &,
  .p-singleRadio.is-checked & {
    outline: none;
    // prettier-ignore
    box-shadow:
      calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5),
      inset calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 3) calc(#{$shadowDepth} * 4) 0 rgba(0, 0, 0, 0.25),
      inset calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * -2) calc(#{$shadowDepth} * 3) 0 rgba(255, 255, 255, 0.5)
    ;
  }

  .p-singleRadio__radio:disabled ~ &,
  .p-singleRadio.is-disabled & {
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

  .p-singleRadio__checkMark {
    width: 24px;
    height: 24px;
    vertical-align: bottom;
    margin-right: 8px;
    position: relative;
    appearance: none;
    border: none;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: #e6e7ee;
    // prettier-ignore
    box-shadow:
      calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5),
      inset calc(#{$shadowDepthMin} * 3) calc(#{$shadowDepthMin} * 3) calc(#{$shadowDepthMin} * 4) 0 rgba(0, 0, 0, 0.25),
      inset calc(#{$shadowDepthMin} * -2) calc(#{$shadowDepthMin} * -2) calc(#{$shadowDepthMin} * 3) 0 rgba(255, 255, 255, 0.5)
    ;
    border-radius: 12px;
    transition: all 0.2s ease-out;
    display: inline-block;
    .p-singleRadio__radio:checked ~ &,
    .p-singleRadio.is-checked & {
      outline: none;
      // prettier-ignore
      box-shadow:
      calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5),
      inset calc(0px) calc(0px) calc(0px) 0 rgba(0, 0, 0, 0.25),
      inset calc(0px) calc(0px) calc(0px) 0 rgba(255, 255, 255, 0.5)
    ;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }

    .p-singleRadio__radio:disabled ~ &,
    .p-singleRadio.is-disabled & {
      cursor: not-allowed;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .p-singleRadio__checkMarkIcon {
    transition: all 0.2s ease-out;
    display: block;
    position: absolute;
    top: 8px;
    left: 8px;

    opacity: 0;
    .p-singleRadio__radio:checked ~ &,
    .p-singleRadio.is-checked & {
      opacity: 1;
    }
  }

  .p-singleRadio__text {
    display: inline-block;
    line-height: 24px;
  }
}
</style>
