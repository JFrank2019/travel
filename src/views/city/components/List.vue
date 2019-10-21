<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div :key="item.id" class="button-wrapper" v-for="item in hotCities">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div :key="key" :ref="key" class="area" v-for="(item, key) in cities">
        <div class="title border-topbottom">{{ key }}</div>
        <div :key="innerItem.id" class="item-list" v-for="innerItem in item">
          <div class="item border-bottom">{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {},
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.2rem;
      color: #666;
    }
    .button-list {
      padding: 0.1rem;
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      .button-wrapper {
        float: left;
        width: 33.33%;
        .button {
          margin: 0.1rem;
          padding: 0.1rem 0;
          text-align: center;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }
    }
    .item-list {
      .item {
        line-height: 0.76rem;
        padding-left: 0.2rem;
      }
    }
  }
}
</style>
