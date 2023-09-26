// const value = require('./var');
// const odd = value.odd;
// const even = value.even;
// -> 구조 분해 할당을 통해 아래와같이 축약 가능

const { odd, even } = require('./var');

function checkOddOrEven(num){
    if(num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;