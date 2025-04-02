// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello World!'

// 변수 선언
// var myVariable
// 값 할당
// myVariable = 10
// 변수 선언 + 할당
var myVariable = 10

// console.log(myVariable)

// ES6 이전
var myV1 = 1
// ES6 이후
let myV2 = 2
const myV3 = 3

myV1 = 10
var myV1 = 100

// let 변수 재선언이 x
myV2 = 20
// let myV2 = 200

// const 변수는 재선언, 재할당 x --> 그래서 상수에 사용.
// myV3 = 30
// const myV3 = 3 

let a = 'bob'
let b = 10
let c = true
let d = [1, 2, 3]
let e = {
    'apple': '사과', 
}

// console.log(a, b, c, d, e)

// console.log("Hello" + "World!")

let varA = '10'
let varB = 10

console.log(varA == varB)
console.log(varA === varB)
console.log(varA !== varB)

// Array
let myArray = []
myArray.push('hello') // 데이터를 밀어 넣을때
myArray.push('world')
console.log(myArray)
myArray.pop() // 데이터 빼기
console.log(myArray)
console.log(myArray[0])

// Object
let myObject = {
    'apple': '사과',
}
console.log(myObject.apple)

myObject.grape = '포도'
console.log(myObject)

// 조건문
let iceCream = 'chocolate'
if (iceCream === 'chocolate') {
    console.log('i love chocolate')
} else if(iceCream === 'vanila') {
    console.log('vanila')
// } else{
    console.log('awwwwwwwww')
}


// 반복문
console.log('---while---')
let i = 0
while (i < 5) {
    console.log(i)
    i++ 
    // i = i + 1(파이썬 문법)
}

console.log('---for---') // -> while 문의 축약형 같은 느낌일 수 있다.
for (let i = 0 ; i<5 ; i++ ) {
    console.log(i)
}

let arrayA = ['a', 'b', 'c']
console.log('---for2---')
for (let i = 0; i < arrayA.length; i++ ){
    console.log(arrayA[i])
}

console.log('---for in---')
for (let index in arrayA) {
    console.log(index, arrayA[index])
}

console.log('---for of---') // 실제 그 값이 출력되는 경우(파이썬 문법과 유사)
for (let item of arrayA) {
    console.log(item)
}

console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})

// 함수
// def func():

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}

// console.log(multiply(2, 3))

// 함수 표현식
let multiply2 = function(num1, num2) {
    return num1 * num2
}
// console.log(multiply2(3, 4))

// 화살표 함수
let multiply3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply3(2, 5))

// 화살표함수 생략1
// {}인데 코드가 return 하는 문장 하나만 있다면, {}와 return을 생략 가능.
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(3, 4))

// 화살표함수 생략2
// ()안에 매개변수가 하나만 있다면, ()을 생략 가능 
let cube = num => num ** 3  // -> 원래 첫번쨰 num 에 ()가 잇어야 했음.
console.log(cube(10))

// 이벤트 -> 웹 페이지 화면 어디를 클릭해도 hello!!가 출력되도록 만드는 함수. 클릭이 일어났을 때만 반응한다는 한계.
// document.querySelector('html').onclick = function () {
//     alert('hello!!')
// }

// 이벤트(이벤트 리스너)
// 이벤트 등록하고 싶은 애 찾기(클릭하고 싶은 애 찾기)
let myH1 = document.querySelector('h1')
// <element>.addEventlistener (무슨 일이 일어났을 때, 무슨 행동을 할지)
myH1.addEventListener('click', function(e){
    alert('hihi')
    console.log(e) // -> click 했을 때 무슨 일이 일어났는지 개발자 도구(F12)에서 보여주는 코드.
    console.log(e.clientX, e.clientY)
})  // ->click 이라는 일이 일어났을 때, function안에 있는 hihi 를 수행할 것이다.

// 클릭하는 순간 사진을 바꿔줘
let myImg = document.querySelector('img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src')
    
    if(src === 'images/cat.jpg'){
        myImg.setAttribute('src', 'images/firefox-icon.png')
    } else {
        myImg.setAttribute('src', 'images/cat.jpg')
    }
})

let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function(e){  // -> 키보드가 눌렸는지 아닌지 확인
    // console.log(e)
    console.log(myInput.value) // -> 키보드로 작성하는 그대로 계속해서 출력됌
}) 