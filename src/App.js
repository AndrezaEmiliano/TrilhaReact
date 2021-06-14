import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <Input value={value} onChange={onChange} />
    </div>
  );
}

export default App;
