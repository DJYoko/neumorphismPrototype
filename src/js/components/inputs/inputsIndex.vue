<template>
  <div class="p-inputsIndex">
    <div class="mb-2">
      <h4>input text</h4>
      <inputText class="mr-4 mb-2 w-25" text="input default" />
      <inputText class="mr-4 mb-2 w-25" text="input focused" :is-focus="true" />
      <inputText
        class="mr-4 mb-2 w-25"
        text="input disabled"
        :is-disabled="true"
      />
    </div>
    <div class="mb-2">
      <h4>input textarea</h4>
      <inputTextArea class="mr-4 w-25" text="textarea default" />
      <inputTextArea class="mr-4 w-25" text="textarea focus" :is-focus="true" />
      <inputTextArea
        class="mr-4 w-25"
        text="textarea disabled"
        :is-disabled="true"
      />
    </div>
  </div>
</template>

<script>
import inputText from './inputText'
import inputTextArea from './inputTextArea'
export default {
  name: 'inputsIndex',
  components: { inputText, inputTextArea },
  props: {},
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
