import { useState } from "react";

const TodoForm = ({onSave}) => {
    const [task, setTask] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault(); //기존 기능 방지
        onSave(task);
        setTask('');
    }
  return (
    <div id="todo-form">
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={task}
            onChange={(e)=>{setTask(e.target.value)}}
        />
        </form>
    </div>
  )
}

export default TodoForm