// 새 할일을 등록할 때 사용한다.
import React, { useState } from "react";
import { useTodosDispatch } from "../Contexts/TodosContext";

function TodoForm() {
    const [value, setValue] = useState("");
    const disfatch = useTodosDispatch();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        disfatch({
            type: "CREATE",
            text: value,
        });
        setValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input value={value} placeholder="무엇을 하실건가요?" onChange={(e) => setValue(e.target.value)} />
            <button>등록</button>
        </form>
    );
}

export default TodoForm;
