import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
export default {
  components: {
		uniIcons,
		uniGrid,
		uniGridItem
	}
}


const app = new Vue({
    ...App
})
app.$mount()
