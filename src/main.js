import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import iView from 'iview';
import '@/assets/extra/theme.less';
import VueResource  from 'vue-resource'

//for vueFusionCharts
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//for apexcharts
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.use(iView)
Vue.use(VueResource);

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
