<template>
  <div>
    <search></search>
    <wheel></wheel>
    <project></project>
    <rolling></rolling>
    <sale></sale>
    <where></where>
  </div>
</template>
<script>
import search from './headers/search.vue'
import wheel from './headers/wheel.vue'
import project from './headers/project.vue'
import sale from './headers/sale.vue'
import where from './headers/where.vue'
import rolling from './headers/rolling.vue'
export default {
  name: 'vhead',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getHost')
  },
  components: {
    search,
    wheel,
    rolling,
    project,
    sale,
    where
  }
}
</script>
<style scoped>

</style>
