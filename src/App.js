import InputSchema from "./dynamic/InputSchema";
import "./App.css";
import FormRender from "./dynamic/FormRender";
import { useState } from "react";
function App() {
  const [userSchema, setUserSchema] = useState({});
   const handleCallBack = ( a ) => {
     console.log(a)
    setUserSchema(a );
  };
  return (
    <div style={{ display: "flex",backgroundColor:'gray' }}>
      <InputSchema data1={handleCallBack} />
      <FormRender data={userSchema} />
    </div>
  );
}
export default App;