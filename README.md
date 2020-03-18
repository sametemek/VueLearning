# VueLearning

## Directives

v-bind:value="index" or :index değeriyle o elementi bağlar. sadece göstermek için.

 ```javascript 
<input type="text" id="title" v-bind:value="title">
 ```

v-model="index" ise hem veriyi bağlar, hem de değiştikçe verinin içini de değiştirir.

```javascript 
<input type="text" id="title" v-model="title">
 ```

 v-model="" çift tırnak içerisine yazılanlar javascript kodudur.
