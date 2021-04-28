// 새 할일을 등록할 때 사용한다.
import React, { useState } from "react";

function TodoForm() {
    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //TODO 새항목 설정하기
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
