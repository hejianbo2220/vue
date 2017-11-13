<template>
  <div>
    <p>{{count}}</p>
    <btn @btnClick="increment" text="+1"></btn>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import btn from '@/components/btn'
export default{
  name: 'vuex',
  components: {
    btn
  },
  computed: mapState([
    'count'
  ]),
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>
