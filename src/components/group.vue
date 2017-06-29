<template>
  <div class="group">
    <p>{{tipsText}}</p>
    <component :is="curView"  @btnClick="groupBtnClick" :text="btnText"></component>
  </div>
</template>

<script>
import btn from '@/components/btn'
import arrow from '@/components/arrow'
export default{
  name: 'group',
  props: {
    tipsText: {
      default: '默认的文案'
    },
    btnText: {
      default: '下载'
    },
    curView: {
      default: 'btn'
    }
  },
  components: {
    btn,
    arrow
  },
  methods: {
    groupBtnClick: function () {
      this.$emit('groupBtnClick')
    }
  }
}
</script>

<style>
.group{
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
}
.group > p{
  float: left;
  line-height: 50px;
  color: rgb(0, 160, 216);
}
.group > .btn, .group > .arrow{
  float: right;
}
.group > .btn{
  margin-top: 11px;
}
.group > .arrow{
  margin-top: 19px;
}
</style>
