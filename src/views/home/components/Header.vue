<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe682;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe615;</span>
      输入城市/景点/游玩/主题
    </div>
    <router-link class="header-right" tag="div" to="/city">
      {{ this.city }}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variable.scss';
.header {
  display: flex;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .header-input {
    flex: 1;
    height: 0.62rem;
    line-height: 0.62rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    padding-left: 0.2rem;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    .arrow-icon {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
