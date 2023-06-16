import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import Header from './Header';

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <Header />

      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
