import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div>
      hihi
      <Greetings name="jin" onClick={onClick} />
      <div>
        <Counter />
      </div>
      <div>
        <MyForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
