<template>
  <div class="p-index">
    <div class="p-section">
      <h4 class="mb-3">button</h4>
      <singleButton class="mr-4" text="button default" />
      <singleButton class="mr-4" text="button focused" :is-focus="true" />
      <singleButton class="mr-4" text="button disabled" :is-disabled="true" />
    </div>
    <div class="p-section">
      <div class="mb-2">
        <h4 class="mb-3">input text</h4>
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
        <h4 class="mb-3">input textarea</h4>
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

    <div class="p-section">
      <h4 class="mb-3">checkbox</h4>
      <h5>block mode</h5>
      <singleCheckbox class="mb-4" text="button default" />
      <singleCheckbox class="mb-4" text="button checked" :is-checked="true" />
      <singleCheckbox class="mb-4" text="button disabled" :is-disabled="true" />

      <h5>inline mode</h5>
      <singleCheckbox class="mr-4" :is-inline="true" text="button default" />
      <singleCheckbox
        class="mr-4"
        :is-inline="true"
        text="button checked"
        :is-checked="true"
      />
      <singleCheckbox
        class="mr-4"
        :is-inline="true"
        text="button disabled"
        :is-disabled="true"
      />
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
