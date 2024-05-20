import React from "react";

const HelloWorld2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontSize: 20,
      }}
    >
      <div
        style={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        Hello World 2
      </div>
      <div>
        <div>React Version: 18.0.2</div>
        <div>MySql Version: 8.0</div>
      </div>
    </div>
  );
};
export default HelloWorld2;
