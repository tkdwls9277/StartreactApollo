import React, { useDebugValue } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./Contexts/TodosContext";
import Props from "./books/R017_Props";

const App = () => {
    return (
        <TodosContextProvider>
            <TodoForm />
            <TodoList />
            {/* <div>{openChatting(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])}</div> */}
            {/* <div>{solution("()))((()")}</div> */}
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <Props props_val="this is props" />
        </TodosContextProvider>
    );
};

function openChatting(record: string[]) {
    var answer: string[] = [];
    var userObj = new Map();
    var userResult: { action: string; key: string }[] = [];
    var items = [];

    for (var i = 0; i < record.length; i++) {
        items = record[i].split(" ");
        var users = { key: "", id: "" };
        var userres = { action: "", key: "" };

        switch (items[0]) {
            case "Enter":
                userres.action = "님이 들어왔습니다.";
                break;
            case "Leave":
                userres.action = "님이 나갔습니다.";
                break;
        }

        userres.key = items[1];
        users.key = items[1];
        users.id = items[2];

        if (users.id) userObj.set(users.key, users.id);

        userResult.push(userres);
    }

    for (i = 0; i < userResult.length; i++) {
        userResult[i].action && answer.push(userObj.get(userResult[i].key) + userResult[i].action);
    }

    return answer;
}

// function solution(p: string) {
//     if (p.length === 0) {
//         return "";
//     }

//     var answer = "";
//     var stack = [];
//     var count = 0;

//     for (var i = 1; i < p.length; i++) {
//         if (stack.length === 0) {
//             count = i;
//             break;
//         }
//         if (stack[stack.length] === p[i]) {
//             stack.push(p[i]);
//         } else {
//             stack.pop();
//         }
//     }

//     var array = parentheses(p);

//     return answer;
// }

function parentheses(str: string): { first: string; second: string } | boolean {
    var stack = [];
    var count = 0;
    if (str.length === 0) {
        return true;
    }
    stack.push(str[0]);

    return parentheses(str.slice(count, str.length));
}

export default App;
