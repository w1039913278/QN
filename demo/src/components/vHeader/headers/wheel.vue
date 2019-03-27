<template>
  <swiper class="swiper" :options="swiperOption"  ref="mySwiper" v-if="show">
    <swiper-slide v-for="(item , index) in getImg" :key=index  :data-id="item.id">
      <img :src=item.imgUrl alt="" style="width: 100%; height: 2.34rem" >
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'wheel',
  data () {
    return {
      swiperOption: {
        // spaceBetween: 30, //板块间距
        // 无缝轮播
        loop: true,
        centeredSlides: true,
        // 自动轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    getImg () {
      return this.$store.state.swiperList
    },
    show () {
      return this.getImg.length
    }
  }
}
</script>

<style lang="less" scoped>
  .swiper {
    width: 100%;
    height: 2.34rem;
    font-size: 0.11rem;
  }
</style>
