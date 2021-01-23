function solution(n, computers) {
    var answer = 0;
    var visited = Array.from({length: computers.length}, (v, i) => false);

    function dfs(index){
        
    }

    for(var i=0;i<n;i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))