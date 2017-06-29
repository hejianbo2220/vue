<template>
  <a href="javascript:void(0);" :class="['tab-item', tab.active ? 'active' : '']" @click="tabClick">{{tab.text}}</a>
</template>

<script>
export default{
  name: 'tab',
  props: {
    tab: {
      default: {}
    }
  },
  methods: {
    tabClick: function (item) {
      this.$emit('tabClick')
    }
  }
}
</script>

<style scoped>
.tab-item{
  display: block;
  width: 25%;
  padding-bottom: 5px;
  float: left;
  color: #666;
}
.tab-item.active{
  color: #f00;
  border-bottom: 2px solid #f00;
}
</style>
