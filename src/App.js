import React, { useState } from 'react';
import './App.css';
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from './Component/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { add_task } from './Redux/action';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  //const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleAdd = () => {
    const id = Math.random()
    const newTask = { id, description, isDone };
    dispatch(add_task(newTask));
    setDescription("")
  };

  return (
    <div className="App">
      <Form.Label>Write a task to Do</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <Button variant="success" onClick={handleAdd}>
        ADD
      </Button>
      <TaskList tasks={tasks} setDescription={setDescription} description={description} />
    </div>
  );
}

export default App;