<template>
  <ul class="list">
    <li :key="key" class="item" v-for="(item, key) in cities">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variable.scss';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
