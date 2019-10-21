<template>
  <div class="header">
    城市选择
    <router-link class="iconfont header-back" tag="div" to="/">&#xe682;</router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variable.scss';
.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  background: $bgColor;
  color: #fff;
  font-size: 0.32rem;
  .header-back {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>
