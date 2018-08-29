<template>
  <div>
    <span>{{msg}}</span>
      <div v-for="employee in employees" :key="employee.id" :employee="employee">
        <person-card :employee="employee" v-on:save-favorite="favorite"></person-card>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import PersonCard from '../components/PersonCard';

export default {
  data : function () {
    return {
      employees : [],
      msg: 'Hola'
    }
  },
  methods : {
    favorite( id ) {
      console.log( id );
    } 
  },
  mounted () {
    console.log('Entrada');
    axios.get('https://api.myjson.com/bins/qn0vc')
      .then(response => {
          console.log(response.data);
          this.employees=response.data;
      });
    console.log('Salida')

  },
  components : {
    PersonCard
  }
}
</script>
