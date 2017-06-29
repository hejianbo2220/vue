<template>
  <div>
    <group tipsText="第一行文本" btnText="按钮1" @groupBtnClick="pageListClick"></group>
    <group tipsText="第二行文本" btnText="按钮2" @groupBtnClick="returnBack"></group>
    <group tipsText="第三行文本" curView="arrow"></group>
  </div>
</template>

<script>
import group from '@/components/group'
export default{
  name: 'pageList',
  components: {
    group
  },
  methods: {
    pageListClick: function () {
      alert('pageList上的点击事件')
    },
    returnBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
