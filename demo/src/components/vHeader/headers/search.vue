<template>
    <div class="search">
      <p>
        <img src="../../img/left.png" alt="">
      </p>
      <div class="search">
        <input type="button" class="btn">
        <input type="text" placeholder="输入城市/景点/游玩主题" class="text">
      </div>
      <div class="city" @click="gocity">
        {{gtcity}}
        <img src="../../img/sanjiaoxing.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'search',
  created () {
    this.axios.get('city.json').then(function (data) {
    })
  },
  methods: {
    gocity () {
      this.$router.push({name:'vcity'})
    }
  },
  computed: {
    gtcity () {
      console.log(this.$store.state.gcity);
      return this.$store.state.gcity
    }
  }
}
</script>
<style lang="less" scoped>
.search{
  width: 7.5rem;
  height: 0.86rem;
  background: #00BCD4;
  display: flex;
  align-items: center;
  &>.search{
    margin-left: 0.1rem;
    height: 0.64rem;
    width: 5.42rem;
    box-sizing: border-box;
    background: white;
    border: 0.01rem solid #ccc;
    padding-left: 0.15rem;
    border-radius: 0.1rem;
    &>.text{
      overflow: hidden;
      outline: none;
      color: #cccccc;
      font-size: 0.2rem;
      float: right;
    }
    &>.btn{
      cursor: pointer;
      outline: none;
      float: left;
      width: 0.4rem;
      height: 0.4rem;
      background: url("../../img/suosuo (2).png") no-repeat center;
      background-size: 100% 100%;
    }
  }
  &>p{
    margin-left: 0.1rem;
    cursor: pointer;
    height: 0.86rem;
    display: flex;
    align-items: center;
    &>img{
      height: 0.6rem;
    }
  }
  &>.city{
    cursor: pointer;
    height: 0.86rem;
    margin-left: 0.21rem;
    font-size: 0.22rem;
    color: white;
    line-height: 0.86rem;
    margin-right: 0.21rem;
    &>img{
      vertical-align: middle;
      width: 0.3rem;
      height: 0.3rem;
      transform: translateY(-0.05rem);
    }
  }
}
</style>
