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
    colorStyles() {
      return {
        boxShadow: this.shadowStyle,
        backgroundColor: this.$props.bgColor,
        color: this.$props.textColor,
      }
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
