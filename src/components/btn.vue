<template>
  <button class="btn" @click="btnClick">{{text}}</button>
</template>

<script>
export default{
  name: 'btn',
  props: {
    text: {
      default: '确认'
    }
  },
  methods: {
    btnClick: function () {
      alert('这是子组件事件')
      this.$emit('btnClick')
    }
  }
}
</script>

<style>
.btn{
  padding: 5px 15px;
  border: 1px solid #ccc;
}
</style>
