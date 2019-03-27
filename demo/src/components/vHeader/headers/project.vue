<template>
  <swiper class="swiper" :options="swiperOption"  ref="mySwiper" v-if = "show">
    <swiper-slide v-for = "(item , index) in getImg" :key="index" >
      <div class="box" >
        <div v-for = "(con , num) in item" :data-id="con.id" :key="num">
          <img :src = con.imgUrl alt="">
          <p>{{con.desc}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'project',
  data () {
    return {
      swiperOption: {
        // spaceBetween: 30, //板块间距
        // 无缝轮播
        loop: true,
        centeredSlides: true,
        // 自动轮播
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false
        // },
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
      let arrNew = []
      let iconList = this.$store.state.iconList
      for (let i = 0; i < (Math.ceil(iconList.length / 8)); i++) {
        let arr = []
        for (let k = i * 8; k < 8 * (i + 1); k++) {
          if (iconList[k]) {
            arr.push(iconList[k])
          }
        }
        arrNew.push(arr)
      }
      return arrNew
    },
    show () {
      return this.getImg.length
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  box-sizing: border-box;
  width: 100%;
  height: 4.06rem;
  display: flex;
  padding: 0.2rem 0.1rem 0 0.1rem;
  justify-content: space-between;
  align-content: space-around;
  flex-wrap: wrap;
  &>div{
    width: 1.8rem;
    text-align: center;
    &>img{
      width: 1.2rem;
    }
    &>p{
      margin-top: 0.12rem;
      font-size: 0.22rem;
    }
  }
}
</style>
