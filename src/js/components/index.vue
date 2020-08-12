<template>
  <div
    class="p-index"
    :style="{
      backgroundColor: selectedColor.bgColor,
      color: selectedColor.textColor,
    }"
  >
    <div class="container">
      <greeting />
      <div>
        <h2>select color mode</h2>
        <singleRadio
          v-for="item in colorSchema"
          :key="item.index"
          :is-inline="true"
          :is-checked="selectedColorName === item.name"
          class="mb-4"
          :text="item.name"
          :bg-color="item.bgColor"
          :text-color="item.textColor"
          :item-value="item.name"
          @onChange="onChangeColor"
        />
      </div>

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
        <singleCheckbox
          class="mb-4"
          text="button disabled"
          :is-disabled="true"
        />

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

      <div class="p-section">
        <h4 class="mb-3">Radio</h4>
        <h5>block mode</h5>
        <singleRadio class="mb-4" text="button default" />
        <singleRadio class="mb-4" text="button checked" :is-checked="true" />
        <singleRadio class="mb-4" text="button disabled" :is-disabled="true" />

        <h5>inline mode</h5>
        <singleRadio class="mr-4" :is-inline="true" text="button default" />
        <singleRadio
          class="mr-4"
          :is-inline="true"
          text="button checked"
          :is-checked="true"
        />
        <singleRadio
          class="mr-4"
          :is-inline="true"
          text="button disabled"
          :is-disabled="true"
        />
      </div>

      <div class="p-section">
        <h4 class="mb-3">List</h4>
        <list
          :items="[
            {
              text: 'item 01 - no link',
            },
            {
              text: 'item 02 - has inner link',
              url: '#',
            },
            {
              text: 'item 03 - has external link',
              url: 'https://github.com/DJYoko',
              isExternalLink: true,
            },
          ]"
        />
      </div>

      <div class="p-section">
        <h4 class="mb-3">Card</h4>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <card
              title="sample"
              text="sample text  sample text sample text sample text sample text"
              image-url="./img/B-I8kLPJ5P7.jpg"
            />
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <card
              title="sample with inner link"
              text="sample text sample text sample text sample text sample text"
              image-url="./img/B-I8pXBpMuZ.jpg"
              linkUrl="https://www.instagram.com/p/B-I8pXBpMuZ/"
            />
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <card
              title="sample with external link"
              text="sample text sample text sample text sample text sample text "
              image-url="./img/B-I9KRBJdDi.jpg"
              linkUrl="https://www.instagram.com/p/B-I9KRBJdDi/"
              :is-external-link="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import greeting from './greeting'
import singleButton from './buttons/singleButton'
import singleCheckbox from './checkbox/singleCheckbox'
import singleRadio from './radio/singleRadio'
import inputText from './inputs/inputText'
import inputTextArea from './inputs/inputTextArea'
import list from './list/list'
import card from './card/card'

export default {
  name: 'index',
  components: {
    greeting,
    singleButton,
    singleCheckbox,
    singleRadio,
    inputText,
    inputTextArea,
    list,
    card,
  },
  props: {
    colorSchema: {
      type: Array,
      default: () => {
        return [
          {
            name: 'default',
            bgColor: '#e6e7ee',
            textColor: '#212529',
          },
          {
            name: 'dark',
            bgColor: '#212529',
            textColor: '#e6e7ee',
          },
        ]
      },
    },
  },
  data: function() {
    return {
      selectedColorName: 'default',
    }
  },
  computed: {
    selectedColor() {
      return this.$props.colorSchema.filter((item) => {
        return this.selectedColorName === item.name
      })[0]
    },
  },
  methods: {
    onChangeColor(colorName) {
      console.log(colorName)
      this.selectedColorName = colorName
    },
  },
}
</script>
