//데이터타입 확인 코드
function checkType(data){
    return Object.prototype.toString.call(data).slice(8,-1)
}

console.log(checkType([]))
console.log(checkType({}))



//함수 반환 및 종료
function plus(num){
    if(typeof num !=='number'){
        console.log("숫자를 입력해주세요")
        return 0
    }
    return num+1
}

console.log(plus(2))
console.log(plus(7))
console.log(plus())