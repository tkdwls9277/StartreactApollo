function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var bridge_sum = 0;
    var bridge_array=[];
    for(var i=0;i<bridge_length;i++){
        bridge_array[i]=0;
    }
    while(true){
        
        if(truck_weights.length == 0 && checkBridgeWeight() == 0){
            break;
        }
        answer++;
        if(checkBridgeWeight()+truck_weights[0] <= weight && truck_weights.length>0){
            bridge_array.shift();
            bridge_array.push(truck_weights[0]);
            truck_weights.shift();
        }else{
            bridge_array.shift();
            if(checkBridgeWeight()+truck_weights[0]<=weight){
                bridge_array.push(truck_weights[0]);
                truck_weights.shift();
            }else{
                bridge_array.push(0);
            }
        }
    }
    function checkBridgeWeight(){
        return bridge_array.reduce((a,b) => (a+b));
    }
    return answer;
}

console.log(solution(2, 10, [7,4,5,6]))
console.log("answer: 8")
console.log(solution(100, 100, [10]))
console.log("answer: 101")
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]))
console.log("answer: 110")