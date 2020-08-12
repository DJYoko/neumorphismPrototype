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
        <div class="p-singleCheckbox__checkMark">
          <svg
            class="p-singleCheckbox__checkMarkIcon bi bi-check"
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
            />
          </svg>
        </div>
        <div class="p-singleCheckbox__text">
          {{ text }}
        </div>
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

.p-singleCheckbox {
  &.is-inline {
    display: inline-block;
  }
}

.p-singleCheckbox__label {
  cursor: pointer;
  display: block;
  width: 100%;
  margin-bottom: 0;
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
  padding: 24px 32px;
  transition: all 0.2s ease-out;
  .p-singleCheckbox__checkbox:checked ~ &,
  .p-singleCheckbox.is-checked & {
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

  .p-singleCheckbox__checkMark {
    width: 24px;
    height: 24px;
    vertical-align: bottom;
    margin-right: 8px;
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
    border-radius: 8px;
    transition: all 0.2s ease-out;
    display: inline-block;
    .p-singleCheckbox__checkbox:checked ~ &,
    .p-singleCheckbox.is-checked & {
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

    .p-singleCheckbox__checkbox:disabled ~ &,
    .p-singleCheckbox.is-disabled & {
      cursor: not-allowed;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .p-singleCheckbox__checkMarkIcon {
    transition: all 0.2s ease-out;
    display: block;
    opacity: 0;
    .p-singleCheckbox__checkbox:checked ~ &,
    .p-singleCheckbox.is-checked & {
      opacity: 1;
    }
  }

  .p-singleCheckbox__text {
    display: inline-block;
    line-height: 24px;
  }
}
</style>
