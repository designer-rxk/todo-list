import React, {useState} from "react";

function Form({inputText, setInputText, todos, setTodos, setStatus}) {
  const [isActive, setActive] = useState(false);

    const toggleClass = () => {
    setActive(!isActive);
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
      e.preventDefault();
      if(inputText !== ""){
      setTodos([...todos,{text: inputText, completed: false, id: Math.random()*1000 }
      ]);
      setInputText("");}
  }
  const filterHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div className={"Centered"}>
      <form className={"Form"}>
          <div className={"input-button"}>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder={"Input a new task!"}/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
              <select onChange={filterHandler} name="todos" className={isActive ? "filter-done" : "filter-todo"} onClick={toggleClass}>
                <option value="all" className={"option"}>All</option>
                <option value="completed" className={"option"}>Completed</option>
                <option value="uncompleted" className={"option"}>Not completed</option>
              </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
