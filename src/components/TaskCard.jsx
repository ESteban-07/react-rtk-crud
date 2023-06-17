import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function TaskCard({ task }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-task/${id}`);
  };

  return (
    <Col
      className="p-0"
      style={{ width: '100%', minWidth: '300px', maxWidth: '350px' }}>
      <Card id={task.id}>
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <div className="d-flex gap-2">
            <Button variant="primary" onClick={() => handleEdit(task.id)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(task.id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
