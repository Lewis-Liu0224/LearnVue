var firstName = "Lewis"
var lastName = "Liu"
var flag = true

function sum(a,b) {
  return a+b;
}

//导出方式一
// export {
//   flag,firstName,lastName,sum
// }

//导出方式二
export let Name = "Lewis Liu"
export let age = 21

//导出函数
export function mulit(a,b){
  return a*b
}

//导出类
export class Person {
  run(){
    console.log("Get Person Class");
  }
}

//匿名导出,只能存在一个匿名导出
export default {flag,firstName,lastName,sum}