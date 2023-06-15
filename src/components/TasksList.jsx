import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
