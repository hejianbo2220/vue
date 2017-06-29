<template>
  <div>
    <tab v-for="item in tab" key="index" :tab="item" @tabClick="pageTabClick(item)"></tab>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default{
  nama: 'pageTab',
  components: {
    tab
  },
  data () {
    return {
      tab: [
        {
          text: '首页',
          active: true
        },
        {
          text: '列表',
          active: false
        },
        {
          text: '关于',
          active: false
        },
        {
          text: '招聘',
          active: false
        }
      ]
    }
  },
  methods: {
    pageTabClick: function (thisItem) {
      this.tab.forEach(function (item) {
        item.active = false
      })
      thisItem.active = true
      if (thisItem.text === '首页') {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style>

</style>
