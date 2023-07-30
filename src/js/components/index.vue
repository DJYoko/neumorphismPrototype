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
      <simpleWrapper :bg-color="colorScheme[0].bgColor" :text-color="colorScheme[0].textColor">
        <h2 class="mb-2">select color</h2>
        <singleRadio
          v-for="item in colorScheme"
          :key="item.index"
          :is-inline="true"
          :is-checked="selectedColorName === item.name"
          class="mb-2 mr-2"
          :bg-color="item.bgColor"
          :text-color="item.textColor"
          :item-value="item.name"
          @onChange="onChangeColor"
        />
      </simpleWrapper>

      <div class="p-section">
        <h4 class="mb-3">button</h4>
        <singleButton class="mr-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" text="button default" :is-focus="buttonFocusedState" @toggleState="toggleStateButton" />
        <singleButton class="mr-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" text="button focused" :is-focus="true" />
        <singleButton class="mr-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" text="button disabled" :is-disabled="true" />
      </div>
      <div class="p-section">
        <div class="mb-2">
          <h4 class="mb-3">input text</h4>
          <inputText class="mr-4 mb-2 w-25" text="input default" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" />
          <inputText class="mr-4 mb-2 w-25" text="input focused" :is-focus="true" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" />
          <inputText class="mr-4 mb-2 w-25" text="input disabled" :is-disabled="true" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" />
        </div>
        <div class="mb-2">
          <h4 class="mb-3">input textarea</h4>
          <inputTextArea class="mr-4 w-25" text="textarea default" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" />
          <inputTextArea class="mr-4 w-25" text="textarea focus" :is-focus="true" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" />
          <inputTextArea class="mr-4 w-25" text="textarea disabled" :is-disabled="true" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" />
        </div>
      </div>

      <div class="p-section">
        <h4 class="mb-3">checkbox</h4>
        <h5>block mode</h5>
        <singleCheckbox class="mb-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" text="button default" :is-checked="checkboxState" @onChange="onChangeCheckbox" />
        <singleCheckbox class="mb-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" text="button checked" :is-checked="true" />
        <singleCheckbox class="mb-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" text="button disabled" :is-disabled="true" />

        <h5>inline mode</h5>
        <singleCheckbox
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          @onChange="onChangeCheckbox"
          text="checkbox default"
          :is-checked="checkboxState"
        />
        <singleCheckbox class="mr-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" :is-inline="true" text="checkbox checked" :is-checked="true" />
        <singleCheckbox class="mr-4" :bg-color="selectedColor.bgColor" :text-color="selectedColor.textColor" :is-inline="true" text="checkbox disabled" :is-disabled="true" />
      </div>

      <div class="p-section">
        <h4 class="mb-3">Radio</h4>
        <h5>block mode</h5>
        <singleRadio
          item-value="1"
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button default"
          :is-checked="radioCheckedItemValue === '1'"
          @onChange="onChangeRadio"
        />
        <singleRadio
          item-value="2"
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button checked"
          :is-checked="radioCheckedItemValue === '2'"
          @onChange="onChangeRadio"
        />
        <singleRadio
          item-value="3"
          class="mb-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          text="button disabled"
          :is-disabled="true"
          :is-checked="radioCheckedItemValue === '3'"
          @onChange="onChangeRadio"
        />

        <h5>inline mode</h5>
        <singleRadio
          item-value="4"
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button default"
          :is-checked="radioCheckedItemValue === '4'"
          @onChange="onChangeRadio"
        />
        <singleRadio
          item-value="5"
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button checked"
          :is-checked="radioCheckedItemValue === '5'"
          @onChange="onChangeRadio"
        />
        <singleRadio
          item-value="6"
          class="mr-4"
          :bg-color="selectedColor.bgColor"
          :text-color="selectedColor.textColor"
          :is-inline="true"
          text="button disabled"
          :is-disabled="true"
          :is-checked="radioCheckedItemValue === '6'"
          @onChange="onChangeRadio"
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
import greeting from './greeting';
import singleButton from './buttons/singleButton';
import singleCheckbox from './checkbox/singleCheckbox';
import singleRadio from './radio/singleRadio';
import inputText from './inputs/inputText';
import inputTextArea from './inputs/inputTextArea';
import list from './list/list';
import card from './card/card';
import simpleWrapper from './simpleWrapper/simpleWrapper';
import constants from '../utility/constants';

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
  data: function () {
    return {
      radioCheckedItemValue: '2',
      checkboxState: false,
      selectedColorName: 'default',
      buttonFocusedState: false,
    };
  },
  computed: {
    colorScheme() {
      return constants.COLOR_SCHEME;
    },
    selectedColor() {
      return this.colorScheme.filter((item) => {
        return this.selectedColorName === item.name;
      })[0];
    },
  },
  methods: {
    onChangeRadio(payload) {
      this.radioCheckedItemValue = payload;
    },
    onChangeCheckbox(payload) {
      this.checkboxState = payload;
    },
    toggleStateButton() {
      this.buttonFocusedState = !this.buttonFocusedState;
    },
    onChangeColor(colorName) {
      this.selectedColorName = colorName;
    },
  },
};
</script>
