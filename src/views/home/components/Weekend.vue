<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li :key="item.id" class="item border-bottom" v-for="item in weekendList">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins.scss';
.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item {
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img {
      width: 100%;
    }
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      @include ellipsis();
    }
    .item-desc {
      left: 0.4rem;
      color: #ccc;
      @include ellipsis();
    }
  }
}
</style>
