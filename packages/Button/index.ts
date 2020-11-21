import _vue from 'vue'
import Button from './src/main.vue'

const installFun = function (Vue: typeof _vue): void {
  Vue.component(Button.name, Button)
}

const button = {
  install: installFun,
  name: Button.name
}

export default button
