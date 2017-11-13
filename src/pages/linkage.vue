<template>
  <div>
    <select>
      <option value="">请选择区域</option>
      <option v-for="(item, index) in linkagePlace" :key="index" :value="item">{{item}}</option>
    </select>
    <select>
      <option value="">请选择业务</option>
      <option v-for="(item, index) in linkageProject" :key="index" :value="item">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default{
  name: 'linkage',
  props: {
    linkageArr: {
      default () {
        return ['mianyangyibao', 'mianyangshebao', 'santaiyibao', 'youxianshebao', 'youxianjijin']
      }
    }
  },
  data () {
    return {
      linkageRelation: {
        mianyangyibao: ['绵阳', '医保'],
        mianyangshebao: ['绵阳', '社保'],
        mianyangjijin: ['绵阳', '基金'],
        santaiyibao: ['三台', '医保'],
        santaishebao: ['三台', '社保'],
        santaijijin: ['三台', '基金'],
        youxianyibao: ['游仙', '医保'],
        youxianshebao: ['游仙', '社保'],
        youxianjijin: ['游仙', '基金']
      }
    }
  },
  computed: {
    linkagePlace () {
      let place = []
      this.linkageArr.forEach(item => {
        if (place.indexOf(this.linkageRelation[item][0]) === -1) {
          place.push(this.linkageRelation[item][0])
        }
      })
      return place
    },
    linkageProject () {
      let project = []
      this.linkageArr.forEach(item => {
        if (project.indexOf(this.linkageRelation[item][1]) === -1) {
          project.push(this.linkageRelation[item][1])
        }
      })
      return project
    }
  }
}
</script>
