<template>
  <div class="p-singleRadio" :class="styleClasses">
    <label class="p-singleRadio__label">
      <input
        type="radio"
        class="p-singleRadio__radio"
        :checked="form.isChecked"
        :disabled="isDisabled"
        @change="onChange"
      />
      <div class="p-singleRadio__display" :style="colorStyles">
        <div class="p-singleRadio__checkMark">
          <svg
            width="8px"
            height="8px"
            viewBox="0 0 16 16"
            class="bi bi-circle-fill p-singleRadio__checkMarkIcon"
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
import color from '../_mixins/color'
export default {
  name: 'singleRadio',
  mixins: [color],
  props: {
    text: {
      type: String,
      required: true,
    },
    itemValue: {
      type: String,
      default: '',
    },
  },
  watch: {
    isChecked: {
      immediate: true,
      handler() {
        this.form.isChecked = this.$props.isChecked
      },
    },
  },
  data: function() {
    return {
      form: {
        isChecked: false,
      },
    }
  },
  methods: {
    onChange() {
      this.$emit('onChange', this.$props.itemValue)
    },
  },
}
</script>

<style lang="scss">
$shadowDepth: 2px;
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
  border-radius: 20px;
  justify-content: center;
  padding: 24px 32px;
  transition: all 0.2s ease-out;
  .p-singleRadio__radio:checked ~ &,
  .p-singleRadio.is-checked & {
    outline: none;
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
