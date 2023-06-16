import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <header>
      <h1>Total task {tasks.length}</h1>
      <Link to="/create-task">Create Task</Link>
    </header>
  );
}
