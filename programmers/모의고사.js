function solution(answers) {
    var answer = [],
        first = [1, 2, 3, 4, 5],
        second = [2,1,2,3,2,4,2,5],
        third = [3,3,1,1,2,2,4,4,5,5];

    var answerArray=[0,0,0];

    answers.forEach(function(item, index){
        if(item==first[index%first.length]){
            answerArray[0]++;
        }
        if(item == second[index%second.length]){
            answerArray[1]++;
        }
        if(item == third[index%third.length]){
            answerArray[2]++;
        }
    });

    var topAnswer = 0;
    answerArray.forEach(function(item){if(item>topAnswer)topAnswer=item});
    answerArray.forEach(function(item, index){if(item==topAnswer)answer.push(index+1)})
    
    return answer;
}