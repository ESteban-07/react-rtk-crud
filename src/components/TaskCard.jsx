import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';

export default function TaskCard({ task }) {
  const dispatch = useDispatch();

  console.log(task);

  return (
    <div id={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => dispatch(deleteTask(task))}>Delete</button>
    </div>
  );
}
