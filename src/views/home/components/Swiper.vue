<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide :key="item.id" v-for="item in swiperList">
        <img :src="item.imgUrl" alt class="swiper-img" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff !important;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>
