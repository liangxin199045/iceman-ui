<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Button :msg=msg></Button>
    <Dialog :info=666></Dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button, Dialog } from '../packages'

Vue.use(Button)
Vue.use(Dialog)

@Component
export default class App extends Vue {
  public msg ='iceman'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
