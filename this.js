console.log(this);  
//this 는 전역 객체를 가리킴
//브라우저에서는 전역객체가 윈도우면, 노드에서는 전역객체가 global 이니까
//global 이지 않을까 추축할 수 있지만
//노드에서는 일반 this 는 global 의 의미가 아니다.
console.log(this === module.exports)  //exports === module.exports == {} 이므로 결과는 빈 객체가 나와야 함


function a() {
    console.log(this === global);
    // 함수 안의 this 는 global 이다.
}

a();