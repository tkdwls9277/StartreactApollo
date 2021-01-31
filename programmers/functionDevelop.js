function solution(progresses, speeds) {
    var answer = [];
    var count = 0, startIndex = 0;
    debugger;

    while(true){
        if(startIndex == progresses.length){
            return answer.filter(function(item){return item != 0});
        }
        for(startIndex;startIndex<=progresses.length;startIndex++){
            if(progresses[startIndex]>=100){
                count++;
            }else{
                answer.push(count);
                count=0;
                break;
            }
        }

        for(i=0;i<progresses.length;i++){
            progresses[i]+=speeds[i];
        }
    }
}

console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))