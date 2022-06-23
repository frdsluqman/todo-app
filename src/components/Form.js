import React, { useEffect } from "react";

const Form = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([
        ...todos,
        { id: generateID(), title: input, completed: false },
      ]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const generateID = () => {
    return +new Date();
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hal yang akan dilakukan"
          className="text-sm font-Poppins w-full p-4 my-3 outline-none text-[#ADEFD1FF] border-3 border-[#00203fff] rounded-lg bg-[#00203fff]"
          value={input}
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="hover:bg-[#00203fff] hover:text-[#ADEFD1FF] text-[#00203fff] font-bold font-Poppins my-2 py-3 px-5 rounded-lg ease-in duration-200 border-2 border-[#00203fff]"
        >
          {edit ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Form;
