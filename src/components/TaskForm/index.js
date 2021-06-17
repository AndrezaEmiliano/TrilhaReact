import * as S from "./styles.js";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

function TaskForm({ onSubmit }) {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(value);

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={onChange} />

      <Button>Adicionar task</Button>
    </form>
  );
}

export default TaskForm;
