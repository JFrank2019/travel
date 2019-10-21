<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li :key="item.id" class="item border-bottom" v-for="item in recommendList">
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
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: 'title',
          desc: 'desc'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: 'title',
          desc: 'desc'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: 'title',
          desc: 'desc'
        },
        {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: 'title',
          desc: 'desc'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins.scss';
.title {
  margin-top: 0.1rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item {
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
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
