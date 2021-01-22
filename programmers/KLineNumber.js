function solution(array, commands) {
    var answer = [];
    commands.forEach(function(item){
        answer.push(array.slice(item[0]-1, item[1]).sort()[item[2]-1]);
    })
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));