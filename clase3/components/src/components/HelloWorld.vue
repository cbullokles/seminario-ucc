<template>
  <div class="hello">
    <h1>Hello {{ msg }} !!</h1>
    <strong>Counter :</strong> {{this.counter}}
    <button @click="incrementCounter">Increment </button>
    <button @click="decrementCounter">Decrement </button>
    <strong>Multiplicador :</strong> {{multiply | localeNumbers}}
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      counter : 0,
    }
  },  
  props: {
    msg: String,
    stats: Object
  },
  beforeCreate () {
    console.log('Before Create');
  },
  mounted () {
    console.log('App mounted');
  },
  beforeUpdate () {
    console.log('Before Update??');
  },
  methods : {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    }
  },
  watch : {
    $route : function() {
      console.log("cambio la ruta");
      this.counter=0;
    },
    counter : function (){
      console.log("cambio el counter!!!")
    }
  },
  computed : {
    multiply() {
      console.log("Multiplico")
      return this.counter * 5000;
    }
  },
  created () {

  },
  destroyed () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
