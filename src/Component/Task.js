import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { is_done, delete_task, edit_task } from "../Redux/action";
import { useDispatch } from "react-redux";

import Modal from "react-modal";

function Task({ task }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [taskdescrption,settaskDescription] =useState(task.description)
console.log(task.description);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = () => {
    // Dispatch an action to update the task with the edited description
    dispatch(edit_task({id : task.id, taskdescrption}));
    closeModal();
    
  };



  const handleDONE = () => {
    dispatch(is_done(task.id));
    
  };

  const btn_delt = () => {
    dispatch(delete_task(task.id));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Form.Label style={{ margin: "10px " }}> {task.description} </Form.Label>
      <Button variant="outline-warning" style={{ margin: "10px " }} onClick={ openModal}>
        Edit
      </Button>

      <Button
        variant="outline-danger"
        style={{ margin: "10px " }}
        onClick={btn_delt}
      >
        Delete{" "}
      </Button>
      <Button
        variant={task.isDone ? "success" : "danger"}
        style={{ margin: "10px " }}
        onClick={handleDONE}
      >
        {task.isDone ? "Is DONE" : "Is NOT DONE"}
      </Button>
      <Modal isOpen={modalIsOpen} style={ {textAlign:"center"}}>
        <Form.Label>Write a task </Form.Label>
        <Form.Control as="textarea" rows={3} 
        value={ taskdescrption}
        onChange={(e) => settaskDescription(e.target.value)}
        />
        <br />
        <Button variant="success"  onClick={ handleSubmit}>SUBMIT</Button>
        
        <Button variant="danger" onClick={closeModal}>CLOSE</Button>
      </Modal>
    </div>
  );
}

export default Task;
