import Vue from 'vue'
import App from './App'
import uniIcons from "@/components/uni-icons/uni-icons.vue"
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
import uniCard from '@/components/uni-card/uni-card.vue'
import bwSwiper from '@/wxcomponents/bw-swiper/bw-swiper.vue'
import url from '@/api.js' 
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.global_api = 'http://www.51error.cn'; 
Vue.prototype.global_url = url;

export default {
  components: {
		bwSwiper,
		uniCard,
		uniIcons,
		uniGrid,
		uniGridItem
	}
}


const app = new Vue({
    ...App
})
app.$mount()
