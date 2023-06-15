import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';

export default function TaskCard({ task }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div id={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}
