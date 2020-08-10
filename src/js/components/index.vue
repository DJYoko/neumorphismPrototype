<template>
  <div class="p-index">
    <buttonsIndex class="mb-5" />
    <inputsIndex class="mb-5" />
  </div>
</template>

<script>
import buttonsIndex from './buttons/buttonsIndex'
import inputsIndex from './inputs/inputsIndex'
export default {
  name: 'index',
  components: { buttonsIndex, inputsIndex },
  props: {},
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
