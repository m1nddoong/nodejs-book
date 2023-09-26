require('./dep2');

module.exports = {
    hello: 'zerocho', // 얘를 빈객체로 만들어 순환 참조가 일어나지 않도록 한다. 
}