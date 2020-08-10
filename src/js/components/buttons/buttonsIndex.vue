<template>
  <div class="p-buttonsIndex">
    <h3 class="display-4">button</h3>
    <singleButton class="mr-4" text="button default" />
    <singleButton class="mr-4" text="button focused" :is-focus="true" />
    <singleButton class="mr-4" text="button disabled" :is-disabled="true" />
  </div>
</template>

<script>
import singleButton from './singleButton'
export default {
  name: 'buttonsIndex',
  components: { singleButton },
  props: {},
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
