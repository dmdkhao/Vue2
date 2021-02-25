//导入
const {div,sub} = require("./js/mathUtil2.js");  //这里是使用了commonjs的导入方式，浏览器无法直接解析，因此需要先通过webpack打包。
div(10,5);

import {add,mul} from "./js/mathUtil.js"
add(10,20)
mul(10,20)

require("./css/normal.css");
