import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid(), completed: false }));
    }

    // Nos enviará a la ruta inicial
    redirectToMainPage();
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  const redirectToMainPage = () => {
    navigate('/');
  };

  return (
    <Form
      className="w-100 d-flex flex-column justify-content-center align-items-center m-auto rounded p-4 shadow-lg"
      onSubmit={handleSubmit}
      style={{
        minWidth: '300px',
        maxWidth: '400px',
        backgroundColor: '#27374D',
      }}>
      <Form.Group className="mb-3 w-100" controlId="formBasicTitle">
        <Form.Label className="text-white fw-bold">Task Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={handleChange}
          value={task.title}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100" controlId="formBasicDescription">
        <Form.Label className="text-white fw-bold">Task Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          placeholder="Enter description"
          onChange={handleChange}
          value={task.description}
        />
      </Form.Group>

      <div className="d-flex gap-2">
        <Button type="submit">Save</Button>
        <Button variant="warning" onClick={redirectToMainPage}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}
