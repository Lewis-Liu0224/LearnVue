

//导入变量和函数
// import {flag,sum} from "./export.js";
// if (flag){
//   console.log("成功获取到flag");
//   console.log(sum(20, 30));
// }

//导入类
import {Person} from "./export.js";

let p = new Person()
p.run()

//导入匿名类,不加大括号，并且在导入时可以自己命名
import js from "./export.js"
function test() {
  console.log(js.lastName + js.firstName);
  console.log(js.sum(20, 30));
}
test()

//当导入的文件太多时，可以使用全部导入
// import * as exportJs from "./export.js"