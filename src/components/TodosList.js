import React from "react";
import { MdCheckCircle, MdEdit, MdOutlineDeleteOutline } from "react-icons/md";

const TodosList = ({ todos, setTodos, setEdit }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
  };

  const style1 = { color: "#00203fff", fontSize: "1.5em" };
  const style2 = { color: "#00203fff", fontSize: "1.5em" };
  const style3 = { color: "#00203fff", fontSize: "1.7em" };

  return (
    <>
      <div>
        {todos.map((todo) => (
          <li key={todo.id} className="flex">
            <span
              className={`${
                todo.completed ? "line-through opacity-75" : ""
              } w-full my-2 font-Poppins text-lg font-medium`}
            >
              {todo.title}
            </span>
            <button className="mr-2" onClick={() => handleCheck(todo)}>
              <MdCheckCircle style={style1} />
            </button>
            <button className="mr-2" onClick={() => handleEdit(todo)}>
              <MdEdit style={style2} />
            </button>
            <button onClick={() => handleDelete(todo)}>
              <MdOutlineDeleteOutline style={style3} />
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default TodosList;
