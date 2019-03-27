<template>
  <div class="box" ref="wrapper">
    <div class="cont">
      <div class="current">
        <div class="tab">
          当前城市
        </div>
        <div class="content">
          <div>{{gtcity}}</div>
        </div>
      </div>
      <div class="major">
        <div class="tab">
          热门城市
        </div>
        <div class="content">
          <div v-for="(item , index) in getImg" :key ="index" :data-id = item.id @click="changcity(item.name)">{{item.name}}</div>
        </div>
      </div>
      <div class="detailed" v-for="(item , index) in getcity">
        <div class="tab" :id="index">
          {{index}}
        </div>
        <div class="content" >
          <ul>
            <li :data-id="city.id" v-for="(city , num) in item" :key="num" @click="changcity(city.name)">{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(item , index) in getcity"><a :href="'#'+index">{{index}}</a></li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'allcity',
  data () {
    return {
    }
  },
  computed: {
    getImg () {
      return this.$store.state.hotCities
    },
    show () {
      return this.getImg.length
    },
    getcity () {
      return this.$store.state.cities
    },
    gtcity () {
      return this.$store.state.gcity
    }
  },
  mounted () {
    this.$nextTick(() => {
      //  $refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          //  开启点击事件 默认为false
          click: true
        })
        //  console.log(this.scroll)
      } else if (!this.$refs.wrapper) {
        return
       }
      else {
        this.scroll.refresh()
      }
    })
  },
  methods: {
    changcity (city) {
      this.$store.dispatch('chcity' , city)
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  overflow: hidden;
  width: 100%;
  position: absolute;
  top:1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  &>.cont{
    &>.current{
      width: inherit;
      &>.tab{
        box-sizing: border-box;
        height: 0.52rem;
        background: #eeeeee;
        font-size: 0.24rem;
        padding: 0.15rem 0 0 0.2rem;
      }
      &>.content{
        box-sizing: border-box;
        padding: 0.2rem 0 0.2rem 0.2rem;
        background: white;
        &>div{
          width: 2rem;
          text-align: center;
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.2rem;
          border: 0.01rem solid #cccccc;
          border-radius: 0.05rem;
          color: #333333;
        }
      }
    }
    &>.major{
      width: 100%;
      &>.tab{
        box-sizing: border-box;
        height: 0.52rem;
        background: #eeeeee;
        font-size: 0.24rem;
        padding: 0.15rem 0 0 0.2rem;
      }
      &>.content{
        height: 1.6rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0.2rem;
        align-content: space-between;
        background: white;
        &>div{
          width: 2rem;
          text-align: center;
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.2rem;
          border: 0.01rem solid #cccccc;
          border-radius: 0.05rem;
          color: #333333;
        }
      }
    }
    &>.detailed{
      width: 100%;
      &>.tab{
        box-sizing: border-box;
        height: 0.52rem;
        background: #eeeeee;
        font-size: 0.24rem;
        padding: 0.15rem 0 0 0.2rem;
      }
      &>.content{
        font-size: 0.24rem;
        &>ul{
          &>li{
            padding: 0.26rem 0 0.26rem 0.2rem;
            border-bottom: 0.01rem solid #cccccc;
          }
        }
      }
    }
  }
  &>ul{
    position: fixed;
    z-index: 99;
    top: 3.2rem;
    right: 0.4rem;
    &>li{
      padding: 0.05rem;
      font-size: 0.3rem;
      &>a{
        color: #07BED5;
      }
    }
  }
}
</style>
