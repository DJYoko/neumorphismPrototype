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
      <simpleWrapper
        :bg-color="colorSchema[0].bgColor"
        :text-color="colorSchema[0].textColor"
      >
        <h2 class="mb-2">select color mode</h2>
        <singleRadio
          v-for="item in colorSchema"
          :key="item.index"
          :is-inline="true"
          :is-checked="selectedColorName === item.name"
          class="mb-2 mr-2"
          :text="item.name"
          :bg-color="item.bgColor"
          :text-color="item.textColor"
          :item-value="item.name"
          @onChange="onChangeColor"
        />
      </simpleWrapper>

      <div class="p-section">
        <h4 class="mb-3">button</h4>
        <singleButton
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button default"
          :is-focus="buttonFocusedState"
          @toggleState="toggleStateButton"
        />
        <singleButton
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button focused"
          :is-focus="true"
        />
        <singleButton
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button disabled"
          :is-disabled="true"
        />
      </div>
      <div class="p-section">
        <div class="mb-2">
          <h4 class="mb-3">input text</h4>
          <inputText
            class="mr-4 mb-2 w-25"
            text="input default"
            :bg-color="selectedColor.bgColor"
            :text-color="selectedColor.textColor"
          />
          <inputText
            class="mr-4 mb-2 w-25"
            text="input focused"
            :is-focus="true"
            :bg-color="selectedColor.bgColor"
            :text-color="selectedColor.textColor"
          />
          <inputText
            class="mr-4 mb-2 w-25"
            text="input disabled"
            :is-disabled="true"
            :bg-color="selectedColor.bgColor"
            :text-color="selectedColor.textColor"
          />
        </div>
        <div class="mb-2">
          <h4 class="mb-3">input textarea</h4>
          <inputTextArea
            class="mr-4 w-25"
            text="textarea default"
            :bg-color="selectedColor.bgColor"
            :text-color="selectedColor.textColor"
          />
          <inputTextArea
            class="mr-4 w-25"
            text="textarea focus"
            :is-focus="true"
            :bg-color="selectedColor.bgColor"
            :text-color="selectedColor.textColor"
          />
          <inputTextArea
            class="mr-4 w-25"
            text="textarea disabled"
            :is-disabled="true"
            :bg-color="selectedColor.bgColor"
            :text-color="selectedColor.textColor"
          />
        </div>
      </div>

      <div class="p-section">
        <h4 class="mb-3">checkbox</h4>
        <h5>block mode</h5>
        <singleCheckbox
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button default"
        />
        <singleCheckbox
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button checked"
          :is-checked="true"
        />
        <singleCheckbox
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button disabled"
          :is-disabled="true"
        />

        <h5>inline mode</h5>
        <singleCheckbox
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button default"
        />
        <singleCheckbox
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button checked"
          :is-checked="true"
        />
        <singleCheckbox
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button disabled"
          :is-disabled="true"
        />
      </div>

      <div class="p-section">
        <h4 class="mb-3">Radio</h4>
        <h5>block mode</h5>
        <singleRadio
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button default"
        />
        <singleRadio
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button checked"
          :is-checked="true"
        />
        <singleRadio
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button disabled"
          :is-disabled="true"
        />

        <h5>inline mode</h5>
        <singleRadio
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button default"
        />
        <singleRadio
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button checked"
          :is-checked="true"
        />
        <singleRadio
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button disabled"
          :is-disabled="true"
        />
      </div>

      <div class="p-section">
        <h4 class="mb-3">List</h4>
        <list
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
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
              :bg-color="selectedColor.bgColor"
              :text-color="selectedColor.textColor"
              title="sample"
              text="sample text  sample text sample text sample text sample text"
              image-url="./img/B-I8kLPJ5P7.jpg"
            />
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <card
              :bg-color="selectedColor.bgColor"
              :text-color="selectedColor.textColor"
              title="sample with inner link"
              text="sample text sample text sample text sample text sample text"
              image-url="./img/B-I8pXBpMuZ.jpg"
              linkUrl="https://www.instagram.com/p/B-I8pXBpMuZ/"
            />
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <card
              :bg-color="selectedColor.bgColor"
              :text-color="selectedColor.textColor"
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
import simpleWrapper from './simpleWrapper/simpleWrapper'

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
    simpleWrapper,
  },
  props: {
    colorSchema: {
      type: Array,
      default: () => {
        return [
          {
            name: 'default',
            bgColor: 'rgb(230,231,238)',
            textColor: 'rgb(33,37,41)',
          },
          {
            name: 'dark',
            bgColor: 'rgba(33,37,41)',
            textColor: 'rgb(230,231,238)',
          },
          {
            name: 'pale',
            bgColor: 'rgb(213,224,238)',
            textColor: 'rgb(0,50,124)',
          },
          {
            name: 'pale - reverse',
            bgColor: 'rgb(0,50,124)',
            textColor: 'rgb(213,224,238)',
          },
          {
            name: 'turquoise',
            bgColor: 'rgb(1,210,212)',
            textColor: 'rgb(0,66,93)',
          },
          {
            name: 'turquoise - reverse',
            bgColor: 'rgb(0,66,93)',
            textColor: 'rgb(1,210,212)',
          },
          {
            name: 'seashell',
            bgColor: 'rgb(255,245,238)',
            textColor: 'rgb(183,28,28)',
          },
          {
            name: 'seashell - reverse',
            bgColor: 'rgb(183,28,28)',
            textColor: 'rgb(255,245,238)',
          },
          {
            name: 'lime',
            bgColor: 'rgb(249,251,231)',
            textColor: 'rgb(130,119,23)',
          },
          {
            name: 'lime - reverse',
            bgColor: 'rgb(130,119,23)',
            textColor: 'rgb(249,251,231)',
          },
        ]
      },
    },
  },
  data: function() {
    return {
      selectedColorName: 'default',
      buttonFocusedState: false,
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
    toggleStateButton() {
      this.buttonFocusedState = !this.buttonFocusedState
    },
    onChangeColor(colorName) {
      console.log(colorName)
      this.selectedColorName = colorName
    },
  },
}
</script>
