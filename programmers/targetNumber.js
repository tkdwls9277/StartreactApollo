// function solution(numbers, target) {
//     var answer = 0;
//     var visited = Array.from({length: numbers.length}, (v, i) => false);

//     dfs(numbers, target, 0, visited, result, answer)

//     return answer;
// }

// function dfs(number, target, start, visited, result, answer){
//     if(visited.every(function(item){return item===true})){
//         if(result===target){
//             answer+=1;
//         }
//         return;
//     }
// }

function solution(number, target) {
    var answer = 0;

    dfs(0,0);

    function dfs(index, result){
        if(index===number.length){
            if(result===target){
                answer++;
            }
            return;
        }
        dfs(index+1, result+number[index]);
        dfs(index+1, result-number[index]);

    }

    return answer;
}

console.log(solution([1, 1, 1, 1, 1],3));