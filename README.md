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


## Components

### Component tanımı 


```
    Vue.component('komponent adı',{
        props : [array halinde props lar],
        template : `bir div bloğu içerisinde tasarım`
    });
```
```javascript 
    Vue.component('output-message',{
        props : ['title','message'],
        template : `<div>  
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        </div> `
    });
```

### Component kullanımı
```
<komponent-adı :prop1="prop1" :propN="propN"/>
```

```javascript
<output-message :title="title" :message="message"/>
```