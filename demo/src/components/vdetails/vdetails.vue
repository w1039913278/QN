<template>
<vdetail></vdetail>
</template>

<script>
import vdetail from './detail/vdetail.vue'
export default {
  name: "vdetails",
  components: {
    vdetail
  },
  created () {
    this.$store.dispatch('getdetail')
  }
}
</script>

<style scoped>

</style>
