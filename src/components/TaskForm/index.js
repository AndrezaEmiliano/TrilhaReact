import * as S from "./styles.js";
import Input from "../../components/Input";
import Button from "../../components/Button";

function TaskForm({ value, onChange, onClick }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Input value={value} onChange={onChange} />
      <Button onClick={onClick}>Adicionar task</Button>
    </form>
  );
}

export default TaskForm;
