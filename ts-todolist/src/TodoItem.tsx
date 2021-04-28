// 할 일에 대한 정보를 보여줌
import React from "react";
import "./TodoItem.css";

export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
};

function TodoItem({ todo }: TodoItemProps) {
    return (
        <li className={`TodoItem ${todo.done ? "done" : ""}`}>
            <span className="text">{todo.text}</span>
            <span className="remove">(X)</span>
        </li>
    );
}

export default TodoItem;
