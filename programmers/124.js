function solution(n) {
    var answer = '';
    var stringItem = n+"";
    var arrayItem = stringItem.split("");
    debugger;
    arrayItem.forEach(function(item){
        switch(item){
            case 1:
                answer+=1;
                break;
            case 2:
                answer+=2;
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                

        }
    }.bind(this))
    return answer;
}

console.log(solution(4));
console.log(solution(1234));