<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><button v-copy="copyText">复制</button></p>
    <p>
      <button v-longpress="longpressHandle">长按1</button>
      <button v-longpress="longpressHandle">长按2</button>
    </p>
    <p>
      <button v-debounce="handleDebounce">debounce</button>
    </p>
    <p v-for="index in 10" :key="`image${index}`" :id="`image${index}`">
      <img v-lazyload="'/images/girl.jpeg'" width="100%" height="225px">
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private copyText = 'xxxx'

  private longpressHandle = () => {
    console.log('长按')
  }

  private handleDebounce = () => {
    console.log('debounce', new Date().toLocaleTimeString())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
