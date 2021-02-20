function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var array=[];
    function value(){
        console.log("hihi");
    }
    A.forEach(function(item, index){
        array.push(A[index])
        array[index].__proto__.value = function(){debugger; return A[index]}.bind(this)
    }.bind(this));
    return array;
}

var Z = solution([4,2]);

// 조건
// Z[0].value() = 4
// Z[1].value() = 2
// Z[0].value === Z[1].value
// !Z[0].hasOwnProperty()
// !Z[1].hasOwnProperty()