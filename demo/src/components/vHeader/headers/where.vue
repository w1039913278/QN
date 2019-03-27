<template>
  <div class="box">
    <div class="tab">
      周末去哪儿
    </div>
    <div class="context" v-if="show">
      <div class="stop" v-for="(item , index) in gettext" :key="index">
        <div class="picture" :data-id="item.id">
          <img :src=item.imgUrl alt="">
        </div>
        <div class="text">
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'where',
  computed: {
    gettext () {
      return this.$store.state.weekendList
    },
    show () {
      return this.gettext.length
    }
  }
}
</script>

<style lang="less" scoped>
  .box{
    width: 100%;
    &>.tab{
      font-size: 0.2rem;
      width: inherit;
      height: 0.8rem;
      background: #eeeeee;
      padding: 0.27rem 0 0.27rem 0.2rem;
      box-sizing: border-box;
    }
    &>.context{
      width: 100%;
      &>.stop{
        width: 100%;
        &>.picture{
          width: 100%;
          &>img{
            display: block;
            width: 100%;
          }
        }
        &>.text{
          box-sizing: border-box;
          height: 1.13rem;
          padding-top: 0.22rem;
          padding-left: 0.1rem;
          &>h2{
            font-size: 0.26rem;
          }
          &>p{
            margin-top: 0.21rem;
            font-size: 0.24rem;
            color: #eeeeee;
          }
        }
      }
    }
  }
</style>
