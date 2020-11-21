<template>
    <button class="button" @onclick="handleClick">{{msg}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Button'
})
export default class Button extends Vue {
  @Prop() private msg!: string;

  handleClick (): void {
    this.msg = 'iceman'
  }
}
</script>
<style scoped lang="scss">
.button {
  font-size: 20px;
  color: red;
  display: inline-block;
  outline: none;
  margin: 0;
}
</style>
