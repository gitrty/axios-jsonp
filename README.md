# axios-jsonp

## 调用示例 : 
```
npm i vue-toyo-jsonp -D
```
安装成功后 在main.js(入口文件)中引入即可

#### 在组件中调用
```js
this.$jsonp(
    'https://www.baidu.com/su',
    { wd: 'hello world' },
    'cb'
).then(data => {
    console.info(data);
})
```
#### 在Vuex管理的函数中调用
由于 actions/mutations等 中的 this 指向 store , 所以不能直接使用this.$jsonp调用
```js
import Vue from 'vue'       

Vue.prototype.$jsonp(
    'https://www.baidu.com/su',
    { wd: 'hello world' },
    'cb'
).then(data => {
    console.info(data);
})
```