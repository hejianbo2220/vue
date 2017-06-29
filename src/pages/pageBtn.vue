<template>
  <div>
    <btn @btnClick="pageBtnClick"></btn>
    <btn @btnClick="returnBack" text="返回"></btn>
  </div>
</template>

<script>
import btn from '@/components/btn'
export default{
  name: 'pageBtn',
  components: {
    btn
  },
  methods: {
    pageBtnClick: function () {
      alert('这是父组件事件')
    },
    returnBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
