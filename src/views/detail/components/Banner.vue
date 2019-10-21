<template>
  <div>
    <div @click="handleBanerClick" class="banner">
      <img
        alt
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_600x330_fbe0867a.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">香山公园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe796;</span>39
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      @close="handleGalleryClose"
      v-show="showGallery"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@/components/gallery/Gallery'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data() {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_r_800x800_44f2e684.jpg',
        'http://img1.qunarzz.com/sight/p0/1908/6c/6c4f551349dd8896a3.img.jpg_r_800x800_9593721e.jpg'
      ],
      showGallery: false
    }
  },
  methods: {
    handleBanerClick() {
      this.showGallery = true
    },
    handleGalleryClose() {
      this.showGallery = false
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      font-size: 0.32rem;
      padding: 0 0.2rem;
      flex: 1;
    }
    .banner-number {
      padding: 0 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
