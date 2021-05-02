//여러 TodoItem들을 렌더링해줌
import React from "react";
import TodoItem from "./TodoItem";
import { useTodosState } from "../Contexts/TodosContext";

function TodoList() {
    const todos = useTodosState();
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;
