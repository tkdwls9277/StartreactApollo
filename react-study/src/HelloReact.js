import React, { Component } from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}
      hihi {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "noname",
  color: "blue",
};

export default Hello;
