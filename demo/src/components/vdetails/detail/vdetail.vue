<template>
  <div class="box">
    <div class="boxImg">
      <img :src=getinfor.bannerImg alt="">
      <div class="text">{{getinfor.sightName}}</div>
      <div class="back" @click="revert">
        <img src="../../img/left.png" alt="">
      </div>
    </div>
    <ul>
      <li v-for="(item , index) in getinfor.categoryList" :key="index">
        <p @click="change(item.children)">{{item.title}}</p>
        <ul v-if="item.children" v-show="mm">
          <li v-for="(con , num) in item.children" :key="num">
            <p @click="chang(con.children)">{{con.title}}</p>
            <ul v-if="con.children" v-show="mn">
              <li v-for="(cont , nu) in con.children" :key="nu">
                <p>{{cont.title}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vdetail',
  data () {
    return {
      mm: false,
      mn: false
    }
  },
  computed: {
    getinfor () {
      return this.$store.state.vdeta
    }
  },
  methods: {
    change (text) {
      if (text) {
        this.mm = !this.mm
      }
    },
    chang (text) {
      if (text) {
        this.mn = !this.mn
      }
    },
    revert () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="less" scoped>
.box{
  width: 100%;
  &>.boxImg{
    position: relative;
    width: 100%;
    &>img{
      width: inherit;
    }
    &>.text{
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0.15rem 0 0.15rem 0.2rem;
      font-size: 0.32rem;
      color: white;
    }
    &>.back{
      position: absolute;
      left: 0.2rem;
      top: 0.2rem;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
      background: rgba(0,0,0,.5);
      display: flex;
      justify-content: center;
      align-items: center;
      &>img{
        width: 0.7rem;
      }
    }
  }
  &>ul{
    &>li{
      &>p{
        padding: 0.2rem 0.4rem;
        font-size: 0.3rem;
        border-bottom: 0.01rem solid #eeeeee;
      }
      &>ul{
        &>li{
          &>p{
            padding: 0.2rem 0.4rem;
            font-size: 0.3rem;
            border-bottom: 0.01rem solid #eeeeee;
          }
          &>ul{
            &>li{
              &>p{
                padding: 0.2rem 0.4rem;
                font-size: 0.3rem;
                border-bottom: 0.01rem solid #eeeeee;
              }
            }
          }
        }
      }
    }
  }
}
</style>
