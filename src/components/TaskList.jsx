import { useCallback, useState } from "react";
import { Task } from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Learn React', status: 'Incomplete' },
      { id: 2, text: 'Build an App', status: 'In Progress' },
      // ... other tasks
    ]);
  
    const changeTaskStatus = useCallback((taskId, newStatus) => {
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );
    }, []);
  
    return (
      <div>
        {tasks.map((task,i) => (
          <div key={i}>
          <Task key={task.id} task={task} onStatusChange={changeTaskStatus} />
          <h1>status : {task.status}</h1>
          </div>
        ))}
      </div>
    );
  };
  export default TaskList;