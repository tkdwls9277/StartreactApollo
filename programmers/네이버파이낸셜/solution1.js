function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var count = 0;
    while(true){
        debugger;
        if(S.indexOf("B")>-1 && 
            S.indexOf("A")>-1 && 
            S.match(/L/g).length>=2 &&
            S.match(/O/g).length>=2 &&
            S.indexOf("N")>-1){
                S.replace("B", "")
                S.replace("A", "")
                S.replace("L", "")
                S.replace("L", "")
                S.replace("O", "")
                S.replace("O", "")
                S.replace("N", "")
                count++;
        }else{
            return count;
        }
    }
    
}

console.log(solution("BAONXXOLL"));         // return 1
console.log(solution("BAOOLLNNOLOLGBAX"));  // return 2
console.log(solution("QAWABAWONL"));        // return 0
console.log(solution("ONLABLABLOON"));      // return 1

// 목표
// 문자열이 들어오면 BALLOON을 구성하는 알파벳이 있는지 검사하고 제거한다.
// 몇 번 제거할 수 있는지 리턴