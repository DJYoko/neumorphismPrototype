<script>
export default {
  name: 'color',
  props: {
    shadowDepth: {
      type: Number,
      default: 2,
    },
    bgColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    isInline: {
      type: Boolean,
      default: false,
    },
    isChecked: {
      type: Boolean,
      default: false,
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
    whiteShadowColor() {
      // calculate shadow color (enhance)
      // whiter color parts has whiter shadow
      // darker color parts has darker shadow

      const bgColors = this.rgbToArray(this.$props.bgColor)
      const baseWhiteColor = [255, 255, 255]

      const isWhiteSide = bgColors[0] + bgColors[1] + bgColors[0] > 768 / 2

      const average = {
        red: 0,
        green: 0,
        blue: 0,
      }

      // prettier-ignore
      if (isWhiteSide) {
        average.red =   Math.floor((bgColors[0] + baseWhiteColor[0] * 3) / 4)
        average.green = Math.floor((bgColors[1] + baseWhiteColor[1] * 3) / 4)
        average.blue =  Math.floor((bgColors[2] + baseWhiteColor[2] * 3) / 4)
      } else {
        average.red =   Math.floor((bgColors[0] * 3 + baseWhiteColor[0]) / 4)
        average.green = Math.floor((bgColors[1] * 3 + baseWhiteColor[1]) / 4)
        average.blue =  Math.floor((bgColors[2] * 3 + baseWhiteColor[2]) / 4)
      }

      return `rgba(${average.red}, ${average.green}, ${average.blue}, 0.5)`
    },
    shadowStyle() {
      return `
        ${this.$props.shadowDepth * 3}px
        ${this.$props.shadowDepth * 3}px
        ${this.$props.shadowDepth * 4}px
        0
        rgba(0, 0, 0, 0.25),
        ${this.$props.shadowDepth * -2}px
        ${this.$props.shadowDepth * -2}px
        ${this.$props.shadowDepth * 3}px
        0
        ${this.whiteShadowColor},
        inset 0 0 0 0
        rgba(0, 0, 0, 0.25),
        inset 0 0 0 0
        ${this.whiteShadowColor}`
    },
    shadowStyleFocused() {
      return `
        0
        0
        0
        0
        rgba(0, 0, 0, 0.25),
        0
        0
        0
        0
        ${this.whiteShadowColor},
        inset
        ${this.$props.shadowDepth * 3}px
        ${this.$props.shadowDepth * 3}px
        ${this.$props.shadowDepth * 4}px
        0
        rgba(0, 0, 0, 0.25),
        inset
        ${this.$props.shadowDepth * -2}px
        ${this.$props.shadowDepth * -2}px
        ${this.$props.shadowDepth * 3}px
        0
        ${this.whiteShadowColor}
      `
    },
    shadowStyleChecked() {
      return `
        0
        0
        0
        0
        rgba(0, 0, 0, 0.25),
        0
        0
        0
        0
        rgba(255, 255, 255, 0.5),
        inset
        ${this.$props.shadowDepth * 3}px
        ${this.$props.shadowDepth * 3}px
        ${this.$props.shadowDepth * 4}px
        0
        rgba(0, 0, 0, 0.25),
        inset
        ${this.$props.shadowDepth * -2}px
        ${this.$props.shadowDepth * -2}px
        ${this.$props.shadowDepth * 3}px
        0
        rgba(255, 255, 255, 0.5)
      `
    },
    colorStyles() {
      const styles = {
        backgroundColor: this.$props.bgColor,
        color: this.$props.textColor,
      }

      if (this.isDisabled) {
        styles.boxShadow = 'none'
      } else if (this.isFocus) {
        styles.boxShadow = this.shadowStyleFocused
      } else if (this.isChecked) {
        styles.boxShadow = this.shadowStyleFocused
      } else {
        styles.boxShadow = this.shadowStyle
      }

      return styles
    },
    styleClasses() {
      const classList = []

      if (this.$props.isFocus) {
        classList.push('is-focus')
      }
      if (this.$props.isDisabled) {
        classList.push('is-disabled')
      }
      if (this.$props.isInline) {
        classList.push('is-inline')
      }
      if (this.$props.isChecked) {
        classList.push('is-checked')
      }
      return classList.join(' ')
    },
  },
  methods: {
    rgbToArray(rgbText) {
      return rgbText
        .replace(/[rgb\(|)]/g, '')
        .split(',')
        .map((item) => {
          return parseInt(item)
        })
    },
  },
}
</script>
