<template>
  <ul class="p-list" v-if="items.length > 0">
    <listItem
      v-for="item in items"
      :key="item.index"
      :text="item.text"
      :url="item.url"
      :isExternalLink="item.isExternalLink"
    />
  </ul>
</template>

<script>
import listItem from './listItem'

export default {
  name: 'list',
  components: {
    listItem,
  },
  props: {
    items: {
      type: Array,
      default: () => {
        ;[]
      },
    },
  },
}
</script>

<style lang="scss">
$shadowDepth: 4px;
.p-list {
  appearance: none;
  border: none;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #e6e7ee;
  // prettier-ignore

  border-radius: 20px;
  padding: 0;
  margin: 0;
}
</style>
