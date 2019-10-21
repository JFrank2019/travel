<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      lastPlaceId: '',
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo() {
      this.$http
        .get('/mock/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => this.getDetailInfoSucc(res))
    },
    getDetailInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted() {
    this.lastPlaceId = this.$route.params.id
    this.getDetailInfo()
  },
  activated() {
    if (this.lastPlaceId !== this.$route.params.id) {
      this.lastPlaceId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>
