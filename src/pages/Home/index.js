import { useEffect, useCallback, useState } from "react";
import axios from "axios";

import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import * as S from "./styles";
import { Tasks } from "../../services/tasks";

function Home() {
  const [tasks, setTasks] = useState([]);

  const refreshTasks = useCallback(async () => {
    const response = await Tasks.getTasks();
    setTasks(response);
  }, []);

  async function createTask(text) {
    await Tasks.createTask({ text });

    refreshTasks();
  }

  async function removeTask(task) {
    await Tasks.deleteTask(task.id);

    refreshTasks();
  }

  useEffect(() => {
    refreshTasks();
  }, [refreshTasks]);

  return (
    <S.Wrapper>
      <TaskForm onSubmit={createTask} />

      <TaskList tasks={tasks} removeTask={removeTask} />
    </S.Wrapper>
  );
}

export default Home;
