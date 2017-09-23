# 163music

> 网易云音乐

## Build Setup

```
# 初始化webpack-simple 模板
vue init webpack-simple

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### src 结构划分
```
components 单文件组件文件夹
diy 封装的api接口等
pages 单文件组件
public css重置、统一制定主题、样式等css文件
router 路由文件
main.js 入口文件
store vuex
```

### 下载vue-router

```
npm install vue-router -S
```

改变loader规则

> css style loader 加载规则

```
npm i style-loader css-loader -D
npm i sass-loader node-sass -D
```


```
module: {
    rules: [
        {
            test:/\.css$/,
            loader:'style-loader!css-loader'
        }
    ]
}
```

导入字体图标

```
@font-face {
  font-family: 'iconfont';  /* project id 423684 */
  src: url('//at.alicdn.com/t/font_423684_alavyozsw2ep14i.eot');
  src: url('//at.alicdn.com/t/font_423684_alavyozsw2ep14i.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_423684_alavyozsw2ep14i.woff') format('woff'),
  url('//at.alicdn.com/t/font_423684_alavyozsw2ep14i.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_423684_alavyozsw2ep14i.svg#iconfont') format('svg');
}
```

配置字体图标

```
module: {
    rules: [
        {
            test: /\.(png|jpg|gif|svg|woff|ttf|eot|woff2)$/,
            loader: 'file-loader',
            options: {
            name: '[name].[ext]?[hash]'
        }
    ]
}
```

### 下载 vue-swiper
```
npm install vue-awesome-swiper -S
```
### 下载 rippleria

点击波浪动画插件
```
npm install rippleria -S
```

### 下载 vue-resource

vue请求数据

```
npm i vue-resource -S
```
