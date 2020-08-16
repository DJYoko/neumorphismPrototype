<script>
export default {
  name: 'color',
  props: {
    bgColor: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
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
    colorStyles() {
      return {
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

      return classList.join(' ')
    },
  },
  methods: {},
}
</script>
