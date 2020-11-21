<template>
    <div class="dialog"><span>{{info}}</span> </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Dialog'
})
export default class Dialog extends Vue {
  @Prop() private info!: string;

  handleClick (): void {
    this.info = 'bob'
  }
}
</script>
<style scoped lang="scss">
.dialog {
  font-size: 20px;
  color: #fff;
  width: 300px;
  height: 100px;
  background-color: gray;
}
</style>
