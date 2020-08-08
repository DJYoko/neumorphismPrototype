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
.p-singleButton {
  appearance: none;
  border: none;
  align-items: center;
  background-color: #dddddd;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  height: 200px;
  justify-content: center;
  margin-right: 4rem;
  width: 200px;
}
</style>
