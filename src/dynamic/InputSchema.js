import React, { useState } from "react";
export default function InputSchema(props) {
  const [userSchema, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    try {
      let inputData = JSON.parse(userSchema);
      props.data1(inputData)
    } catch (e) {
      alert("invalid json");
    }
  };
  return (
    <div>
      <form>
        <textarea
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          rows="30"
          cols="35"
        />
        <br/>
        <button onClick={handleChange}> submit</button>
      </form>
    </div>
  );
}