//继承

//创建对象
//工厂模式创建对象
function create(name, age) {
  var obj1 = {}
  obj1.name = name
  obj1.age = age
  return obj1
}
var person1 = create('jack', 24)

//寄生模式
function Japanese(name, language) {
  this.name = name
  this.language = language
}

function createChinese(name, language) {
  var obj2 = {}
  Japanese.call(obj2, name, language)
  return obj2
}
var j = createChinese('jack', 'chinese')

//对象字面量日日日
let obj3 = {}
obj3.gender = 'girl'
console.log(obj3.gender)

//动态原型
function Person(name, work) {
  this.name = name
  if (work) {
    Person.prototype.working = function () {
      console.log(name + '的工作是' + work)
    }
  }
}
var p1 = new Person('jack', 'developer')

//object.create
var p4 = Object.create(p1)

function doSomething() {
  var len = 10
  function step1() {
    alert(len)
  }
}
