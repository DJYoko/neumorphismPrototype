<template>
  <button class="p-singleButton">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'singleButton',
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss">
$baseSize: 2px;
.p-singleButton {
  appearance: none;
  border: none;
  align-items: center;
  background-color: #d3d3d3;
  box-shadow: calc(#{$baseSize} * 3) calc(#{$baseSize} * 3)
      calc(#{$baseSize} * 4) 0 rgba(0, 0, 0, 0.25),
    calc(#{$baseSize} * -2) calc(#{$baseSize} * -2) calc(#{$baseSize} * 3) 0
      rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  justify-content: center;
  padding: 20px;
  &:focus {
    outline: none;
  }
}
</style>
