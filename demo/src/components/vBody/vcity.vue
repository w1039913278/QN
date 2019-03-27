<template>
  <div>
    <chead :sw="sw" @send="chang"></chead>
    <allcity v-show="sw"></allcity>
    <screen v-show="!sw"></screen>
  </div>
</template>

<script>
import chead from './vbodys/chead.vue'
import allcity from './vbodys/allcity.vue'
import screen from './vbodys/screen.vue'
export default {
  name: 'vcity',
  data () {
    return {
      sw: true,
    }
  },
  methods: {
    chang (data) {
      this.sw = data
    }
  },
  components: {
    chead,
    allcity,
    screen
  }
}
</script>

<style scoped>

</style>
