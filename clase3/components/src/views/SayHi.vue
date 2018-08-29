<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <HelloWorld :msg="this.name"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SayHi',
  data () {
    return {
      lines : 3343343
    }
  },  
  components: {
    HelloWorld
  },
  props: ['name'],
  mounted () {
    //alert(this.name);
    console.log(this.name);
  },
  destroyed () {

  }
}
</script>