<template>
  <div>
    <div @click="handleBanerClick" class="banner">
      <img :src="this.bannerImg" alt class="banner-img" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe796;</span>
          {{ this.galleryImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :imgs="galleryImgs"
        @close="handleGalleryClose"
        v-show="showGallery"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '@/components/gallery/Gallery'
import FadeAnimation from '@/components/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data() {
    return {
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
      margin: 0 0.2rem;
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
