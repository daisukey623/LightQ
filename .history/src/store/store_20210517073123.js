import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
  state:{
    count:30
  }
})

// ストアをエクスポート
export default store