import { useState } from "react";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <>
      <div className="flex flex-col mx-auto mt-[50px] p-8 bg-[#ADEFD1FF] w-1/2 rounded-lg">
        <h1 className="text-center font-Poppins text-2xl font-semibold">
          Todo List App
        </h1>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          edit={edit}
          setEdit={setEdit}
        />
        <TodosList todos={todos} setTodos={setTodos} setEdit={setEdit} />
      </div>
    </>
  );
};

export default App;
