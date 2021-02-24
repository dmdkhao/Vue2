//es6的方式导入
import {flag,sum} from "./xiaoming.js"

if(flag){
  sum(1,2);
}

/*
    * 导入和导出(ES6)
        * 导入：
              1. import {xxx,xxx,xxx} from "./src"
              2. import * as xxx from "./src"   全部导入，通过xxx.xx使用
        * 导出：
              1. export {xxx,xxx,xxx}    将本文件中的变量、方法、类 暴漏出来,供其他文件使用。
              2. export let age = 23     在声明变量时就直接导出
              3. export function sum(){} 在声明方法时就直接导出
              4. export class Person{}   在声明类时就直接导出
              5. export default xxx      导出一个xxx，其他文件在导入时可以自定义其名称，但本导出文件只能有一个default。

    * 导入和导出(commonjs)
        * 导入：
              *. const {xxx,xxx,xxx} = required("./src");
        * 导出
              *. module.exports = {xxx,xxx,xxx}   大括号内部和ES6导入1相同。




 */