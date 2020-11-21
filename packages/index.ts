import _vue from 'vue'
import Button from './Button'
import Dialog from './Dialog'
// 所有组件列表
const components = [
  Button,
  Dialog
]

let installed = false

// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue: typeof _vue): void {
  // 判断是否安装，安装过就不继续往下执行
  if (installed) return
  installed = true
  // 遍历注册所有组件
  components.map(component => component.install(_vue))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { Button, Dialog }
export default {
  install
}
