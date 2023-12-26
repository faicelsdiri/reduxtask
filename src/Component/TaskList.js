import React from "react";
import Task from "./Task";

function TaskList ({tasks,setDescription,description}) {

    return (
        <div>
          <div style={{ justifyContent: "center" , textAlign :"center"  }} >
        {tasks.map((task) => (
          <Task key={task.id} task={task} setDescription = {setDescription} description={description}/>

        ))}
     

    </div>

        </div>
      );
}

export default TaskList ;