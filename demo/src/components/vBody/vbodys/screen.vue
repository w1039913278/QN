<template>
  <div class="box" v-if="show">
    <ul>
      <li v-for="(item , index) in getcity">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "screen",
  computed: {
    getname () {
      return this.$store.state.na
    },
    show () {
      return this.getname.length
    },
    city () {
      return this.$store.state.cities
    },
    getcity () {
      let arrcity = []
      let asd = new RegExp(this.getname)
      for (let index in this.city){
        this.city[index].forEach(function (item , num) {
          if(asd.test(item.name) || asd.test(item.spell)){
            arrcity.push(item.name)
          }
        })
      }
      return arrcity
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  margin-top: 1.58rem;
  &>ul{
    &>li{
      font-size: 0.3rem;
      padding: 0.2rem 0 0.2rem 0.2rem;
      border-bottom: 0.01rem solid #eeeeee;
    }
  }
}






</style>
