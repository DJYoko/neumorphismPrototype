<template>
  <div class="p-inputsIndex">
    <h3 class="display-4">input text</h3>
    <inputText class="mr-4" text="input default" />
    <inputText class="mr-4" text="input disabled" :is-disabled="true" />
  </div>
</template>

<script>
import inputText from './inputText'
export default {
  name: 'inputsIndex',
  components: { inputText },
  props: {},
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
