<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide :key="index" v-for="(page, index) in pages">
        <div :key="item.id" class="icon" v-for="item in page">
          <div class="icon-img">
            <img :src="item.imgUrl" alt class="icon-img-content" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variable.scss';
@import '~assets/styles/mixins.scss';
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  margin-top: 0.1rem;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      @include ellipsis;
    }
  }
}
</style>
