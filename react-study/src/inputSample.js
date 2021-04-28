import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const nameInput = useRef();

  const { name, nickName } = inputs; // 비구조화 할당을 통해 값 추출

  const inputChange = (e) => {
    const { value, name } = e.target; // 우선 e.target에서 value와 name 추출
    setInputs({
      ...inputs, // 기존의 input의 객체를 복사한 뒤
      [name]: value, //name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={inputChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={inputChange}
        value={nickName}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickName})
      </div>
    </div>
  );
}

export default InputSample;
