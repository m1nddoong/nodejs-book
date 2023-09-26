require('./var');
// var.js 가 실행만 시키고, 거기 안에 있는 변수들을 모듈로 가져오고 싶진 안을 때 사용
console.log(require);

//자바 스크립트를 노드로 실행하면, 그 파일은 대부분 모듈이 된다.

//왜냐면 기본적으로 module.exports = {} 가 디폴트라고 했느데,
//즉 빈 객체를 다른 파일에서 쓸수있게 해주는 모듈이 되는 것.

//node require 실행하게 되면 main 은 실행한 것을 의미히고
//require.main 으로 어떤 파일을 실행 한건지 알아낼 수 있다.

//cache 
//index.js
const { odd, even } = require('./var');
const checkNumber = require('./func');

//한번 require 된것은 caching 이 된다. 즉, var 라는 파일을 읽은 정보를 require.cache 에 저장한다. 그다음 func 라는 정보를 캐싱하는 것.


// 캐시(메모리) 에 저장을 해두고 두번째, func.js 파일 내에 
// const { odd, even } = require('./var'); 이런식으로 한번 더 var 를 불러올 땐
// var 라는 파일을 안읽고 캐시에 저장된 것을 불러온다.


