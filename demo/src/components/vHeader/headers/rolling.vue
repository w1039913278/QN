<template>
<div class="box">
  <div class="top">
    本周热门榜单
  </div>
  <div class="content" ref="tab">
    <div class="cont" ref="tabWrapper">
      <div v-for="(item , index) in hostList" ref="tabitem">
        <p><img :src=item.imgUrl alt=""></p>
        <p class="loacl">{{item.name}}</p>
        <p class="pric">￥{{item.price}}起</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'rolling',
  created () {
    this.$nextTick (() => {
      this.InitTabScroll ()
    })
  },
  computed: {
    hostList () {
      return this.$store.state.hotList
    }
  },
  methods: {
    InitTabScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.tab, {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      } else {
        this.scroll.refresh ()
      }
    }
  },
  updated () {
    let width = 0
    for (let i = 0; i < this.hostList.length; i++) {
      //  getBoundingClientRect() 返回元素的大小及其相对于视口的位置
      width += this.$refs.tabitem[0].getBoundingClientRect().width
    }
    this.$refs.tabWrapper.style.width = 100 + width + 'px'
  }
}
</script>
<style lang="less" scoped>
.box{
  width: 100%;
  &>.top{
    box-sizing: border-box;
    width: 100%;
    font-size: 0.26rem;
    padding: 0.2rem 0 0.2rem 0.2rem;
  }
  &>.content{
    width: 100%;
    overflow: hidden;
    &>.cont{
      flex-wrap: nowrap;
      display: flex;
      &>div{
        height: 3.2rem;
        font-size: 0.26rem;
        width: 2rem;
        margin-left: 0.2rem;
        &>p{
          text-align: center;
          &>img{
            width: 2rem;
          }
        }
        &>.loacl{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0.2rem 0;
        }
        &>.pric{
          padding-bottom: 0.2rem;
        }
      }
    }
  }
}
</style>
