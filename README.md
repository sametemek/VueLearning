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

## VueCli ile proje oluşturmak

VueCli kullanabilmek için NodeJs kurulu olmalıdır.

Aşağıdaki satırla kurulabilir.

```
choco install nodejs
```

Nodejs ile beraber npm de kurulmuş olacak. Npm yardımıyla VueCli kurulur.

```
npm install -g @vue/cli
```
VueCli kurulduktan sonra aşağıdaki komutla vue projesini oluşturuyoruz.

```
vue create todo
```
eğer aşağıdaki gibi bir hata olursa 

```
vue : File C:\Users\Samet\AppData\Roaming\npm\vue.ps1 cannot be loaded. The file C:\Users\Samet\AppData\Roaming\npm\vue
.ps1 is not digitally signed. You cannot run this script on the current system. For more information about running scri
pts and setting execution policy, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ vue --version
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```
powershell i administrator modunda açarak aşağıdaki satırı çalıştırarak sorunu aşabiliriz.

```powershell
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
```




Vue projesinde 3 tane klasör var.

#### node_modules :
tüm bağımlılıklar bu klasörde bulunur.

#### public : 
css ler, image lar bu klasörde bulunur. bu klasör içerisinde index.html de `<div app>` bulunur. bütün program bu dosyadan çalışır.
#### src : 
tüm kod dosyaları bu klasörde bulunur.


### Component in yapısı

```vue
<template>
 <!-- Komponent in tasarımı burada bulunur. -->
  <div id="app">
  </div>
</template>

<script>
/* Komponent in davranışı, yani işlevleri burada bulunur.  */

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
   /* Stiller burada bulunur.  */
</style>
```

App.vue projenin temel komponentidir. Diğer bütün komponentler bu komponent içerisinde çağırılır. Layout da bu komponent içerisinde belirlenir.