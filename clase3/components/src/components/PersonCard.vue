<template>
  <div>
    <strong>{{employee.Name}}</strong>
    <strong>Title:</strong>{{employee.Position}}
    <button v-on:click="$emit('save-favorite')" >Favorite</button>
  </div>
</template>

<script>
export default {
  name: 'person-card',
  data : function () {
    return {}
  },
  methods : {
  },
  props: {
    employee: Object
  }
}
</script>

<style>

</style>
