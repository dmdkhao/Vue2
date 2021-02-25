## Vue Day 04

### 十二、模块化

#### 12.1 ES6的模块化实现

* 导入：
  * import {xxx,xxx} from " ./src "   从src中导入xxx
  * import * as aaa from "./src"   从src中导入所有，并通过aaa.xx方式使用。
* 导出：
  * export{xxx,xxx}
  * export function run(){} 直接导出某个方法
  * export let age name  直接导出某个变量
  * export class     直接导出某个类
  * export default xxx 导出一个xxx，且导入方可以自定义其名称。但导出方一个文件中只能写一个default导出。



#### 12.2 commonjs的模块化实现

* 导入：
  * let {xxx,xxx} = require("./src");
* 导出：
  * module.exports = {xxx,xxx,xxx}



### 十三、webpack

#### 13.1 webpack相关概念

**简介**：webpack是javascript的静态==模块打包==工具。

**同行还有**：gulp和grunt。

**优点**：css、png、json等文件都可以在webpack中当成模块进行打包。

注意：webpack依赖node环境。

npm：node packages manager



#### 13.2 webpack起步

在搭建好了webpack所需的环境后，即可进行webpack打包。

* 打包指令：webpack 入口 出口

```
入口：依赖了很多其他文件的主要js文件，一般为main.js。
出口：html中引入的文件，一般为dist中的bundle.js。
```

* 注意：只有==依赖了==才会被一起打包进去。



#### 13.3 webpack的配置

问题：每次都需要自己在命令行中敲入webpack 入口 出口 太麻烦，有没有什么方法能够省略一些文字呢？

答案：webpack.config.js

* 在编写webpack.config.j前需要进行：
  * npm init
  * npm install

webpack.config.js文件

```javascript
cosnt path = require("path")

module.exports = {
  entry: "main.js",	//入口js文件
    output: {
        path: path.resolve(__dirname,"dist"), //拼接的路径
        filename: "bundle.js"		//生成的文件名
    }
}
```

进行以上配置后，在命令行中可以只输入==webpack==来完成文件打包。



#### 13.4 命令映射

在输入npm init 之后，会自动生成package.json文件。在其中的script中可以进行命令映射。

```json
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
}
```

第七行为后续笔者添加的，其余部分是npm init 自动生成的。

此后只需要在命令行中输入==npm run build==就可以完成打包。

使用npm run build打包的==优点==：

* 优先使用项目本地的webpack。这可以避免版本冲突问题。

```
//本项目安装开发时依赖的webpack指令为:
npm install webpack@3.6.0 --save-dev

//查看已安装的webpack版本：
webpack -version
```



#### 13.5 loader---webpack中使用css文件的配置

本节通过 在webpack中打包css文件的方式来引出==loader==。

**loader**：帮助webpack处理css、图片、json等其他文件。

目标：把css文件也一起打包进bundle.js中。

1. 安装loader：
   1. 需要安装css-loader和style-loader。
2. 配置webpack.config.js文件中的module。
3. 在main.js中依赖css文件。若不依赖则无法打包进bundle.js中。
4. 打包。

```javascript
// 1.安装loader。
// 在本项目中，webpack使用v3.6.0，因此无法使用最新版的cssloader和style-loader。因此需要指定版本号
css-loader
npm install css-loader@2.0.2 --save-dev

style-loader
npm install style-loader@0.23.1 --save-dev

// 2.webpack.config.js文件
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
     
// 3. main.js中引入css文件
require("./css/normal.css");
```

