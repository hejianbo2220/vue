<template>
  <div id="chart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart',
  data () {
    return {
      chart: null,
      title: 'ECharts 入门示例',
      xAxis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  },
  methods: {
    drawChart: function () {
      this.chart = echarts.init(document.getElementById('chart'))
      this.chart.setOption({
        title: {
          text: this.text
        },
        tooltip: {},
        xAxis: {
          data: this.xAxis
        },
        yAxis: {},
        series: this.series
      })
    }
  },
  mounted: function () {
    this.drawChart()
  }
}
</script>

<style>
#chart{
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
