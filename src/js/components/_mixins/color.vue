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
        rgba(255, 255, 255, 0.5),
        inset 0 0 0 0
        rgba(0, 0, 0, 0.25),
        inset 0 0 0 0
        rgba(255, 255, 255, 0.5)`
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
  methods: {},
}
</script>
