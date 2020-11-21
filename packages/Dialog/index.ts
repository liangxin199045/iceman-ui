import _vue from 'vue'
import Dialog from './src/main.vue'

const installFun = function (Vue: typeof _vue): void {
  Vue.component(Dialog.name, Dialog)
}

const dialog = {
  install: installFun,
  name: Dialog.name
}

export default dialog
