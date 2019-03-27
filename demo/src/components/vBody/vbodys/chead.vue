<template>
  <div class="box">
    <h3>城市选择</h3>
    <div>
      <input type="text" placeholder="输入城市名或拼音" @input="change"  v-model="na">
    </div>
    <img src="../../img/left.png" alt="" @click="revert">
  </div>
</template>
<script>
export default {
  name: 'chead',
  data () {
    return{
      na: ''
    }
  },
  props: ['sw'],
  methods: {
    revert () {
      this.$router.push('/')
    },
    change () {
      if (this.na !== '') {
        let shw = false
        this.$emit('send', shw)
      }else {
        let shw = true
        this.$emit('send', shw)
      }
      this.$store.dispatch('changsw' , this.na)
    }
  },
  created () {
    this.$store.dispatch('getCity')
  }
}
</script>

<style lang="less" scoped>
.box{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 1.58rem;
  background: #00bcd4;
  box-sizing: border-box;
  &>h3{
    padding-top: 0.26rem;
    text-align: center;
    color: white;
    font-size: 0.28rem;
  }
  &>div{
    box-sizing: border-box;
    height: 0.62rem;
    margin: 0.3rem 0.11rem 0;
    border-radius: 0.1rem;
    background: white;
    padding: 0.1rem 0.3rem;
    &>input{
      width: 6rem;
      height: 0.42rem;
      outline: none;
      float: left;
      font-size: 0.2rem;
    }
  }
  &>img{
    cursor: pointer;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    width: 0.6rem;
  }
}
</style>
