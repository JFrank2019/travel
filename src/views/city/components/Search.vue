<template>
  <div class="search">
    <input class="search-input" placeholder="输入城市名或拼音" type="text" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variable.scss';
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input {
    width: 100%;
    height: 0.62rem;
    box-sizing: border-box;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
</style>
