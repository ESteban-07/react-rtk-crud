import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Header() {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks);

  const handleCreate = () => {
    navigate('/create-task');
  };

  return (
    <header>
      <h1 className="text-white text-capitalize mb-3">
        Total tasks ({tasks.length})
      </h1>
      <Button variant="success" onClick={handleCreate}>
        Create Task
      </Button>
    </header>
  );
}
