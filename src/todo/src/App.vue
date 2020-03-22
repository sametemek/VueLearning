<template>
 <!-- Komponent in tasarımı burada bulunur. -->
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href="" class="navbar-brand">TODO</a>
      </div>
    </nav>
    <div class="container">
      <div class="card" v-for="(item,index) in todos" :key="index" >
        <div class="card-body">
            {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Komponent in davranışı, yani işlevleri burada bulunur. */
export default {
  name: 'App',
  components: {},
  data(){
    return {
        todos:[
          {title:'Setup environment'},
          {title:'Create main list component'},
          {title:'Display TODO items'}
          ]
      }
    }
}
</script>

<style>
   .card{
     margin-top:10px;
     }
    
</style>
