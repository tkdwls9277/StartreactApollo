import React, { Component } from "react";
import HelloReact from "./HelloReact";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./inputSample";
import UserList from "./UserList";

function App() {
  return (
    <Wrapper>
      <HelloReact name="jin" color="red" isSpecial={true} />
      <HelloReact />
      <Counter />
      <InputSample />
      <UserList />
    </Wrapper>
  );
}

export default App;
