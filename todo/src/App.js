import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTask/AddTask";
import FilterTodo from "./components/Filter/FilterTask";
import TodoList from "./components/TaskList/TaskList";

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);

  console.log(done, unDone);

  return (
    <div>
      <AddTodo />
      <div style={{ textAlign: "center" }}>
        <FilterTodo setDone={setDone} setUndone={setUndone} />
      </div>

      <TodoList done={done} unDone={unDone} />
    </div>
  );
}

export default App;