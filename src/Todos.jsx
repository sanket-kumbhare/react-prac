import React, {memo} from "react";

const Todos = ({ todos }) => {
  console.log("todo render");
  return (
    <div>
      {todos.map((todoList) => {
        return <div key={todoList.id}>{todoList.todo}</div>;
      })}
    </div>
  );
};

export default memo(Todos);
