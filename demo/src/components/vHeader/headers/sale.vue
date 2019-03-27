<template>
  <div class="box">
    <div class="tab">
      热销推荐
    </div>
    <div class="context" v-if = "show">
      <div class="spot" v-for="(item , index) in gettext" :key ="index">
        <div class="picture">
          <img :src=item.imgUrl alt="">
        </div>
        <div class="text">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
          <div :data-id="item.id" @click="godeta(item.id)">查看详情</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sale',
  computed: {
    gettext () {
      return this.$store.state.recommendList
    },
    show () {
      return this.gettext.length
    }
  },
  methods: {
    godeta (val) {
      this.$router.push({name:'vdetails',query:{id:val} })
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
    &>.spot{
      width: 100%;
      height: 1.89rem;
      display: flex;
      border-bottom: 0.01rem solid #eeeeee;
      &>.picture{
        height: 1.69rem;
        margin: 0.1rem 0.2rem 0.1rem 0.1rem;
        &>img{
          height: inherit;
        }
      }
      &>.text{
        padding-top: 0.2rem;
        &>h3{
          font-size: 0.28rem;
        }
        &>p{
          margin-top: 0.24rem;
          font-size: 0.24rem;
          color: #eeeeee;
        }
        &>div{
          width: 1.5rem;
          height: 0.4rem;
          line-height: 0.4rem;
          margin-top: 0.24rem;
          text-align: center;
          background: #ff9300;
          font-size: 0.22rem;
          color: white;
          border-radius: 0.1rem;
        }
      }
    }
  }
}
</style>
