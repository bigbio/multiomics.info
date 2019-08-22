<template>
  <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
  </fusioncharts>
  <!--:heigh="height" could be added above-->
</template>
<script>
  //import LineChart from '@/components/charts/LineChart.js'
  export default {
    props: ['type','dataSource','height'],
    data(){
      return {
          width: '100%', // Width of the chart
          dataFormat: 'json', // Data type
      }
    }
  }
</script>
