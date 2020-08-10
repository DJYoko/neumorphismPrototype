<template>
  <div class="p-index">
    <div class="p-buttonsIndex mb-4">
      <h4>button</h4>
      <singleButton class="mr-4" text="button default" />
      <singleButton class="mr-4" text="button focused" :is-focus="true" />
      <singleButton class="mr-4" text="button disabled" :is-disabled="true" />
    </div>
    <div class="p-inputsIndex mb-4">
      <div class="mb-2">
        <h4>input text</h4>
        <inputText class="mr-4 mb-2 w-25" text="input default" />
        <inputText
          class="mr-4 mb-2 w-25"
          text="input focused"
          :is-focus="true"
        />
        <inputText
          class="mr-4 mb-2 w-25"
          text="input disabled"
          :is-disabled="true"
        />
      </div>
      <div class="mb-2">
        <h4>input textarea</h4>
        <inputTextArea class="mr-4 w-25" text="textarea default" />
        <inputTextArea
          class="mr-4 w-25"
          text="textarea focus"
          :is-focus="true"
        />
        <inputTextArea
          class="mr-4 w-25"
          text="textarea disabled"
          :is-disabled="true"
        />
      </div>
    </div>

    <div class="mb-4">
      <h4>button</h4>
      <singleCheckbox class="mr-4" text="button default" />
      <singleCheckbox class="mr-4" text="button checked" :is-checked="true" />
      <singleCheckbox class="mr-4" text="button disabled" :is-disabled="true" />
    </div>
    <!-- TODO checkbox => add inline mode / block mode-->

    <!-- TODO radio-->
    <!-- TODO select-->
    <!-- TODO list-->
    <!-- TODO card-->
  </div>
</template>

<script>
import singleButton from './buttons/singleButton'
import singleCheckbox from './checkbox/singleCheckbox'
import inputText from './inputs/inputText'
import inputTextArea from './inputs/inputTextArea'

export default {
  name: 'index',
  components: { singleButton, singleCheckbox, inputText, inputTextArea },
  props: {},
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
